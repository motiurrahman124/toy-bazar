import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const navigate = useNavigate();
  const [subCategory, setSubCategory] = useState();
  //   const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://toy-bazar-server-seven.vercel.app/subCategory/list")
      .then((res) => res.json())
      .then((data) => setSubCategory(data));
  }, []);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updateToy = {
      price,
      quantity,
      details,
    };

    fetch(`https://toy-bazar-server-seven.vercel.app/toy/${toy?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
          navigate("/my-toys");
        }
      });
  };

  return (
    <div className="ccontainer py-20 min-h-screen">
      <h1 className="text-center mb-10">Update This Toy</h1>
      <div className="max-w-[800px] mx-auto">
        <form onSubmit={handleUpdateToy}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10">
            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="border text-base px-5 py-3 w-full rounded-full"
                defaultValue={toy?.photo}
                readOnly
              />
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left"
                htmlFor="toy_name"
              >
                Toy Name
              </label>
              <input
                type="text"
                name="toy_name"
                className="border text-base px-5 py-3 w-full rounded-full"
                defaultValue={toy?.toy_name}
                readOnly
              />
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left"
                htmlFor="seller_name"
              >
                Seller Name
              </label>
              <input
                type="text"
                name="seller_name"
                className="border text-base px-5 py-3 w-full rounded-full"
                defaultValue={toy?.seller_name}
                readOnly
              />
            </div>

            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border text-base px-5 py-3 w-full rounded-full"
                defaultValue={toy?.email}
                readOnly
              />
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left"
                htmlFor="subCategory"
              >
                Sub-Category
              </label>
              <select
                name="subCategory"
                className="border text-base px-5 py-3 w-full rounded-full"
                placeholder="Select a sub-category"
                disabled
              >
                {subCategory?.map((s) => (
                  <option
                    className=""
                    key={s?._id}
                    value={s?.title}
                    selected={s?.title === toy?.subCategory}
                  >
                    {s?.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left"
                htmlFor="rating"
              >
                Rating
              </label>
              <select
                name="rating"
                className="border text-base px-5 py-3 w-full rounded-full"
                placeholder="Select a sub-category"
                disabled
              >
                <option value={toy?.rating}>{toy?.rating}</option>
              </select>
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                className="border text-base px-5 py-3 w-full rounded-full"
                defaultValue={toy?.price}
                required
              />
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="border text-base px-5 py-3 w-full rounded-full"
                defaultValue={toy?.quantity}
                required
              />
            </div>
          </div>
          <div className="space-y-4 mt-10">
            <label
              className="text-dark text-base  mb-2 text-left block"
              htmlFor="details"
            >
              Detail Description
            </label>
            <textarea
              name="details"
              id=""
              cols=""
              rows="4"
              className="border text-base px-5 py-3 w-full rounded-3xl"
              defaultValue={toy?.details}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="text-base cursor-pointer font-bold rounded-full hover:text-primary border-primary hover:bg-white bg-primary text-white px-10 py-[12px] mt-11 mb-[9px] w-full"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
