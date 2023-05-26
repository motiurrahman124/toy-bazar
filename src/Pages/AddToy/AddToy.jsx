import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddToy = () => {
  const [subCategory, setSubCategory] = useState();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://toy-bazar-server-seven.vercel.app/subCategory/list")
      .then((res) => res.json())
      .then((data) => setSubCategory(data));
  }, []);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const seller_name = form.seller_name.value;
    const toy_name = form.toy_name.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const toy = {
      photo: photo,
      seller_name,
      toy_name,
      email,
      subCategory,
      price,
      rating,
      quantity,
      details,
    };

    fetch("https://toy-bazar-server-seven.vercel.app/add-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
          navigate("/my-toys");
        }
      });
  };

  return (
    <div className="ccontainer py-20 min-h-screen mx-auto">
      <h1 className="text-center mb-10">Add A Toy</h1>

      <div className="max-w-[800px] flex justify-center mx-auto">
        <form onSubmit={handleAddToy}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10">
            <div className="space-y-4">
              <label
                className="text-dark text-base  mb-2 text-left block"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="border text-base px-5 py-3 w-[280px] md:w-[350px] rounded-full"
                required
              />
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base block mb-2 text-left"
                htmlFor="toy_name"
              >
                Toy Name
              </label>
              <input
                type="text"
                name="toy_name"
                className="border text-base px-5 py-3 w-[280px] md:w-[350px] rounded-full"
                required
              />
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base block mb-2 text-left"
                htmlFor="seller_name"
              >
                Seller Name
              </label>
              <input
                type="text"
                name="seller_name"
                className="border text-base px-5 py-3 w-[280px] md:w-[350px] rounded-full"
                value={user?.displayName}
                readOnly
              />
            </div>

            <div className="space-y-4">
              <label
                className="text-dark text-base block mb-2 text-left"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border text-base px-5 py-3 w-[280px] md:w-[350px] rounded-full"
                value={user?.email}
                readOnly
              />
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base block mb-2 text-left"
                htmlFor="subCategory"
              >
                Sub-Category
              </label>
              <select
                name="subCategory"
                className="border text-base px-5 py-3 w-[280px] md:w-[350px] rounded-full"
                placeholder="Select a sub-category"
                required
              >
                {subCategory?.map((s) => (
                  <option className="" key={s?._id} value={s?.title}>
                    {s?.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base block mb-2 text-left"
                htmlFor="rating"
              >
                Rating
              </label>
              <select
                name="rating"
                className="border text-base px-5 py-3 w-[280px] md:w-[350px] rounded-full"
                placeholder="Select a sub-category"
                required
              >
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base block mb-2 text-left"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                className="border text-base px-5 py-3 w-[280px] md:w-[350px] rounded-full"
                required
              />
            </div>
            <div className="space-y-4">
              <label
                className="text-dark text-base block mb-2 text-left"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="border text-base px-5 py-3 w-[280px] md:w-[350px] rounded-full"
                required
              />
            </div>
          </div>
          <div className="space-y-4 mt-10">
            <label
              className="text-dark text-base block mb-2 text-left "
              htmlFor="details"
            >
              Detail Description
            </label>
            <textarea
              name="details"
              id=""
              cols=""
              rows="4"
              className="border text-base px-5 py-3 w-[250px] md:!w-full rounded-3xl"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="text-base cursor-pointer font-bold rounded-full hover:text-primary border-primary hover:bg-white bg-primary text-white !px-10 py-[12px] mt-11 mb-[9px] w-[250px] text-center"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
