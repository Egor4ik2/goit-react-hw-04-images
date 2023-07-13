
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => {
  const [imageClassName, setImageClassName] = useState(
    `${styles['ImageGalleryItem-image']} ImageGalleryItem-image`
  );

  const handleClick = () => {
    onImageClick(largeImageURL);
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt=""
        className={imageClassName}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
