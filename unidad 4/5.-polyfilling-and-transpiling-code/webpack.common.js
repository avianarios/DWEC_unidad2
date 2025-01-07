import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist', process.env.modo),
  },
  mode: process.env.modo,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};