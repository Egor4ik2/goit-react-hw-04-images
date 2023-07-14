import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ imageURL, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div className={styles.Modal} onClick={handleClick}>
      <div className={styles.Overlay}>
        <img src={imageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
