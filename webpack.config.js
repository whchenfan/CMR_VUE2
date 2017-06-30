
module.exports = {
  entry: './demo01.js',
  output: {
    filename: './index.js'
   
  },
  resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
      	test: /\.(png|jpg|gif)$/,
      	use:['url-loader',]

      },
      {

        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  }
 
};