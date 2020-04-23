import React from 'react';

import './view.scss';
import brainX from '../media/brain-x.jpg';

const AxialView = () => (
  <div className='axial-view'>
    <h2 className='view-header'>AxialView</h2>
    <img className='view' src={brainX} alt='axial-view' />
  </div>
);

export default AxialView;