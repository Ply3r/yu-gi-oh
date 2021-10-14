import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Game from './components/Game';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/yu-gi-oh/" component={ App }/> 
        <Route path="/yu-gi-oh/game" component={ Game }/> 
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);
