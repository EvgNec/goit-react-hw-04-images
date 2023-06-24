import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, onClick, description }) => {
  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) onClick();
  };

  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape') onClick();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  return (
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div>
        <img
          className={styles.ModalImage}
          src={largeImageURL}
          alt={description}
          // onClick={e => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string,
};
export default Modal;
