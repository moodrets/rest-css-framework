const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const mode = {
	prod: false,
	dev: false
};

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
		filename: 'js/[name].js',
		path: `${__dirname}/dist/`
	},
	css: {
		output: {
			filename: 'css/[name].css',
			chunkFilename: 'css/[name].css',
		}
	},
	copy: {
		patterns: [
			{
				from: 'src/index.html',
				to: ''
			},
		],
  },
  svg: {
    output: {
      esModule: false,
      extract: true,
      runtimeCompat: true,
      spriteFilename: "svg/sprite.svg"
    }
  }
}

module.exports = {
	mode: mode.dev ? 'development' : 'production',
	devtool: mode.dev ? 'source-map' : 'none',
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
		new MiniCssExtractPlugin(paths.css.output),
		new CopyPlugin(paths.copy),
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
            loader: 'sass-loader',
            options: {
              sourceMap: mode.dev,
            }
          }
        ]
      },
      // svg sprite
      {
        test: /(icons).*\.svg$/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: paths.svg.output,
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
