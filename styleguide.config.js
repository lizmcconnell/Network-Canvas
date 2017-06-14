module.exports = {
  webpackConfig: {
    module: {
      loaders: [
        // ** ADDING/UPDATING LOADERS **
        // The "url" loader handles all assets unless explicitly excluded.
        // The `exclude` list *must* be updated with every change to loader extensions.
        // When adding a new loader, you must add its `test`
        // as a new entry in the `exclude` list for "url" loader.

        // "url" loader embeds assets smaller than specified size as data URLs to avoid requests.
        // Otherwise, it acts like the "file" loader.
        {
          exclude: [
            /\.html$/,
            // We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
            // because you might change the hot reloading server from the custom one
            // to Webpack's built-in webpack-dev-server/client?/, which would not
            // get properly excluded by /\.(js|jsx)$/ because of the query string.
            // Webpack 2 fixes this, but for now we include this hack.
            // https://github.com/facebookincubator/create-react-app/issues/1713
            /\.(js|jsx)(\?.*)?$/,
            /\.css$/,
            /\.scss$/,
            /\.json$/,
            /\.svg$/
          ],
          loader: 'url',
          query: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        },
        // JSON is not enabled by default in Webpack but both Node and Browserify
        // allow it implicitly so we also enable it.
        {
          test: /\.json$/,
          loader: 'json'
        },
        // "file" loader for svg
        {
          test: /\.svg$/,
          loader: 'file',
          query: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    }
  }
};
