import React from 'react';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { getPictures } from '../api';
import { Modal } from './Modal';
import { notification } from './Notification/Notification';
import Error from 'components/Error/Error';
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPics, seteTotalPics] = useState(null);
  const [isModalOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImgSrc] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;
    const startFetching = async () => {
      setLoading(true);
      try {
        const { hits, totalHits } = await getPictures(searchQuery, page);
        setPictures(prevPictures =>
          page === 1 ? hits : [...prevPictures, ...hits]
        );
        seteTotalPics(totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    startFetching();
  }, [searchQuery, page]);

  const handleSerach = searchQueryIncoming => {
    if (searchQueryIncoming === searchQuery) {
      notification(
        `Images of ${searchQueryIncoming} have already been displayed.`
      );
      return;
    }
    setSearchQuery(searchQueryIncoming);
    setPictures([]);
    setPage(1);
    seteTotalPics(null);
    setIsOpen(false);
    setLoading(true);
    setModalImgSrc('');
    setError(null);
  };
  const incrementPage = () => setPage(page => page + 1);
  const onModalClose = () => setIsOpen(false);
  const onModalOpen = ({ target: { dataset } }) => {
    console.log("target: { dataset }", { target: { dataset } })
    setIsOpen(true);
    setModalImgSrc(dataset.src);
  };
  return (
    <div className={styles.App}>
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={handleSerach} />
      {totalPics === 0 && (
        <Error errorText={'Sorry, nothing has been found at your request'} />
      )}
      {pictures.length > 0 && (
        <ImageGallery images={pictures} onClick={onModalOpen} />
      )}
      {isModalOpen && (
        <Modal
          largeImageURL={modalImage}
          onClick={onModalClose}
          description={searchQuery}
        />
      )}
      {loading && <Loader />}
      {totalPics / pictures.length > page && <Button onClick={incrementPage} />}
    </div>
  );
};
