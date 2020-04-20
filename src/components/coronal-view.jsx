import React from 'react';

import brainY from '../media/brain-y.jpg';

const CoronalView = () => (
  <div className='coronal-view'>
    <h2 className='view-header'>CoronalView</h2>
    <img className='view' src={brainY} alt='coronal-view' />
  </div>
);

export default CoronalView;