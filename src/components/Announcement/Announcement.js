import React from "react";

const Announcement = () => {
  const pages = ["About us", "Contact Us", "Terms of Use"];

  return (
    <ul className=" px-48 py-3 shadow-md hidden lg:flex">
      {pages.map((page) => {
        return <li className="mr-8"> {page} </li>;
      })}
    </ul>
  );
};

export default Announcement;
