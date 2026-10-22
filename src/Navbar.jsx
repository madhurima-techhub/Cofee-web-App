import  MobileMenu from "./Mobilemenu.jsx"



function Navbar() {
  return (
    <header>
      <nav>
        {/* Logo + Company Name */}
        <div className="Brand">
          <span className="brand-logo">
            <img src="./cofee logo.png " />
          </span>
          <span className="company-name"> Brew & Bliss </span>
        </div>
          {/* nav links home  */}
          
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            {/* <li><a href="#testimonials">Testimonial</a></li> */}
            <li>
            <a href="#cart" className="cart-link">
            <img src="./shopping-cart.png" width="30px" height="30px" />
            </a>
            </li>

            <li><a href="#Log">Login</a></li>
            
            {/* <li>
            <a href="#contact">Contact</a>
            </li> */}
            
            {/* <li>
            <a href="#menu" className="menubar">
            <img src="./menu.png" width="30px" height="30px" />
            </a>
            </li> */}

             
           </ul>
           
          

      </nav>
    </header>
  );
}

export default Navbar;
