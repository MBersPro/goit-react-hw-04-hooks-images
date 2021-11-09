import React from 'react'
import {button} from './Button.module.css'

const Button = ({ onLoadMore}) => {
        return (
            <button className={button} onClick={onLoadMore}>
                Load More
            </button>
        );
    
}

export default Button;