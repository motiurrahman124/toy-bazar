import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ViewToy = () => {
  const toy = useLoaderData();
  console.log("🚀 ~ file: ViewToy.jsx:6 ~ ViewToy ~ toy:", toy);

  return (
    <div className="ccontainer py-28">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="">
          <img className="w-full" src={toy?.photo} alt="" />
        </div>
        <div>
          <h1 className="text-[42px]">{toy?.toy_name}</h1>
          <p className="text-base text-dark">{toy?.details}</p>
          <p className="text-base text-dark">
            <span className="font-semibold">Seller Name: </span>{" "}
            {toy?.seller_name}
          </p>
          <p className="text-base text-dark">
            <span className="font-semibold">Seller Email: </span> {toy?.email}
          </p>
          <div className="flex gap-x-2 items-center">
            <Rating style={{ maxWidth: 130 }} value={toy?.rating} readOnly />
            <p className="text-lg text-dark">({toy?.rating})</p>
          </div>
          <p className="text-lg text-dark">
            <span className="font-semibold">Price: </span> ${toy?.price}
          </p>
          <p className="text-base text-dark">
            <span className="font-semibold">In Stock: </span> {toy?.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewToy;
