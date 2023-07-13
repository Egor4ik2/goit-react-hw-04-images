import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGal/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from './api/Api'; 
import styles from './App.module.css';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImageURL, setSelectedImageURL] = useState('');
  const [hasMoreImages, setHasMoreImages] = useState(true);

  const loadImages = useCallback(() => {
    setIsLoading(true);

    fetchImages(searchQuery, page) 
      .then((hits) => {
        if (hits.length > 0) {
          setImages(prevImages => [...prevImages, ...hits]);
          setHasMoreImages(hits.length === 12);
        } else {
          setHasMoreImages(false);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery, page]);

  useEffect(() => {
    if (searchQuery !== '') {
      loadImages();
    }
  }, [searchQuery, loadImages]);

  const handleFormSubmit = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    setHasMoreImages(true);
  };

  const handleImageClick = (imageURL) => {
    setSelectedImageURL(imageURL);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedImageURL('');
  }, []);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      loadImages();
    }
  }, [page, loadImages]);

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleFormSubmit} />

      <ImageGallery images={images} onImageClick={handleImageClick} />

      {isLoading && <Loader />}

      {images.length > 0 && hasMoreImages && (
        <Button onClick={handleLoadMore} />
      )}

      {selectedImageURL && (
        <Modal imageURL={selectedImageURL} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
}
