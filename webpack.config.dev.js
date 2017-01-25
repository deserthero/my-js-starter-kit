import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map', // We can use another options like source-map which is more qualified but take longer time and etc.
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'node', // node used with node and we can use web with browsers (Frontend) apps and more for electron and etc.
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'// Backend bundle
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}