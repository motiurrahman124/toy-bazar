import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

const Service = () => {
  return (
    <div>
      <div className="py-20 ccontainer">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[5%] p-[2%] items-center">
          <div className="mt-10 rounded-2xl" data-aos="zoom-out-up">
            <div className="flex justify-center">
              <h1 className="font-semibold text-[42px] text-center">
                Service We Provide
              </h1>
            </div>

            <div className="flex mb-6">
              <div className=" pl-5 lg:pl-8">
                <p className="text-dark text-base">
                  Designed so product can relax & indulge in pet stylists, run
                  around our exercise yards, make new friends in doggy daycare,
                  or simply spend hours in our dog grooming salon.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="p-2 lg:pl-6">
                <div className=" text-gray-600">
                  <div className="text-[12px] mb-8 md:text-[14px] group">
                    <div className="flex flex-col md:flex-row items-center gap-x-4">
                      <div className="flex cursor-pointer justify-center items-center rounded-full bg-primary group-hover:bg-secondary p-5">
                        <img
                          src="https://i.ibb.co/ZTw5b02/613934-removebg-preview.png"
                          className="w-[42px]"
                          alt="logo"
                        />
                      </div>
                      <div className="md:text-start text-center">
                        <p
                          className="group-hover:text-secondary mt-2 text-dark text-lg font-semibold "
                          role="button"
                        >
                          Delivery
                        </p>
                        <p className="text-base">
                          Your product is in good hands with us! Let your
                          favorite get the best care in our center.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-[12px] mb-8 md:text-[14px] group">
                    <div className="flex flex-col md:flex-row items-center gap-x-4">
                      <div className="flex cursor-pointer justify-center items-center rounded-full bg-primary group-hover:bg-secondary p-5">
                        <img
                          src="https://i.ibb.co/ZTw5b02/613934-removebg-preview.png"
                          className="w-[42px]"
                          alt="logo"
                        />
                      </div>
                      <div className="md:text-start text-center">
                        <p
                          className="group-hover:text-secondary mt-2 text-dark text-lg font-semibold "
                          role="button"
                        >
                          Shopping
                        </p>
                        <p className="text-base">
                          Your product is in good hands with us! Let your
                          favorite get the best care in our center.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-[12px] mb-8 md:text-[14px] group">
                    <div className="flex flex-col md:flex-row items-center gap-x-4">
                      <div className="flex cursor-pointer justify-center items-center rounded-full bg-primary group-hover:bg-secondary p-5">
                        <img
                          src="https://i.ibb.co/ZTw5b02/613934-removebg-preview.png"
                          className="w-[42px]"
                          alt="logo"
                        />
                      </div>
                      <div className="md:text-start text-center">
                        <p
                          className="group-hover:text-secondary mt-2 text-dark text-lg font-semibold "
                          role="button"
                        >
                          Support
                        </p>
                        <p className="text-base">
                          Your product is in good hands with us! Let your
                          favorite get the best care in our center.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/nhdjz_CZCuWwrHQIGuvXMaCShLY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/12/14/920/n/24155406/a17c24360ba0fb81_netimgyEAGAA/i/Construction-Toys-Car-Carrier-Vehicle-Toy-Set-with-Play-Mat.jpg"
            alt="learning"
            className="w-full rounded-lg"
            data-aos="zoom-in-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
