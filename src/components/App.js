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
  const [state, setState] = useState({ ...initialState });

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
    if (this.state.name !== q) {
      setState((prev) => ({ imgList: [], name: q }));
    }
  };

  useEffect((prev) => {
    if (state.name !== prev.name && state.name !== "") {
      setState((prev) => ({...prev, loader: true }));
      getApiData(state.name, state.page)
        .then((images) =>
          setState((prev) => ({...prev, imgList: [...prev.imgList, ...images] }))
        )
        .finally(() => {
          setState((prev) => ({...prev, loader: false }));
        });
    }

    if (state.page !== prev.page) {
      setState((prev) => ({...prev, loader: true }));
      getApiData(state.name, state.page)
        .then((images) =>
          setState((prev) => ({...prev,
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
  }, [state])

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.name !== prevState.name && this.state.name !== "") {
  //     this.setState({ loader: true });
  //     getApiData(this.state.name, this.state.page)
  //       .then((images) =>
  //         this.setState((prev) => ({ imgList: [...prev.imgList, ...images] }))
  //       )
  //       .finally(() => {
  //         this.setState({ loader: false });
  //       });
  //   }

  //   if (this.state.page !== prevState.page) {
  //     this.setState({ loader: true });
  //     getApiData(this.state.name, this.state.page)
  //       .then((images) =>
  //         this.setState((prev) => ({
  //           imgList: [...prev.imgList, ...images],
  //           loader: false,
  //         }))
  //       )
  //       .finally(() => {
  //         window.scrollTo({
  //           top: document.documentElement.scrollHeight,
  //           behavior: "smooth",
  //         });
  //       });
  //   }
  // }

  const onLoadMore = () => {
    setState((prev) => ({...prev,
      page: prev.page + 1,
    }));
  };

    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery
          imgList={state.imgList}
          onModalOpen={onModalOpen}
        />
        {state.imgList.length > 0 && (
          <Button onLoadMore={onLoadMore} />
        )}
        {state.isModalOpen && (
          <Modal
            modalImg={state.modalImg}
            onModalClose={onModalClose}
          />
        )}

        {state.loader && (
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
