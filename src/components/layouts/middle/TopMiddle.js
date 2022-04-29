import React from "react";

const TopMiddle = () => {
  const bigPost = [
    {
      name: "Maliha",
      des: ` Franck Ribery's brother Steeven Ribery scores an 
        absolute stunner for Bayern Munich .  Franck Ribery's 
        brother Steeven Ribery scores an absolute stunner for Bayern Munich`,
      photo:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      name: "Priya",
      des: ` Franck Ribery's brother Steeven Ribery scores an 
        absolute stunner for Bayern Munich .  Franck Ribery's 
        brother Steeven Ribery scores an absolute stunner for Bayern Munich`,
      photo:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      name: "Tinni",
      des: ` Franck Ribery's brother Steeven Ribery scores an 
        absolute  stunner for Bayern Munich .  Franck Ribery's 
        brother Steeven  Ribery scores an absolute stunner for Bayern Munich`,
      photo:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
  ];

  return (
    <div className=" max-w-max lg:max-w-[65%] lg:mr-6 xl:mr-8 md:mx-24 lg:mx-0">
      {bigPost.map((post) => {
        return (
          <div className="flex my-2 h-32 sm:h-36 md:h-52 border-y-2 border-r-2">
            <img
              className=" w-32 h-32 sm:w-36 sm:h-36  md:w-52 md:h-52"
              src={post.photo}
              alt="Hello"
            />
            <div className=" ml-6 flex flex-col justify-center">
              <div className=" text-sm sm:text-md md:text-lg font-semibold ">
                {post.name}
              </div>
              <div className="text-xs sm:text-sm md:text-base">{post.des}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopMiddle;
