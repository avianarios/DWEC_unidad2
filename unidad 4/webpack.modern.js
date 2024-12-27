import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';


export default merge(common, {
  output: {
    filename: 'bundle.modern.js',
  },
});
