import { useState, useEffect } from "react";
import { getGifs } from "../logic/gif"

export const useFetchGifs = ( category ) => {
  
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);



  return {
    images,
    isLoading: false
  }
}
