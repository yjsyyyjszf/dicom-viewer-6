import React from 'react';

import './image-viewer.scss';


const ImageViewer = (props) => (
  <div className='image-viewer'>
    <h2 className='image-header'>{props.header}</h2>
    <img className='image' src={props.image} alt='viewer' />
  </div>
);

export default ImageViewer;