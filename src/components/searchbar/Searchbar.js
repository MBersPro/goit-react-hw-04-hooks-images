import React, { useState } from "react";
import {
  searchbar,
  searchForm,
  searchForm_button,
  searchForm_button_label,
  searchForm_input,
} from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState("");

  const onInputChange = (e) => {
    setState(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    setState("");
  };

  return (
    <header className={searchbar}>
      <form onSubmit={onHandleSubmit} className={searchForm}>
        <button type="submit" className={searchForm_button}>
          <span className={searchForm_button_label}></span>
        </button>

        <input
          type="text"
          onChange={onInputChange}
          value={state}
          className={searchForm_input}
        />
      </form>
    </header>
  );
};

export default Searchbar;
