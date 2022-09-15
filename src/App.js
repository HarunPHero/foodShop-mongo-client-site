import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Header/Header";
import FruitsDetail from "./Components/FruitsDetail/FruitsDetail";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import RequireAuth from "./Components/Login/RequiredAuth/RequiredAuth";
import Addfruits from "./Components/AddFruits/Addfruits";
import Manage from "./Components/Manage/Manage";
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from "./Components/Orders/Orders";
import About from "./Components/About/About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/fruits/:fruitId"
            element={<FruitsDetail></FruitsDetail>}
          ></Route>
          <Route
            path="/checkout/:fruitId"
            element={<RequireAuth><Checkout></Checkout></RequireAuth>}
          ></Route>
          <Route
            path="/addFruit"
            element={<RequireAuth><Addfruits></Addfruits></RequireAuth>}
          ></Route>
          <Route
            path="/manage"
            element={<RequireAuth><Manage></Manage></RequireAuth>}
          ></Route>
          <Route
            path="/orders"
            element={<RequireAuth><Orders></Orders></RequireAuth>}
          ></Route>
          <Route
            path="/login"
            element={<Login></Login>}
          ></Route>
          <Route
            path="/register"
            element={<Register></Register>}
          ></Route>
          <Route
            path="/about"
            element={<About></About>}
          ></Route>
         
        </Routes>
      </BrowserRouter>  
      <ToastContainer/>
    </div>
  );
}

export default App;
