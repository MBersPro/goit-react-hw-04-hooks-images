import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import { imageGallery } from "./ImageGallery.module.css";

const ImageGallery = ({onModalOpen, imgList}) => {

    return (
      <>
        <ul className={imageGallery}>
          {imgList.map((item) => (
            <ImageGalleryItem img={item} onModalOpen={onModalOpen}/>
          ))}
        </ul>
      </>
    );
}

export default ImageGallery;
