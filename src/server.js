import Express from 'express';
import React from 'react';
import Location from 'react-router/lib/Location';
import config from './config';
import favicon from 'serve-favicon';
import compression from 'compression';
import path from 'path';
import createStore from './redux/create';
import universalRouter from './universalRouter';
import Html from './Html';
import PrettyError from 'pretty-error';
import App from './redux/reducers';


const pretty = new PrettyError();
const app = new Express();


app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'images', 'icon.png')));

app.use(require('serve-static')(path.join(__dirname, '..', 'static')));

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
  const store = createStore();
  const location = new Location(req.path, req.query);
  if (__DISABLE_SSR__) {
    res.send('<!doctype html>\n' +
      React.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={<div/>} store={store}/>));
  } else {
    universalRouter(location, undefined, store)
      .then(({component}) => {
        res.send('<!doctype html>\n' +
          React.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store}/>));
      })
      .catch((error) => {
        if (error.redirect) {
          res.redirect(error.redirect);
          return;
        }
        console.error('ROUTER ERROR:', pretty.render(error));
        res.status(500).send({error: error.stack});
      });
  }
});

if (config.port) {
  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info('==> ✅  Server is listening');
      console.info('==> 🌎  %s running on port %s', config.app.name, config.port);
      console.info('----------\n==> 💻  Open http://localhost:%s in a browser to view the app.', config.port);
    }
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
