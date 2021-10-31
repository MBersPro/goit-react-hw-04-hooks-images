import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import { imageGallery } from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className={imageGallery}>
          {this.props.imgList.map((item) => (
            <ImageGalleryItem img={item} onModalOpen={this.props.onModalOpen}/>
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
