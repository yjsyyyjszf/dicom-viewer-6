import React from 'react';

import Header from './components/layout/header';
import ImageViewer from './components/image-viewer';

import brainX from './media/brain-x.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <ImageViewer header='View' image={brainX} />
    </div>
  );
}

export default App;
