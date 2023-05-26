import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

import CategoryCard from "../Common/CategoryCard";
import { AuthContext } from "../provider/AuthProvider";

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [subCategory, setSubCategory] = useState();
  const [toys, setToys] = useState();
  const [cars, setCars] = useState();
  const [trucks, setTrucks] = useState();
  const [fireTrucks, setFireTrucks] = useState();

  useEffect(() => {
    fetch("https://toy-bazar-server-seven.vercel.app/subCategory/list")
      .then((res) => res.json())
      .then((data) => setSubCategory(data));
  }, []);

  useEffect(() => {
    fetch("https://toy-bazar-server-seven.vercel.app/all-toy/list")
      .then((res) => res.json())
      .then(
        (data) => setToys(data)
        // setFireTrucks(data?.filter((d) => d?.subCategory === "Mini Fire Truck"))
      );
  }, []);

  useEffect(() => {
    if (!!toys) {
      setFireTrucks(toys?.filter((d) => d?.subCategory === "Mini Fire Truck"));
      setCars(toys?.filter((d) => d?.subCategory === "Regular Car"));
      setTrucks(toys?.filter((d) => d?.subCategory === "Truck"));
    }
  }, [toys]);
  console.log(trucks);

  return (
    <div className="ccontainer pt-28">
      <div className="mx-auto max-w-[630px]" data-aos="flip-left">
        <h1 className="font-semibold text-[42px] text-center">
          Shop By Category
        </h1>
        <p className="text-dark text-base text-center">
          Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum
          sat. Neceessitatibus sonet soluta, vim eu esse accusamus.
        </p>
      </div>
      <div className="mt-10 md:px-0 pr-4" data-aos="flip-up">
        <Tabs className="text-secondary text-center text-lg">
          <TabList>
            {subCategory?.map((s) => (
              <Tab key={s?._id}>{s?.title}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="mt-20 flex md:flex-row flex-col justify-center gap-20 ">
              {cars?.slice(0, 3).map((car, index) => (
                <CategoryCard key={index} data={car} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-20 flex md:flex-row flex-col justify-center gap-20">
              {trucks?.slice(0, 3).map((truck, index) => (
                <CategoryCard key={index} data={truck} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-20 flex md:flex-row flex-col justify-center gap-20">
              {fireTrucks?.slice(0, 3).map((truck) => (
                <CategoryCard key={truck?._id} data={truck} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
