const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/scripts', 'index.js')
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/scripts/'),
      '@img': path.resolve(__dirname, 'src/img/'),
      '@helpers': path.resolve(__dirname, 'src/scripts/helpers'),
      '@pages': path.resolve(__dirname, 'src/scripts/Pages/'),
      '@components': path.resolve(__dirname, 'src/scripts/Components/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './src/favicon.ico', to: '' },
      ],
    }),
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      // scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/inline'
      },
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
