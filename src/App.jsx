import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import HomePage from "./components/Pages/HomePage";
import OrderPage from "./components/Pages/OrderPage";
import NavBar from "./components/UI/NavBar";
import Foods from "./components/Models/Foods";
import CartModal from "./components/UI/CartModal";

const App = () => {

  const location = useLocation();
  const [cartCounter, setCartCounter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addCartCounter = () => setCartCounter((prevState) => prevState += 1);
  const subCartCounter = () => setCartCounter((prevState) => prevState -= 1);

  const addCartItem = (menu) => {
    setCartItems((prevState) => {
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
      addCartCounter();
      return [menu, ...prevState];
    });
  }

  const deleteCartItem = (id) => {
    subCartCounter();
    setCartItems([...cartItems.filter((value) => value.id !== id)]);
  }

  const routes = [
    {path: "/", element: <HomePage specials={Foods.specials} />},
    {path: "/about", element: <AboutPage />},
    {path: "/order", element: <OrderPage menus={Foods.menus} addItem={addCartItem} />},
  ];

  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter> {
        modalOpen &&
        <CartModal
          items={cartItems}
          setModal={setModalOpen}
          deleteItem={deleteCartItem}
          setCartItems={setCartItems}
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
    </React.Fragment>
  );
}

export default App;
