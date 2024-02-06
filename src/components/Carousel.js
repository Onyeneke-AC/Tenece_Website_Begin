import React from 'react';
import { Link } from 'react-router-dom';
import "./Carousel.css";

export const Carousel  = ({ item }) => {
    return (
        <Link to={item.path} className="carousel_link">
            <div className="carousel"> { item.news } </div>
        </Link>
    )
};
