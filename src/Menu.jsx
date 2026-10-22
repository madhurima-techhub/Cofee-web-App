/// type 1

// function Menu() {

//     // Counter for each menu item
//   const [coldCoffee, setColdCoffee] = useState(0);

//   return (
//     <section className="menu" id="Menu">
//       <h2 className="menu-title">Our Menu</h2>

//       <div className="menu-card">
//         <div className="menu-image">
//           <img src="public\cold cofee.png" ></img>
//         </div>
//         <div className="menu-content">
//           <h3>Cold Coffee</h3>
//         </div>
//         <p>
//           Creamy chilled coffee blended with milk, ice and a touch of sweetness
//           for a refreshing taste.
//         </p>
//         <div className="menu-bottom">
//           <span className="price">₹130</span>
//           <button className="order-btn">Add to Cart</button>
//         </div>
//       </div>

//       {/* Cappuccino */}
//         <div className="menu-card">
//           <div className="menu-image">
//             <img src="/cappuccino.png" alt="Cappuccino" width="350px" height="450px" />
//           </div>

//           <div className="menu-content">
//             <h3>Cappuccino</h3>
//             <p>
//               Rich espresso combined with steamed milk and
//               smooth creamy foam.
//             </p>

//             <div className="menu-bottom">
//               <span className="price">₹140</span>
//               <button className="order-btn">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         {/* Espresso */}
//         <div className="menu-card">
//           <div className="menu-image">
//             <img src="/espresso.png" alt="Espresso" width="350px" height="450px" />
//           </div>

//           <div className="menu-content">
//             <h3>Espresso</h3>
//             <p>
//               Strong and aromatic espresso made from freshly
//               roasted coffee beans.
//             </p>

//             <div className="menu-bottom">
//               <span className="price">₹100</span>
//               <button className="order-btn">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         {/* Grilled Sandwich */}
//         <div className="menu-card">
//           <div className="menu-image">
//             <img
//               src="/grilled sandwich.png"
//               alt="Grilled Sandwich" width="350px" height="450px"
//             />
//           </div>

//           <div className="menu-content">
//             <h3>Grilled Sandwich</h3>
//             <p>
//               Crispy grilled bread filled with fresh vegetables,
//               cheese and delicious herbs.
//             </p>

//             <div className="menu-bottom">
//               <span className="price">₹120</span>
//               <button className="order-btn">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         {/* Blueberry Muffin */}
//         <div className="menu-card">
//           <div className="menu-image">
//             <img
//               src="/Blueberry Muffin.png"
//               alt="Blueberry Muffin" width="350px" height="450px"
//             />
//           </div>

//           <div className="menu-content">
//             <h3>Blueberry Muffin</h3>
//             <p>
//               Soft and fluffy muffin filled with juicy blueberries
//               and a delicious sweet flavor.
//             </p>

//             <div className="menu-bottom">
//               <span className="price">₹90</span>
//               <button className="order-btn">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         {/* Chocolate Brownie */}
//         <div className="menu-card">
//           <div className="menu-image">
//             <img
//               src="/chocolate cake.png"
//               alt="Chocolate Brownie"
//             />
//           </div>

//           <div className="menu-content">
//             <h3>Chocolate Cake</h3>
//             <p>
//               A delicious and moist chocolate cake made with rich cocoa and soft, fluffy layers.
//               Topped with smooth chocolate frosting, it has the perfect balance of sweetness and rich chocolate flavor.
//             </p>

//             <div className="menu-bottom">
//               <span className="price">₹110</span>
//               <button className="order-btn">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//     </section>
//   );
// 



function Menu({ cart, setCart }) {

  const menuItems = [
    {
      id: 1,
      name: "Cold Coffee",
      image: "/cold cofee.png",
      price: 130,
      description:
        "Creamy chilled coffee blended with milk, ice and sweetness.",
    },

    {
      id: 2,
      name: "Cappuccino",
      image: "/cappuccino.png",
      price: 140,
      description:
        "Rich espresso combined with steamed milk and creamy foam.",
    },

    {
      id: 3,
      name: "Espresso",
      image: "/espresso.png",
      price: 100,
      description:
        "Strong and aromatic espresso made from freshly roasted beans.",
    },

    {
      id: 4,
      name: "Grilled Sandwich",
      image: "/grilled sandwich.png",
      price: 120,
      description:"Crispy grilled bread filled with vegetables and cheese.",
    },

    {
      id: 5,
      name: "Blueberry Muffin",
      image: "/Blueberry Muffin.png",
      price: 90,
      description:
        "Soft muffin filled with juicy blueberries.",
    },

    {
      id: 6,
      name: "Chocolate Cake",
      image: "/chocolate cake.png",
      price: 110,
      description:
        "Moist chocolate cake with rich chocolate frosting.",
    },
  ];


  const addToCart = (id) => {

    setCart({...cart,[id]: 1,});
  
  };


  const increaseQuantity = (id) => {
        setCart({...cart,[id]: cart[id] + 1});

  };


  const decreaseQuantity = (id) => {

    if (cart[id] === 1) {

      const newCart = { ...cart };

      delete newCart[id];

      setCart(newCart);

    } else {

      setCart({...cart,[id]: cart[id] - 1,
      });

    }

  };


  return (
    <section className="menu" id="Menu">

      <h2 className="menu-title">
        Our Menu
      </h2>


      {menuItems.map((item) => (

        <div
          className="menu-card"
          key={item.id}
        >

          <div className="menu-image">

            <img
              src={item.image}
              alt={item.name}
            />

          </div>


          <div className="menu-content">

            <h3>
              {item.name}
            </h3>


            <p>
              {item.description}
            </p>


            <div className="menu-bottom">

              <span className="price">
                ₹{item.price}
              </span>


              {cart[item.id] ? (

                <div className="cart-counter">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>


                  <span>
                    {cart[item.id]}
                  </span>


                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              ) : (

                <button className="order-btn"
                  onClick={() =>
                    addToCart(item.id)
                  }
                >
                  Add to Cart
                </button>

              )}

            </div>

          </div>

        </div>

      ))}

    </section>
  );
}

export default Menu;