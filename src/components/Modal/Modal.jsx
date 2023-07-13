import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ imageURL, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleCloseClick = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={imageURL} alt="" />
        <button onClick={handleCloseClick}>Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
