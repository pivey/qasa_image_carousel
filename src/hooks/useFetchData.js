import { useEffect, useState } from 'react';
import axios from 'axios';
import saveToLocalStorage from '../utils/saveToLocalStorage';
import accessKey from '../keys';

const housePhotos = `https://api.unsplash.com/search/photos?page=1&query=home&client_id=${accessKey}`;

const fetchData = async pathname => axios(pathname);

const useFetchData = () => {
  const [photoArray, setPhotoArray] = useState(
    JSON.parse(localStorage.getItem('photos')) || []
  );
  useEffect(() => {
    fetchData(housePhotos)
      .then(res => {
        setPhotoArray(res?.data?.results);
        if (
          JSON.parse(localStorage.getItem('photos'))?.length === 0 ||
          JSON.parse(localStorage.getItem('storage')) === null
        ) {
          saveToLocalStorage('photos', res?.data?.results);
        }
      })
      .catch(err => console.log(err));
  }, []);
  return { photoArray };
};

export default useFetchData;
