import React from "react";

const Gallery = () => {
  return (
    <div className="ccontainer py-28">
      <div className="mx-auto max-w-[630px]" data-aos="flip-left">
        <h1 className="font-semibold text-[42px] text-center">Gallery</h1>
        <p className="text-dark text-base text-center">
          Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum
          sat. Neceessitatibus sonet soluta, vim eu esse accusamus.
        </p>
      </div>
      <div className=" grid md:grid-cols-3 grid-cols-2">
        <img
          src="https://i.ibb.co/8bLCzpK/globular-metal-die-cast-car-toy-1-32-bugatti-chiron-diecast-metal-pullback-toy-car-with-openable-doo.jpg"
          alt=""
          className="w-full h-full object-cover"
          data-aos="zoom-in"
        />
        <img
          src="https://i.ibb.co/4ZsSnV3/1125723988-g-520-w-st-g.jpg"
          alt=""
          className="w-full h-full object-cover"
          data-aos="zoom-in"
        />
        <img
          src="https://i.ibb.co/QjGVHN0/91s-M4-Ly-MH6-S-AC-SL1500.jpg"
          alt=""
          className="w-full h-full object-cover"
          data-aos="zoom-in"
        />
        <img
          src="https://i.ibb.co/j8Yz50C/71a-TQVKMWL.jpg"
          alt=""
          className="w-full h-full object-cover"
          data-aos="zoom-in"
        />
        <img
          src="https://i.ibb.co/T89hyPY/61-SZhf-AQ0a-L-SL1500.jpg"
          alt=""
          className="w-full h-full object-cover"
          data-aos="zoom-in"
        />
        <img
          src="https://i.ibb.co/h8Wdt3k/maxresdefault.jpg"
          alt=""
          className="w-full h-full object-cover"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default Gallery;
