loaders: [
  {
    test: /\.coffee$/,
    exclude: /node_modules/
    loader: 'coffee',
  },
  {
    test: /\.es6$/,
    exclude: /node_modules/
    loader: 'babel',
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
  }
];