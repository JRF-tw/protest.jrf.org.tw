import './stylesheets/main.css';
import React from 'react';
import SocialMovementCrime from './src/socialMovementCrime';


function renderSocialMovementCrime() {
  var element = document.createElement('div');
  element.className = 'socialMovementCrime';
  document.body.appendChild(element);
  React.render(<SocialMovementCrime />, element);
}

renderSocialMovementCrime();

