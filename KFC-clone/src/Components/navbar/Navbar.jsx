import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { price } = useSelector((store) => store.cart);
  // console.log(price);

  return (
    <>
      <div className="nav_main">
        <div className="left_side">
          <Link to="/">
            {" "}
            <img
              className="logo_img"
              src="/logoeatmore1.png"
              alt=""
            />
          </Link>

          <b>
            <Link className="link" to="/menu">
              Menu
            </Link>{" "}
          </b>
          <b>
            <Link className="link" to="/menu">
              Deals
            </Link>{" "}
          </b>
        </div>
        <div className="right_side">
          <span>
            <img src="/login2.png" alt="" />
          </span>
          <b>
            <Link className="link" to="/signup">
              Signup
            </Link>{" "}
          </b>

          <h6 className="cartCountItems">₹ {price}</h6>

          <Link to="/cart">
            <img
              className="cart_img"
              src="/cart.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
