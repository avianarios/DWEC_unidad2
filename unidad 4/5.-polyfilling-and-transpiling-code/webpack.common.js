import path from 'path';
//import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './fuente/index.js',
  output: {
    path: path.resolve(process.cwd(), 'compilado', process.env.modo),
  },
  mode: process.env.modo,
/*  plugins: [
    new HtmlWebpackPlugin({
      template: './fuente/index.html',
    }),
  ],*/
};