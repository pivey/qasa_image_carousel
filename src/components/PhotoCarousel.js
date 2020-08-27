import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PhotoContainer, PhotoCard } from '../styles/index';

const PhotoCarousel = ({ photoArray }) => (
  <PhotoContainer id="photoContainer">
    {photoArray?.length > 0 &&
      photoArray.map(photo => (
        <PhotoCard id={photo?.id} key={photo?.id} src={photo?.urls?.regular} />
      ))}
  </PhotoContainer>
);

PhotoCarousel.propTypes = {
  photoArray: PropTypes.array,
};

export default PhotoCarousel;
