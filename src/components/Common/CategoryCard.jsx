import React, { useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PrimaryButton from "./PrimaryButton";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ data }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    if (!user) {
      toast.warn("You mus have login first to view details!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(`/toy/${id}`);
    }
    navigate(`/toy/${id}`);
  };
  return (
    <div>
      <div className="md:w-[300px] w-[250px]  bg-cPrimary px-10 py-5 rounded-lg relative mx-auto">
        <img src={data?.photo} className="w-1/2 h-[150px]" alt="" />
        <h3 className="text-primary text-xl">{data?.toy_name}</h3>
        <Rating
          style={{ maxWidth: 120, margin: "auto" }}
          value={data?.rating}
          readOnly
        />
        <h3 className="text-lg">${data?.price}</h3>
        <div className="absolute inset-x-0" onClick={()=>handleViewDetails(data?._id)}>
          <PrimaryButton text={"View Details"}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
