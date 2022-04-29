import React from "react";
import { GrView } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
// import { MdCategory } from "react-icons/md";

const RecentPost = () => {
  const recentPost = [
    "Franck Ribery's brother Steeven Ribery scores an absolute stunner for Bayern Munich",
    "Franck Ribery's brother Steeven Ribery scores an absolute stunner for Bayern Munich",
    "Franck Ribery's brother Steeven Ribery scores an absolute stunner for Bayern Munich",
    "Franck Ribery's brother Steeven Ribery scores an absolute stunner for Bayern Munich",
  ];
  return (
    <div className="  mt-2 py-5">
      {recentPost.map((post) => {
        return (
          <div className="mb-8">
            <div className=" flex items-center justify-between mt-8">
              <p className=" flex items-center">
                <BsFillPersonFill />
                <span className=" ml-4 text-sm font-semibold">
                  Ruhul Sinbad
                </span>
              </p>
              <div className=" bg-slate-900 rounded-full px-4 py-1 text-white text-xs">
                finance
              </div>
            </div>

            <div className=" pb-5 border-b-[2px] border-dotted">
              &gt;&nbsp;&nbsp; {post}
              <div className=" flex justify-between items-center mx-6">
                <div className=" flex justify-center items-center ">
                  <FiClock /> <span className=" ml-4 text-sm"> 1 hour ago</span>
                </div>
                <div className=" flex justify-center items-center">
                  <GrView /> <span className=" ml-4 text-sm"> 365 views</span>
                </div>
              </div>
            </div>

            {/* <hr className="mt-5" /> */}
          </div>
        );
      })}
    </div>
  );
};

export default RecentPost;
