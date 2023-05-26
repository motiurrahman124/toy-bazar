import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const AllToys = () => {
  const [toys, setToys] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://toy-bazar-server-seven.vercel.app/all-toy/list")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="ccontainer py-20 min-h-screen">
      <h1 className="text-center mb-10">All Toys</h1>
      <div className="relative mr-2 flex justify-end mb-10">
        <input
          className="py-3 rounded-lg px-4 text-base"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <FiSearch
          className="absolute top-3.5 right-2.5 text-gray-500"
          size={24}
        />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full text-base">
            {/* head */}
            <thead className="bg-bgPrimary">
              <tr className="!text-base">
                <th>SL</th>
                <th>Photo</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {toys
                ?.filter((toy) => {
                  return search.toLowerCase() === ""
                    ? toy
                    : toy.toy_name.toLowerCase().includes(search);
                })
                .map((toy, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-[60px] h-[60px]"
                        src={toy?.photo}
                        alt=""
                      />
                    </td>
                    <td>{toy?.toy_name}</td>
                    <td>{toy?.seller_name}</td>
                    <td>{toy?.subCategory}</td>
                    <td>{toy?.price}</td>
                    <td>{toy?.quantity}</td>
                    <td className="flex gap-x-4">
                      <Link to={`/toy/${toy?._id}`}>
                        <button
                          type=""
                          className="px-3 py-2 bg-green-600 text-white border-green-600 hover:bg-white hover:text-green-600 cursor-pointer rounded-full"
                        >
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
