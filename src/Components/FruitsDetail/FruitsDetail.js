import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFruitsDetail from '../hooks/useFruitsDetail';

const FruitsDetail = () => {
    
    const {fruitId } = useParams();
    const [fruit] = useFruitsDetail(fruitId)
    return (
        <div>
            <h2>You are want to book {fruit.name}</h2>
            <img style={{width:"50%"}} src={fruit.img} alt="" />
            <div className='text-center'>
                <Link to={`/checkout/${fruitId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default FruitsDetail;