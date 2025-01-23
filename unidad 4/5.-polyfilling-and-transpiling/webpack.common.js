//Funciona, salvo el CSS
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';

export default {
  entry: './fuente/js/index.js',
  output: {
    path: path.resolve(process.cwd(), 'compilado', process.env.modo),
  },
  mode: process.env.modo,
  plugins: [
    new HtmlWebpackPlugin({
      template: './fuente/index.html',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      '...',  // Esto asegura que Webpack use el minimizador de JS por defecto
      new HtmlMinimizerPlugin(),  // Agrega el plugin para minimizar el HTML
    ],
  },
};
