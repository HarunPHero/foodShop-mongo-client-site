import { useEffect, useState } from 'react';

const useFruitsDetail = (fruitId) => {
    const [fruit, setFruit] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/fruits/${fruitId}`
         fetch(url)
        .then(res => res.json())
        .then(data => setFruit(data))
    },[fruitId])
    return [fruit]
};

export default useFruitsDetail;