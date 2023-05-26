import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/provider/AuthProvider";
import PrimaryButton from "../../components/Common/PrimaryButton";

const MyToys = () => {
  const [toys, setToys] = useState();
  const { user } = useContext(AuthContext);
  const [lowSort, setLowSort] =useState()
  const [highSort, setHighSort] =useState()

  useEffect(() => {
    fetch("https://toy-bazar-server-seven.vercel.app/my-toy/list")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    fetch("https://toy-bazar-server-seven.vercel.app/my-toy/list/asc")
      .then((res) => res.json())
      .then((data) => setLowSort(data));
  }, []);

  useEffect(() => {
    fetch("https://toy-bazar-server-seven.vercel.app/my-toy/list/desc")
      .then((res) => res.json())
      .then((data) => setHighSort(data));
  }, []);

  const myToys = toys?.filter((toy) => toy?.email === user?.email);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-bazar-server-seven.vercel.app/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="ccontainer py-20 min-h-screen">
      <h1 className="text-center mb-10">My Toys</h1>
      <div className="flex gap-x-4 items-center justify-end mb-5">
        <p>Sort By Price in: </p>
        <button
          onClick={() => setToys(lowSort)}
          className="bg-primary text-white border-none rounded-lg p-2 h-fit cursor-pointer"
        >
          Lower To Higher
        </button>
        <button
          onClick={() => setToys(highSort)}
          className="bg-primary text-white border-none rounded-lg p-2 h-fit cursor-pointer"
        >
          Higher To Lower
        </button>
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
                <th>Price</th>
                <th>Quantity</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myToys?.map((toy, index) => (
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
                  <td>{toy?.price}</td>
                  <td>{toy?.quantity}</td>
                  <td>{toy?.rating}</td>
                  <td className="flex gap-x-4">
                    <Link to={`/toy/${toy?._id}`}>
                      <button
                        type=""
                        className="px-3 py-2 bg-blue-600 text-white border-blue-600 hover:bg-white hover:text-blue-600 cursor-pointer rounded-full"
                      >
                        <FaEye className="text-base" />
                      </button>
                    </Link>
                    <Link to={`/update-toy/${toy?._id}`}>
                      <button
                        type=""
                        className="px-3 py-2 bg-green-600 text-white border-green-600 hover:bg-white hover:text-green-600 cursor-pointer rounded-full"
                      >
                        <FaEdit className="text-base" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(toy?._id)}
                      className="px-3 py-2 bg-red-600 text-white border-red-600 hover:bg-white hover:text-red-600 cursor-pointer rounded-full"
                    >
                      <FaTrashAlt className="text-base" />
                    </button>
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

export default MyToys;
