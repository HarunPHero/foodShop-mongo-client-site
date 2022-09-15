import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';

const Fruits = () => {
    const [fruits, setFruits] = useState([])
    useEffect(()=>{
        const url = `http://localhost:5000/fruits`
        fetch(url)
        .then(res => res.json())
        .then(data => setFruits(data))
    },[])
    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 id='fruits' className='text-primary text-center mt-5'> Our Fruits</h1>
            <div className="services-container row row-cols-1 row-cols-md-3 g-4">
            {
               fruits.map(fruit =><>
                  <Fruit key={fruit._id} fruit={fruit}/>
                </>) 
            }
            </div>
            </div>
        </div>
    );
};

export default Fruits;