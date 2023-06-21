import React from 'react';
import styles from './App.module.css';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { getImage } from '../api';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    queryResult: [],
    loading: false,
    currentPage: 1,
    isModalOpen: false,
    modalImage: null,
    totalQueryResult: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, searchQuery } = this.state;
    const prevPage = prevState.currentPage;
    const prevSearchQuery = prevState.searchQuery;

    if (prevSearchQuery !== searchQuery || prevPage !== currentPage) {
      this.setState({ loading: true });
      this.handleFetch();
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, currentPage: 1, queryResult: [] });
  };

  handleFetch = () => {
    const { currentPage, searchQuery } = this.state;

    getImage(currentPage, searchQuery)
      .then(images => {
        if (images.hits.length === 0) {
          toast.info('Sorry, these images were not found. Please try again.');
          return;
        }

        this.setState(prevState => ({
          queryResult: [...prevState.queryResult, ...images.hits],
          showBeggin: this.statePage < Math.ceil(images.totalHits / 12),
          totalQueryResult: images.totalHits,
        }));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => this.setState({ loading: false }));
  };

  incrementPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  enlargeImage = clickedImage => {
    this.toggleModal();
    this.setState({
      modalImage: clickedImage,
    });
  };
  render() {
    const {
      searchQuery,
      queryResult,
      loading,
      isModalOpen,
      modalImage,
      totalQueryResult,
    } = this.state;

    return (
      <div className={styles.App}>
        <ToastContainer autoClose={3000} />
        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
        {queryResult.length > 0 && (
          <ImageGallery images={queryResult} openModal={this.enlargeImage} />
        )}
        {isModalOpen && (
          <Modal
            largeImageURL={modalImage}
            onClose={this.toggleModal}
            description={searchQuery}
          />
        )}
        {loading && <Loader />}
        {queryResult.length > 0 &&
          queryResult.length !== totalQueryResult &&
          !loading && <Button onClick={this.incrementPage} />}
      </div>
    );
  }
}
