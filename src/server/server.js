/* eslint-disable global-require */
import express from 'express';
import webpack from 'webpack';
import config from './config/index';

const app = express();
const { ENV, PORT } = config;

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="assets/app.css" type="text/css">
        <title>Platzi Video</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="assets/app.js" type="text/javascript"></script>
    </body>
    </html>
    `);
});

app.listen(PORT, (err) => {
  err ? console.error(errr) : console.log(`Server running on port  ${PORT}`);
});
