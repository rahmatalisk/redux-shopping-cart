import React from "react";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";

const Navbar = ({setTab}) => {
  const state = useSelector((state) => state);
  let counted = 0;

  state.map((it) => {
    return (counted = counted + it.cartQuantity);
  });
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a href="#home" className="navHome" id="lws-home" onClick={()=>setTab(true)}>
            {" "}
            Home{" "}
          </a>
          <a href="#cart" className="navCart" id="lws-cart" onClick={()=>setTab(false)}>
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{counted}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
