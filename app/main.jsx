require("babel/polyfill");

import './index.html';
import './styles/css/checklist.css';
import './styles/images/cover.jpg';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from "react-router";
import routes from './src/routes';
import lawInSocialMovementApp from './src/reducers';



function renderSocialMovementCrime() {
  var store = createStore(lawInSocialMovementApp);
  var element = document.createElement('div');
  element.className = 'socialMovementCrime';
  document.body.appendChild(element);
  Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
    React.render(
      <Provider store={store}>
        {() => <Handler routerState={routerState} />}
      </Provider>,
      element
    );
  });
}





renderSocialMovementCrime();
