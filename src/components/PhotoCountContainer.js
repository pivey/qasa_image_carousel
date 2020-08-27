import React from 'react';
import { PropTypes } from 'prop-types';
import { PhotoCount, PhotoCountContainer as Container } from '../styles/index';

const PhotoCountContainer = ({ photoArray, selectedPhoto }) => (
  <Container>
    {photoArray.length > 0 &&
      photoArray.map((photo, ind) => (
        <PhotoCount
          selected={selectedPhoto === ind}
          key={photo.created_at}
          href={`#${photo.id}`}
        />
      ))}
  </Container>
);

PhotoCountContainer.propTypes = {
  photoArray: PropTypes.array,
  selectedPhoto: PropTypes.number,
};

export default PhotoCountContainer;
