import { useState, useEffect } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUS";
import Menu from "./Menu";
import Addtocart from "./Addtocart";

function App() {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });


  useEffect(() => {

    localStorage.setItem(
      "cart", JSON.stringify(cart));

  }, [cart]);


  return (
    <>
      <Navbar />

      <Home />

      <AboutUs />

      <Menu
        cart={cart}
        setCart={setCart}
      />

      <Addtocart
        cart={cart}
        setCart={setCart}
      />
      <Login></Login>

    </>
  );
}

export default App;