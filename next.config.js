const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
module.exports = withImages(
  withSass({
    sassLoaderOptions: {
      includePaths: ["absolute/path/a", "absolute/path/b"]
    }
  })
);