import React from 'react'
import Bar from './bar/Bar';


const BottomContainer = () => (
    <div className='bottom-container'>
      <p className='usage-text'>You've used<span className='usage-amnt'> 815 GB</span> of your storage</p>
      <Bar />
      <div className='gb-container'>
        <span className='left'>0 GB</span>
        <span className='right'>1000 GB</span>
      </div>
    </div>
  );

export default BottomContainer
