import React from 'react';
import { useParams } from 'react-router-dom';
import useFruitsDetail from '../hooks/useFruitsDetail';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const {fruitId} = useParams();
    const [fruit] = useFruitsDetail(fruitId);
    const [user] = useAuthState(auth);
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const order = {
            name:user.displayName,
            uid: user.uid,
            phone: e.target.phone.value,
            address: e.target.address.value,
            fruitId: fruitId,
            fruit:fruit.name
        }
        axios.post("http://localhost:5000/order", order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast("Your order has booked");
                e.target.reset()
            }
        })

    }
    return (
        <div>
            <h2>Proceed to checkout</h2>
            <form onSubmit={handlePlaceOrder}>
                Name: <input className="mb-2 w-50 " type="text" value={user?.displayName} name="name" placeholder='Enter your name 'required disabled/>
                <br />
                Customer Id : <input className="mb-2 w-50 " type="text" value={user?.uid} name="name" placeholder='Enter your name 'required disabled/>
                <br />
                Address: <input className="mb-2 w-50" type="text" name="address" placeholder='Enter your address 'required autoComplete="off"/>
                <br />
                Phone Number: <input className="mb-2 w-50" type="text" name="phone" placeholder='Enter your phone number 'required />
                <br />
                Your service: <input className="mb-2 w-50" type="text" name="service" placeholder={fruit.name} disabled />
                <br />
                {/* <input type="submit" value="submit" /> */}
                <button className="btn btn-warning">Submit</button>
            </form>
           
        </div>
    );
};

export default Checkout;