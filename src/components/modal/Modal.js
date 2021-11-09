import React, { useEffect } from "react";
import { overlay, modal } from "./Modal.module.css";

const Modal = ({ modalImg, onModalClose }) => {
  
  useEffect(() => {
    window.addEventListener("keydown", onModalClose);
    return () => {
      window.removeEventListener("keydown", onModalClose);
    }
  })

  return (
    <div className={overlay}>
        <div className={modal}>
          <img src={modalImg} alt="some" />
        </div>
      </div>
  );
}

export default Modal;





