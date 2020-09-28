const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mode = {
	prod: false,
	dev: false
};

const PAGES_DIR = `./src/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

process.argv.forEach(flag => {
	if ( flag === 'development' ) {
		mode.dev = true
	}
	if ( flag === 'production' ) {
		mode.prod = true
	}
});

const paths = {
	entry: [
		'./src/js/app.js'
	],
	output: {
		filename: 'js/[name].[contenthash].js',
		path: `${__dirname}/dist/`
	},
	css: {
		output: {
			filename: 'css/[name].[contenthash].css',
			chunkFilename: 'css/[name].[contenthash].css',
		}
	},
	copy: {
		patterns: [
			{
				from: 'src/favicon.ico',
				to: ''
			},
		],
  },
  svg: {
    spriteConfig: {
      spriteAttrs: {
        id: 'svg-sprite',
        style: 'position:absolute; left: -20000px; top: -20000px;',
        plainSprite: false
      }
    },
    output: {
      publicPath: '/',
      outputPath: '../sprite-svg/',
      spriteFilename: "sprite.svg"
    }
  }
}

module.exports = {
	mode: mode.dev ? 'development' : 'production',
	devtool: 'source-map',
	entry: paths.entry,
	output: paths.output,
	optimization: {
    splitChunks: {
      chunks: 'all'
    }
	},
	resolve: {
    extensions: ['.js', '.sass', '.vue'],
    alias: {
      '@':  path.resolve(__dirname, 'src/js/'),
    }
	},
	plugins: [
    new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
    new CopyPlugin(paths.copy),
		new MiniCssExtractPlugin(paths.css.output),
    new SpriteLoaderPlugin({
      spriteAttrs: {
        id: 'svg-sprite',
        style: 'position:absolute; left: -20000px; top: -20000px;',
        plainSprite: false
      }
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`,
    })),
	],
	module: {
		rules: [
			// js
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // vue components
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        loader: 'vue-loader'
      },
      // pug pages
      {
        test: /\.pug$/,
        exclude: /(node_modules)/,
        loader: 'pug-loader',
        query: {
          pretty: true,
        }
      },
      // scss
      {
        test: /\.(sass|scss)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: mode.dev,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-sort-media-queries')({
                    sort: 'mobile-first',
                  }),
                ],
              },
              sourceMap: mode.dev,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: mode.dev,
            }
          }
        ]
      },
      // svg sprite
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              esModule: false,
              extract: true,
              runtimeCompat: true,
              spriteFilename: '../src/svg/sprite.svg'
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                // fill|fill-rule|stroke|clip-rule
                { removeAttrs: { attrs: '(fill|fill-rule|stroke)' } },
                { removeTitle: true },
                { removeUselessDefs: true },
                { removeDesc: true },
                { convertPathData: false },
                { convertColors: { shorthex: false } },
                { convertPathData: false }
              ]
            }
          }
        ],
      }
		]
	},
	devServer: {
    port: 1020
  }
}