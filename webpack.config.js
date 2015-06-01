module.exports = {
    entry: "./build/app.js",
    output: {
        filename: 'bundle.js'
    },
    module: {
       loaders: [
           { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
       ]
   }
};
