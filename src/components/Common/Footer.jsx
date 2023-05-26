import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-dark py-10">
      <div className="ccontainer lg:px-0 px-4">
        <div className="flex md:flex-row flex-col justify-between gap-x-[42px] md:px-0 px-4">
          <div className="lg:w-4/12">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/gjPJG5f/images-removebg-preview.png"
                alt=""
                className="w-28 h-18"
              />
              <a className="text-2xl font-bold font-monoton">
                <span className="text-secondary">Toy</span>{" "}
                <span className="text-primary">Bazar</span>
              </a>
            </div>
            <p className="text-tSecondary">
              Elegant pink origami design threedimensional view and decoration
              co-exist.Great for adding a decorative touch toany room decor.
            </p>
            <div className="flex gap-x-8 text-2xl text-tSecondary">
              <BsFacebook className="hover:text-secondary cursor-pointer" />
              <BsTwitter className="hover:text-secondary cursor-pointer" />
              <BsInstagram className="hover:text-secondary cursor-pointer" />
              <BsWhatsapp className="hover:text-secondary cursor-pointer" />
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-8 text-primary">Quick Links</h3>
            <div className="text-tSecondary">
              <p className="hover:text-secondary cursor-pointer">Home</p>
              <p className="hover:text-secondary cursor-pointer">All Toys</p>
              <p className="hover:text-secondary cursor-pointer">Blogs</p>
              <p className="hover:text-secondary cursor-pointer">Shop</p>
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-8 text-primary">
              Polices & Support
            </h3>
            <div className="text-tSecondary">
              <p className="hover:text-secondary cursor-pointer">Contact</p>
              <p className="hover:text-secondary cursor-pointer">
                Terms & Condition
              </p>
              <p className="hover:text-secondary cursor-pointer">
                Privacy Policy
              </p>
              <p className="hover:text-secondary cursor-pointer">Shop</p>
            </div>
          </div>
          <div className="pr-4">
            <h3 className="text-lg font-bold mb-8 text-primary">Contacts</h3>
            <div className="text-tSecondary">
              <p>
                Head office:
                <br /> dhaka plaza 5th floor.
                <br /> home, #08 road #4{" "}
              </p>
              <p>+(88)019 470 977 34</p>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
        <hr className="mt-4 w-full" />
        <p className="text-center text-base text-white mt-8">
          All Right Reserved Toy Bazar © 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
