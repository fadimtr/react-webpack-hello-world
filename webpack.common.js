const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        template: './index.html',
        title: 'common'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, "src"),
        },
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                    'file-loader'
                ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                    'file-loader'
                ]
        }
    ]
}
};