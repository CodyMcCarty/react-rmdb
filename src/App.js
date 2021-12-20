import React from 'react';
import Header from './components/Header/header';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <div className="App">
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
