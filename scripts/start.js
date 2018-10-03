const webpack = require('webpack');

const server = require('../webpack.server.development.config');

const multiCompiler = webpack([server]);

// console.log(multiCompiler);

// multiCompiler.plugin('done', (stats) => {
  // console.log('完成');
// });



new Promise((resolve, reject) => {
    multiCompiler.plugin('done', (stats) => {
      console.log('1111');
    });
});
