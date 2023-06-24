import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ webImage, onClick, description }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles['ImageGalleryItem-image']}
        src={webImage}
        alt={description}
        onClick={onClick}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
