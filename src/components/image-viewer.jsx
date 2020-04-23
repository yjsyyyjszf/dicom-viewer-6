import React from 'react';
import DwvComponent from './DwvComponent';

import './image-viewer.scss';


const ImageViewer = (props) => (
  <div className='image-viewer'>
    <h2 className='image-header'>{props.header}</h2>
    <DwvComponent />
  </div>
);

export default ImageViewer;