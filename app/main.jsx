import './stylesheets/main.css';
import React from 'react';
import  from './src/socialMovementCrime';

// init shell
renderShell();

function renderShell() {
  var shell = document.createElement('div');
  shell.className = 'app-shell';
  document.body.appendChild(shell);
  React.render(<FilterableProductTable/>, shell);
}