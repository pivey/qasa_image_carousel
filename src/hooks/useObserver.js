import { useEffect, useState } from 'react';
import homeInfo from '../homeInfo';

const useObserver = photoArray => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [selectedInfo, setSelectedInfo] = useState(homeInfo[0]);
  useEffect(() => {
    const observator = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentPhotoIndex = photoArray.findIndex(
              photo => photo.id === entry.target.id
            );
            setSelectedPhoto(currentPhotoIndex);
            setSelectedInfo(homeInfo[currentPhotoIndex]);
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

  return { selectedPhoto, selectedInfo };
};

export default useObserver;
