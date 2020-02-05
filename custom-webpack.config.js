const webpack = require('webpack');

console.log(process.env.API_URL);
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        ENVIRONMENT: JSON.stringify(process.env.ENVIRONMENT),
        API_URL: JSON.stringify(process.env.API_URL),
      }
    })
  ]
};