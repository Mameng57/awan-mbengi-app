import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import HomePage from "./components/Pages/HomePage";
import OrderPage from "./components/Pages/OrderPage";
import NavBar from "./components/UI/NavBar";
import Foods from "./components/Models/Foods";

const App = () => {

  const location = useLocation();
  const [cartCounter, setCartCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (menu) => {
    setCartItems(
      (prevState) => {
        for (let index = 0; index < prevState.length; index++) {
          if (prevState[index]['id'] === menu.id) {
            setCartItems(
              (items) => {
                items[index]['quantity'] += 1;
                return [...items];
              }
            );
            return [menu, ...prevState.filter((value) => value.id !== menu.id)];
          }
        }
        setCartCounter((prevState) => prevState += 1);
        return [menu, ...prevState];
      }
    );
  }

  const deleteCartItem = (id) => {
    setCartCounter((prevState) => prevState -= 1);
    setCartItems([...cartItems.filter((value) => value.id !== id)]);
  }

  const routes = [
    {path: "/", element: <HomePage specials={Foods.specials} />},
    {path: "/about", element: <AboutPage />},
    {path: "/order", element: <OrderPage menus={Foods.menus} addItem={addCartItem} />},
  ];

  return (
    <React.Fragment>
      <NavBar cartCounter={cartCounter} items={cartItems} deleteItem={deleteCartItem} setItem={setCartItems} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}> {
          routes.map(
            (route) => (<Route path={route.path} element={route.element} key={location.pathname} />)
          )
        }
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  );
}

export default App;
