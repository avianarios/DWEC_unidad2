/*import path from 'path';

export default {
  mode: process.env.modo,
  target: ['web', 'es5'],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.legacy.js',
  },
  entry: './src/index.js',
};



*/
import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  target: ['web', 'es5'],
  output: {
    filename: 'bundle.legacy.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Solo para el legacy
        },
      },
    ],
  },
});
