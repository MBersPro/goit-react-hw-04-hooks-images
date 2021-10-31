import React, { Component } from 'react';
import {
    searchbar,
  searchForm,
  searchForm_button,
  searchForm_button_label,
  searchForm_input,
} from "./Searchbar.module.css";

class Searchbar extends Component {
    state = {
        name: "",
    }

    onInputChange = (e) => {
        this.setState({ name: e.target.value })
        console.log(this.state.name)
    };

    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.name)
        this.setState({name: ""})
    }

    render() {
        return (
          <header className={searchbar}>
            <form onSubmit={this.onHandleSubmit} className={searchForm}>
              <button type="submit" className={searchForm_button}>
                <span className={searchForm_button_label}></span>
              </button>

              <input
                type="text"
                onChange={this.onInputChange}
                value={this.state.name}
                className={searchForm_input}
              />
            </form>
          </header>
        );
    }
}

export default Searchbar;
