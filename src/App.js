import './App.css';
import React from 'react';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div id="App">
      <Header id="AppHeader" titulo= "MI E-Commerce" subtitulo="Tu mejor amigo"/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
