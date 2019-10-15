import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Game from './components/Game';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          Game Lobby
        </header>
        <Game />
      </div>
    </Provider>
  );
}

export default App;
