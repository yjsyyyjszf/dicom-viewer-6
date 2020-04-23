import React from 'react';

import './view.scss';
import brainZ from '../media/brain-z.jpg';

const SagittalView = () => (
  <div className='sagittal-view'>
    <h2 className='view-header'>SagittalView</h2>
    <img className='view' src={brainZ} alt='sagittal-view' />
  </div>
);

export default SagittalView;