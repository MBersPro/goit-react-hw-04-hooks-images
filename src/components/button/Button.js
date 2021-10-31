import React, { Component } from 'react'
import {button} from './Button.module.css'

class Button extends Component {
    state = {}
    render() {
        return (
            <button className={button} onClick={this.props.onLoadMore}>
                Load More
            </button>
        );
    }
}

export default Button;