import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border-2 h-screen text-center p-[4px]">
        <img
          className="md:w-[800px] w-[250px] rounded-full"
          src="https://cdn.dribbble.com/users/745025/screenshots/6723888/gif_404.gif"
          alt=""
        />
        <Link to="/">
          <button className="md:px-7 px-5 md:py-3 py-3 bg-primary rounded-full font-extrabold text-white hover:text-primary hover:bg-white border-primary border mt-5 cursor-pointer text-base">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
