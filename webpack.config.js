const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotEnvPlugin = require('dotenv-webpack')

module.exports = {
  entry: [
    __dirname + '/src/index.js',
    __dirname + '/src/scss/index.scss',
  ],
  output: {
    filename: 'index.js',
    path: __dirname + '/public/dist/',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|sass|scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.woff|woff2|eot|ttf|otf$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      },
      {
        test: /\.svg|png|jpg|gif$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new DotEnvPlugin({
      safe: true
    })
  ],
  devServer: {
    contentBase: __dirname + '/public/',
    port: 8080,
  },
}