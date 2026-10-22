
function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Dark background */}
      {isOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Left side slider */}
      <div className={`mobile-slider ${isOpen ? "open" : ""}`}>

        {/* Close button */}
        <button
          className="close-btn"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        {/* Menu links */}
        <ul>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#Menu" onClick={() => setIsOpen(false)}>
              Menu
            </a>
          </li>

          <li>
            <a href="#cart" onClick={() => setIsOpen(false)}>
              Cart
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

      </div>
    </>
  );
}

export default MobileMenu;