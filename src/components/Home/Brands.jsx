import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="ccontainer py-28">
      <div className="mx-auto max-w-[630px]" data-aos="flip-left">
        <h1 className="font-semibold text-[42px] text-center">Our Partners</h1>
        <p className="text-dark text-base text-center">
          Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum
          sat. Neceessitatibus sonet soluta, vim eu esse accusamus.
        </p>
      </div>
      <div className="text-gray-500 md:grid-cols-6 mt-20">
        <Marquee loop={0} speed={60} pauseOnHover>
          <img
            className="h-[85px] mr-28"
            src="https://i.ibb.co/VQ9FBJs/b5.png"
            alt="logo"
          />
          <img
            className="h-[85px] mr-28"
            src="https://i.ibb.co/2cq2S0L/b4.png"
            alt="logo"
          />
          <img
            className="h-[85px] mr-28"
            src="https://i.ibb.co/g9CfYnV/b3.png"
            alt="logo"
          />
          <img
            className="h-[85px] mr-28"
            src="https://i.ibb.co/84pVYqF/b1.png"
            alt="logo"
          />
          <img
            className="h-[85px] mr-28"
            src="https://i.ibb.co/dDGyjD1/b2.png"
            alt="logo"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
