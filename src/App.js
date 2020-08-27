import React from 'react';
import './assets/tailwind.css';
import './assets/styles.css';
import { GlobalStyle, Container } from './styles/index';
import useFetchData from './hooks/useFetchData';
import useObserver from './hooks/useObserver';
import PhotoCountContainer from './components/PhotoCountContainer';
import HomeDescription from './components/HomeDescription';
import PhotoCarousel from './components/PhotoCarousel';

const App = () => {
  const { photoArray } = useFetchData();
  const { selectedInfo, selectedPhoto } = useObserver(photoArray);

  return (
    <>
      <GlobalStyle />
      <Container>
        <PhotoCarousel photoArray={photoArray} />
        <PhotoCountContainer
          photoArray={photoArray}
          selectedPhoto={selectedPhoto}
        />
        <HomeDescription selectedInfo={selectedInfo} />
      </Container>
    </>
  );
};
export default App;
