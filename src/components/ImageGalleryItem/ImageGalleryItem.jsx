import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ webImage, description, imgModal }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles['ImageGalleryItem-image']}
        src={webImage}
        alt={description}
         data-src={imgModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
