import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/signup";
import Carts from "./components/carts";

import SignOut from "./components/Logout";
import { BrowserRouter as Router } from "react-router-dom";
import Protected from "./components/protected";
import axios from "axios";
import { auth } from "./firebase/firebase";
import Cards from "./components/Cards";
export const StateContext = createContext();

function Routing() {
  const [data, setData] = useState([]);
  console.log(data)
  const [selectedData, setSelectedData] = useState([]);
  console.log(selectedData)
  useEffect(() => {
    console.log("========", auth);
    axios.get("https://dummyjson.com/products?limit=100").then((response) => {
      setData(response.data.products);
    });
  }, [data]);

  return (
    <div>
      <Router>
        <StateContext.Provider value={{ data, selectedData, setSelectedData }}>
          <Header />
          <Routes>
            <Route path="/" element={<Cards />}></Route>

            <Route path="/cart" element={<Protected props={Carts} />}></Route>

            <Route path="/signout" element={<SignOut />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<Signup />}></Route>
          </Routes>
        </StateContext.Provider>
      </Router>
    </div>
  );
}

export default Routing;
