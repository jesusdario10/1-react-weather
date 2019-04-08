import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importar componentes

import WeatherApp from './components/WeatherApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        weather app
        <WeatherApp></WeatherApp>
      </div>
    );
  }
}

export default App;
