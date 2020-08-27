import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import axios from 'axios';
import './assets/tailwind.css';
import './assets/styles.css';
import {
  GlobalStyle,
  Container,
  PhotoContainer,
  PhotoCard,
  LeftIcon,
  RightIcon,
  PhotoCount,
  PhotoCountContainer,
} from './styles/index';
import saveToLocalStorage from './utils/saveToLocalStorage';

const App = () => {
  const photoGridRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [photoArray, setPhotoArray] = useState(
    JSON.parse(localStorage.getItem('photos')) || []
  );
  const housePhotos =
    'https://api.unsplash.com/search/photos?page=1&query=home&client_id=szgXi400gOoMS3kye5ddhENwMDVp4ei2bfO-IGD1Tyc';

  const fetchData = async pathname => axios(pathname);

  useEffect(() => {
    fetchData(housePhotos)
      .then(res => saveToLocalStorage('photos', res?.data?.results))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const observator = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentPhoto = photoArray.findIndex(
              photo => photo.id === entry.target.id
            );
            setSelectedPhoto(currentPhoto);
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        root: document.querySelector('#photoContainer'),
        rootMargin: '0px',
        threshold: 0.75,
      }
    );

    document.querySelectorAll('img').forEach(img => {
      observator.observe(img);
    });
  }, [photoArray]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <PhotoContainer id="photoContainer" ref={photoGridRef}>
          {photoArray.length > 0 &&
            photoArray.map(photo => (
              <PhotoCard
                id={photo.id}
                key={photo.id}
                src={photo?.urls?.regular}
              />
            ))}
        </PhotoContainer>
        <PhotoCountContainer>
          {photoArray.length > 0 &&
            photoArray.map((photo, ind) => (
              <PhotoCount
                selected={selectedPhoto === ind}
                key={photo.created_at}
                href={`#${photo.id}`}
              />
            ))}
        </PhotoCountContainer>
      </Container>
    </>
  );
};

export default App;
