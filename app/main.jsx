import './stylesheets/main.css';
import React from 'react';
import Router from "react-router";
import routes from './src/routes';


function renderSocialMovementCrime() {
  var element = document.createElement('div');
  element.className = 'socialMovementCrime';
  document.body.appendChild(element);
  Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler/>, element);
  });
}

renderSocialMovementCrime();
