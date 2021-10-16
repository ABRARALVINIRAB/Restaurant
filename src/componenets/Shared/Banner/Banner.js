import React from 'react';
import { Button } from 'react-bootstrap';
import banner from "../../../Image/bannerbackground.png"
import "./Banner.css"

const Banner = () => {

    return (
        <>
            <div className='banner' style={{
                backgroundImage: `url(${banner})`


            }}>

                <input className="search-box-container" type="search" placeholder="Search food items" name="" id="" />
                <button className="rounded">Search</button>

            </div>
        </>
    );
};

export default Banner;