import React from 'react';
import {useNavigate } from 'react-router-dom';

const Fruit = ({fruit}) => {
    
const navigate= useNavigate()
const navigateToServiceDetail = id =>{
       navigate(`/fruits/${id}`)
        
    }
    return (
        <div className='service'>
            <img className='w-100' src={fruit?.img} alt="" />
            <h2>{fruit?.name}</h2>
            <p>Price: {fruit?.price}</p>
            <p><small>{fruit?.description}</small></p>
            <button onClick={() => navigateToServiceDetail(fruit?._id)} className='btn btn-primary'>Book: {fruit?.name}</button>
        </div>
    );
};

export default Fruit;