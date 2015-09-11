import React from 'react';
import Router from 'react-router';
import createRoutes from './views/routes';
import {Provider} from 'react-redux';

export default function universalRouter(location, history, store) {
  const routes = createRoutes();
  return new Promise((resolve, reject) => {
    Router.run(routes, location, [], (error, initialState) => {
      if (error) {
        return reject(error);
      }

      if (history) {  // only on client side
        initialState.history = history;
      }
      const component = (
        <Provider store={store} key="provider">
          {() => <Router {...initialState} children={routes}/>}
        </Provider>
      );

      return resolve({
        component
      });
    });
  });
}
