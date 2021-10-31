import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import { getApiData } from "../utils/Api";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  state = {
    name: "",
    imgList: [],
    page: 1,
    loader: false,
    isModalOpen: false,
    modalImg: "",
  };

  onModalOpen = (modalImg) => {
    this.setState({ isModalOpen: true, modalImg: modalImg });
    console.log(modalImg);
  };

  onModalClose = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    this.setState({ isModalOpen: false, modalImg: "" });
  };

  onSubmit = (q) => {
    if (this.state.name !== q) {
      this.setState({ imgList: [], name: q });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name && this.state.name !== "") {
      this.setState({ loader: true });
      getApiData(this.state.name, this.state.page)
        .then((images) =>
          this.setState((prev) => ({ imgList: [...prev.imgList, ...images] }))
        )
        .finally(() => {
          this.setState({ loader: false });
        });
    }

    if (this.state.page !== prevState.page) {
      this.setState({ loader: true });
      getApiData(this.state.name, this.state.page)
        .then((images) =>
          this.setState((prev) => ({
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
  }

  onLoadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          imgList={this.state.imgList}
          onModalOpen={this.onModalOpen}
        />
        {this.state.imgList.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {this.state.isModalOpen && (
          <Modal
            modalImg={this.state.modalImg}
            onModalClose={this.onModalClose}
          />
        )}

        {this.state.loader && (
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
}

export default App;
