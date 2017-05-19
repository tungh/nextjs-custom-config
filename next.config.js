const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.entry().then((values) => {
      console.log(values);
    });

    config.module.rules.push(
      {
        test: /\.css$/,
        loader: 'emit-file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
        include: [
          path.resolve(__dirname, 'styles'),
          path.resolve(__dirname, 'node_modules'),
        ],
      });

    config.plugins.push(new ExtractTextPlugin('[name].css'));

    return config;
  },
};
