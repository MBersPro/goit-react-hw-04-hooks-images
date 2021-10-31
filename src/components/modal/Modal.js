import React, { Component } from "react";
import { overlay, modal } from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.onModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.onModalClose);
  }

  render() {
    return (
      <div className={overlay}>
        <div className={modal}>
          <img src={this.props.modalImg} alt="some" />
        </div>
      </div>
    );
  }
}

export default Modal;
