import React from "react";

const NavBar = ({ totalCartQuantity }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info h-15">
        <div className="container px-4 px-lg-5">
          <a
            className="navbar-brand text-white fw-bolder"
            href="#!"
            id="nav-title"
          >
            <img
              src="image/Store_Logo.png"
              alt="Logo"
              style={{ width: "150px" }}
            />
          </a>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse show"
            id="navbarSupportedContent"
          >
            <form className="d-flex ms-auto">
              <i className="fa-solid fa-cart-shopping text-white"></i>
              <span className="text-white">Cart</span>
              <span
                className="badge bg-danger text-white ms-1 rounded-pill"
                id="count"
              >
                {totalCartQuantity}
              </span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
