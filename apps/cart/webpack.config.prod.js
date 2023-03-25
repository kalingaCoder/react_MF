module.exports = require('./webpack.config');


//Code wih which I tried
/* const withModuleFederation = require("@nrwl/react/module-federation");
const moduleFederationConfig = require("./module-federation.config");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
var BrotliPlugin = require("brotli-webpack-plugin");

module.exports = withModuleFederation({
  plugins: [
    new BrotliPlugin({
      asset: "[path].br",
      threshold: 0,
      minRatio: 0.8,
    }),
  ],
  ...moduleFederationConfig,
}); 

const { composePlugins, withNx } = require("@nrwl/webpack");
const { withReact } = require("@nrwl/react");

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact(),
  (config, { options, context }) => {
    // Update the webpack config as needed here.
   config.plugins.push(
     new BrotliPlugin({
       asset: "[path].br",
       threshold: 0,
       minRatio: 0.8,
     })
   );
    return {config, ...moduleFederationConfig};
  }
); 

const { composePlugins, withNx } = require("@nrwl/webpack");
const { merge } = require("webpack-merge");
 const withModuleFederation = require("@nrwl/react/module-federation"); 
// or `const withModuleFederation = require('@nrwl/angular/module-federation');`

module.exports = composePlugins(
  withNx(),
  async (config, { options, context }) => {

     config.plugins.push(
       new BrotliPlugin({
         asset: "[path].br",
         threshold: 0,
         minRatio: 0.8,
       })
     );

   const federatedModules = await withModuleFederation({
      //...moduleFederationConfig,
      // your options here
    }); 

    return merge(federatedModules(config, context), {
      // overwrite values here
    }); 
  }
); */
