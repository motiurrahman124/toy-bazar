import React from "react";
import PrimaryButton from "../Common/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

const Hero = () => {
  return (
    <div className="bg-bgPrimary bg-opacity-50">
      <div className="ccontainer py-10 px-4 flex md:flex-row flex-col gap-x-20 h-[700px] items-center md:justify-between">
        <div className="md:w-1/2" data-aos="fade-up">
          <div className="md:max-w-[500px]">
            <h1 className="md:text-[60px] text-[42px] font-bold">
              Shop Best <span className="text-secondary">Car Toy</span> For Your
              Children
            </h1>
            <p className="text-gray-500 text-base mt-2 mb-8">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of
              Type.
            </p>
            <PrimaryButton text={"Shop Now"} />
          </div>
        </div>
        <div className="md:w-1/2 w-[250px]" data-aos="fade-left">
          <img
            src="https://i.ibb.co/6rsjT02/green-easter-car-with-eggs-copy-space-1-removebg.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
