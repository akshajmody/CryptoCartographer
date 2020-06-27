const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
};