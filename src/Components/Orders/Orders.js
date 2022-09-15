import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';
import axiosPrivate from '../api/axiosPrivate';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
       const getOrders = async() => {
        const uid = user?.uid;
        const url = `http://localhost:5000/orders?uid=${uid}`;
        try {
            const { data } = await axiosPrivate?.get(url);
            
            setOrders(data);
          } catch (error) {
           
            if (
              error?.response?.status === 401 ||
              error?.response?.status === 403
            ) {
              signOut(auth);
              toast("Something went wrong!!. Please login again");
              navigate("/login");
            }
          }
       

       }
       getOrders()
    },[user])
    return (
        <div>
            <h1 className="text-center text-primary">Your Orders</h1>
      <Row xs={1} md={2} className="g-4 m-5">
        {orders.map((order) => (
          <>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title key={order._id}>{order.fruit}</Card.Title>
                  <Card.Text>
                    Name: {order.name} <br />
                    Phone number: {order.phone} <br />
                    Customer Id: {order.uid} <br />
                    Address: {order.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
        </div>
    );
};

export default Orders;