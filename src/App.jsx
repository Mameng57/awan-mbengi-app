import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import HomePage from "./components/Pages/HomePage";
import OrderPage from "./components/Pages/OrderPage";
import NavBar from "./components/UI/NavBar";
import Foods from "./components/Models/Foods";
import CartModal from "./components/UI/CartModal";
import Wrapper from "./components/Helpers/Wrapper";

const App = () => {

  const location = useLocation();
  const [cartCounter, setCartCounter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addCartCounter = () => setCartCounter((prevState) => prevState += 1);
  const subCartCounter = () => setCartCounter((prevState) => prevState -= 1);

  const addCartItem = (menu) => {
    setCartItems((prevState) => [...prevState, menu]);
  }

  const deleteCartItem = (id) => {
    setCartItems([...cartItems.filter((value) => value.id !== id)]);
  }

  const routes = [
    {path: "/", element: <HomePage specials={Foods.specials} />},
    {path: "/about", element: <AboutPage />},
    {path: "/order", element: <OrderPage menus={Foods.menus} addItem={addCartItem} addCounter={addCartCounter} />},
  ];

  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter> {
        modalOpen &&
        <CartModal
          items={cartItems}
          setModal={setModalOpen}
          subCounter={subCartCounter}
          deleteItem={deleteCartItem}
        />
      }
      </AnimatePresence>
      <NavBar cartCounter={cartCounter} currentLocation={location} setModal={setModalOpen} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}> {
          routes.map(
            (route) => (<Route path={route.path} element={route.element} key={location.pathname} />)
          )
        }
        </Routes>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
