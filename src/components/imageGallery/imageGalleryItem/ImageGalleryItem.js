import React from "react";
import {
  imageGalleryItem,
  imageGalleryItem_image,
} from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ onModalOpen, img }) => {

  const onModalChanger = () => {
    onModalOpen(img.largeImageURL);
  };

  return (
    <li className={imageGalleryItem}>
      <img
        className={imageGalleryItem_image}
        src={img.webformatURL}
        alt="some"
        onClick={onModalChanger}
      />
    </li>
  );
};

export default ImageGalleryItem;
