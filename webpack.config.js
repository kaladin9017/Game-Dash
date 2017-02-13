const ExtractTextPlugin = require('extract-text-webpack-plugin');
const stylusLoader  = ExtractTextPlugin.extract('style-loader',"css-loader!stylus-loader");
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test:/\.styl$/, loader: stylusLoader },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ],
    loader: 'eslint',
    exclude: /node_modules/
  },
  plugins:[
    new ExtractTextPlugin("public/style.css"),
    new DotenvPlugin({
      sample: './.local-env',
      path: './.env'
    })
      //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]

};
