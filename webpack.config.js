const path = require('path');

module.exports = {
  entry: './app/assets/scripts/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './app/temp/scripts')
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
