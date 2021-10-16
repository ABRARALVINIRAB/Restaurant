import React from 'react';
import { useParams } from 'react-router-dom';


const Details = () => {
    const { serviceId } = useParams();
    
    
    
    
    return (
        <div>
            <h1>This is details:{serviceId}</h1>
            {
               
            }
        </div>
    );
};

export default Details;