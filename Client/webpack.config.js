const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
  entry: './src/index.js',
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new VueLoaderPlugin()],
  serve: {
    add: (app, middleware, options) => {
      app.use(convert(history()));
    },
  },
};
