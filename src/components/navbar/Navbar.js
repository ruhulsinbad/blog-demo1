import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [icon, setIcon] = useState(true);

  function showMobile() {
    setIcon(!icon);
    document.getElementById("mobile").style.display = "inherit";
  }

  function hideMobile() {
    setIcon(!icon);
    document.getElementById("mobile").style.display = "none";
  }

  const menuItems = ["Home", "About", "Contact"];
  return (
    <nav className="mt-16">
      <div className=" flex  justify-between bg-slate-900 py-5 px-5 lg:px-48">
        <h1 className=" text-white font-bold text-3xl"> REACT </h1>

        <div className=" self-center text-white md:hidden">
          {icon ? (
            <GiHamburgerMenu onClick={showMobile} />
          ) : (
            <ImCross onClick={hideMobile} />
          )}
        </div>

        <div id="desktop" className=" text-white hidden md:flex">
          {menuItems.map((item) => {
            return <div className=" ml-12 text-xl"> {item} </div>;
          })}
        </div>
      </div>

      <ul id="mobile" className=" hidden ">
        {menuItems.map((item) => {
          return (
            <li className="px-5 py-2 bg-gray-900 border-b-2 text-white duration-300 hover:bg-white hover:text-gray-900">
              {" "}
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
