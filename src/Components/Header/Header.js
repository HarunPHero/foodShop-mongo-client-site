import { signOut } from 'firebase/auth';
import React from 'react';
import { Container,Nav, Navbar,Offcanvas } from 'react-bootstrap';
import {useAuthState} from "react-firebase-hooks/auth"
import auth from '../../firebase.config';
const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () =>{
    signOut(auth)
  }
    return (
        <>
         <header>
          <Navbar
            bg="secondary"
            class="navbar navbar-expand-lg navbar-light fixed-top"
            expand={false}
          >
            <Container fluid>
              <Navbar.Brand href="/">
                 <h2>
                    <span style={{color:"red"}}>Food</span><span style={{color:"blue"}}>Warehouse</span>
                    </h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    <h2>
                    <span style={{color:"red"}}>Food</span><span style={{color:"green"}}>Warehouse</span>
                    </h2>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#fruits">Fruits</Nav.Link>
                    <Nav.Link href="/addFruit">Add fruit</Nav.Link>
                    <Nav.Link href="/manage">Manage</Nav.Link>                    
                    <Nav.Link href="/orders">Your Orders</Nav.Link>                    
                    <Nav.Link href="/about">About us</Nav.Link>
                    
                    { user ?
                     <> <Nav.Link disabled>{user.displayName}</Nav.Link>
                      <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>sign out</button></>
                    : <Nav.Link href="/login">Login</Nav.Link>}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </header>
      </>
    );
};

export default Header;