import React from 'react';
import documentIcon from '../../assets/images/icon-document.svg';
import folderIcon from '../../assets/images/icon-folder.svg';
import uploadIcon from '../../assets/images/icon-upload.svg';
import './icons.css';

const icons = {
  document: documentIcon,
  folder: folderIcon,
  upload: uploadIcon,
};

const Icon = ({ name, className }) => {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <div className={`icon-container ${className}`}>
      <img src={icon} alt={name} className='icon' />
    </div>
  );
};




export default Icon;