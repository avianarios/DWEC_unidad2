import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
//  Not necessary as webpack just invokes babel to transpile.
//   target: ['web', 'es5'],
  output: {
    filename: 'bundle.legacy.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Se llama para transpilar. Por tanto, sólo lo llama el legacy
        },
      },
    ],
  },
});
