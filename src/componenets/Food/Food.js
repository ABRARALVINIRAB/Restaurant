import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Food.css"

const Food = (props) => {
    const { img, name, id, description, price } = props.food;
    
    
   
    return (
        <div className='container'>

            <div class="col">
                <div class="card images">
                    <img className="" src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <h3>$ {price}</h3>
                        <Link to={`/details/${id}`}>
                            <button className='details-button'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Food;