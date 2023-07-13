import React, { useState } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  const [visibleImages, setVisibleImages] = useState(12); 

  const handleClick = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 12); 
    onClick(); 
  };

  return (
    <button type="button" className={styles.Button} onClick={handleClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
