import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

import Food from '../Food/Food';

import "./Foods.css"

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [showFoods,setShowFoods]=useState([])
    useEffect(() => {
        const url = "data.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setFoods(data)
                setShowFoods(data);
            });
           

    }, [])
    const filterItem = (category) => {
       
        const update = foods.filter((currentElem) => {
            return currentElem.category === category;
        })
        
        setShowFoods(update)
        console.log(update);
        
    }

    return (


        <>
            <div className="buttons">
                <button className="btn btn-warning me-5" onClick={() => filterItem('breakfast')}>Breakfast</button>
                <button className="btn btn-warning me-5" onClick={() => filterItem('launch')}>Launch</button>
                <button className="btn btn-warning me-5" onClick={() => filterItem('dinner')}>Dinner</button>

            </div>


            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    showFoods.map(food => <Food food={food}
                        key={food.id}
                    ></Food>
                    
                    )

                }
               



            </div>

        </>



    );
};

export default Foods;

