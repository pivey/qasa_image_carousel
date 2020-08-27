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
  const [iconTop, setIconTop] = useState(0);
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
    console.log('here are your photos', photoArray);
  }, [photoArray]);

  useLayoutEffect(() => {
    const photoContainer = photoGridRef.current;
    const { scrollWidth } = photoGridRef.current;
    const dividedLength = scrollWidth / photoArray.length;
    const lengthArray = photoArray.map((_, ind) => dividedLength * ind);
    const trackScrollPos = () => {
      const currentScrollPos = photoContainer.scrollLeft;
      console.log(currentScrollPos);
    };

    photoContainer.current.addEventListener('scroll', trackScrollPos, false);
    return function cleanup() {
      photoContainer.current.removeEventListener(
        'scroll',
        trackScrollPos,
        false
      );
    };
  }, [photoArray, photoArray.length]);

  return (
    <>
      <GlobalStyle />
      <Container>
        {/* <LeftIcon top={iconTop} />
        <RightIcon top={iconTop} /> */}
        <PhotoContainer ref={photoGridRef}>
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
