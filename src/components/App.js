import React, { useState, useEffect } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import { getApiData } from "../utils/Api";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const initialState = {
  name: "",
  imgList: [],
  page: 1,
  loader: false,
  isModalOpen: false,
  modalImg: "",
}

const App = () => {
  const [newState, setState] = useState(initialState);

  const onModalOpen = (modalImg) => {
    setState((prev) => ({...prev, isModalOpen: true, modalImg: modalImg }));
  };

  const onModalClose = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    setState((prev) => ({...prev, isModalOpen: false, modalImg: "" }));
  };

  const onSubmit = (q) => {
    if (newState.name !== q) {
      setState((prev) => ({ imgList: [], name: q, page: 1 }));
    }
  };

  useEffect(() => {
    if (newState.name) {
      setState((prev) => ({ ...prev, loader: true }));
      getApiData(newState.name, newState.page)
        .then((images) =>
          setState((prev) => ({
            ...prev,
            imgList: [...prev.imgList, ...images],
            loader: false,
          }))
        )
        .finally(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    }
  }, [newState.name, newState.page])

  const onLoadMore = () => {
    setState((prev) => ({...prev,
      page: prev.page + 1,
    }));
  };

    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery imgList={newState.imgList} onModalOpen={onModalOpen} />
        {newState.imgList.length > 0 && <Button onLoadMore={onLoadMore} />}
        {newState.isModalOpen && (
          <Modal modalImg={newState.modalImg} onModalClose={onModalClose} />
        )}

        {newState.loader && (
          <Loader
            type="Puff"
            color="#001aff"
            height={200}
            width={200}
            timeout={3000}
            position="top-center"
          />
        )}
      </>
    );
}

export default App;
