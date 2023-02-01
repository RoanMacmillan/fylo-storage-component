import React from 'react'
import Icon from './icons/Icon';
import headingImage from '../assets/images/logo.svg'

const TopContainer = () => (
    <div className='top-container'>
      <img src={headingImage} alt="Heading" className="main-heading-image" />
      <div className='icon-wrapper'>
        <Icon name="document" className="icon" />
        <Icon name='folder' className='icon' />
        <Icon name='upload' className='icon' />
      </div>
    </div>
  );

export default TopContainer
