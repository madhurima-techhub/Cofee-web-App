// function Addtocart() {
//   return (
//     <section className="cart" id="cart">

//       <h2 className="cart-title">Your Cart</h2>

//       <div className="empty-cart">

//         <div className="cart-icon">
//           🛒
//         </div>

//         <h3>Your Cart is Empty</h3>

//         <p>
//           Looks like you haven't added anything
//           to your cart yet.
//         </p>

//         <a href="#Menu" className="menu-btn">
//           Go to Menu
//         </a>

//       </div>

//     </section>
//   );
// }

// export default Addtocart;

function Addtocart({ cart, setCart }) {

const menuItems = [
    {
      id: 1,
      name: "Cold Coffee",
      image: "/cold cofee.png",
      price: 130,
    },

    {
      id: 2,
      name: "Cappuccino",
      image: "/cappuccino.png",
      price: 140,
    },

    {
      id: 3,
      name: "Espresso",
      image: "/espresso.png",
      price: 100,
    },

    {
      id: 4,
      name: "Grilled Sandwich",
      image: "/grilled sandwich.png",
      price: 120,
    },

    {
      id: 5,
      name: "Blueberry Muffin",
      image: "/Blueberry Muffin.png",
      price: 90,
    },

    {
      id: 6,
      name: "Chocolate Cake",
      image: "/chocolate cake.png",
      price: 110,
    },
  ];


  /* Items which are actually in cart */

  
  
  const cartItems = menuItems.filter((item) => cart[item.id]);


  /* Increase */

  const increaseQuantity = (id) => {setCart({...cart,[id]: cart[id] + 1,})};


  /* Decrease */

  const decreaseQuantity = (id) => {

    if (cart[id] === 1) {

      const newCart = { ...cart }; 
      delete newCart[id];
      setCart(newCart);

    } else {

      setCart({...cart,[id]: cart[id] - 1});

    }

  };


  /* Subtotal */

  const subtotal = cartItems.reduce(
    (total, item) => {

      return total + item.price * cart[item.id];

    },
    0
  );


  /* Delivery charges */

  const delivery = cartItems.length > 0 ? 40 : 0;


  /* Final total */

  const total = subtotal + delivery;


  return (
    <section className="cart" id="cart">

      <h2 className="cart-title">
        Your Cart
      </h2>


      {cartItems.length === 0 ? (

        /* EMPTY CART */

        <div className="empty-cart">

          <div className="cart-icon">
            🛒
          </div>


          <h3>
            Your Cart is Empty
          </h3>


          <p>
            Looks like you haven't added anything
            to your cart yet.
          </p>


          <a
            href="#Menu"
            className="menu-btn"
          >
            Go to Menu
          </a>

        </div>

      ) :(

        /* CART WITH ITEMS */

        <div className="cart-container">


          {/* LEFT SIDE */}

          <div className="cart-items">

            {cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >


                {/* IMAGE */}

                <div className="cart-item-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


{/* DETAILS */}

                
    <div className="cart-item-details">

       <h3>
         {item.name}
        </h3>


                  <p>
                    ₹{item.price}
                  </p>


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

                </div>


                {/* ITEM TOTAL */}

                <strong className="item-total">

                  ₹{item.price * cart[item.id]}

                </strong>

              </div>

            ))}

          </div>


          {/* RIGHT SIDE */}

          <div className="cart-summary">

            <h3>
              Order Summary
            </h3>


            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <span>
                ₹{subtotal}
              </span>

            </div>


            <div className="summary-row">

              <span>
                Delivery
              </span>

              <span>
                ₹{delivery}
              </span>

            </div>


            <hr />


            <div className="summary-total">

              <span>
                Total
              </span>

              <span>
                ₹{total}
              </span>

            </div>


            <button className="checkout-btn">
              Checkout
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Addtocart;