import React from 'react';

import Header from './components/layout/header';
import AxialView from './components/axial-view';
import CoronalView from './components/coronal-view';
import SagittalView from './components/sagittal-view';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <AxialView />
      <CoronalView />
      <SagittalView />
    </div>
  );
}

export default App;
