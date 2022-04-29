import React from "react";
import RecentPost from "./RecentPost";

const Sidebar = () => {
  return (
    <div className=" max-w-max lg:max-w-[35%] md:mx-28 lg:mx-0 px-12 xs:px-28 lg:px-0">
      <RecentPost />
    </div>
  );
};

export default Sidebar;
