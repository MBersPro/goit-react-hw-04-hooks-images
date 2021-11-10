import React from "react";
import {
  imageGalleryItem,
  imageGalleryItem_image,
} from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ onModalOpen, img }) => {
  console.log(img)
  const onModalChanger = () => {
    onModalOpen(img.urlToImage);
  };

  return (
    <li className={imageGalleryItem}>
      <img
        className={imageGalleryItem_image}
        src={img.urlToImage}
        alt="some"
        onClick={onModalChanger}
      />
    </li>
  );
};

export default ImageGalleryItem;
