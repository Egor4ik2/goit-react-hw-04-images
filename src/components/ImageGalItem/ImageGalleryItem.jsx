import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => {
  return (
    <li>
      <img src={webformatURL} alt="" onClick={() => onImageClick(largeImageURL)} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
