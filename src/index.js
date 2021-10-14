import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Game from './components/Game';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="https://ply3r.github.io/yu-gi-oh/" component={ App }/> 
        <Route path="https://ply3r.github.io/yu-gi-oh/game" component={ Game }/> 
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
