const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    entry: './src/index.js',
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_moduels|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
      path: paths.moduleOutputPath,
      publicPath: '/dist/',
      filename: 'bundle.js',
    },
    devServer: {
      static: paths.publicPaths,
      port: 3000,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  };
};
