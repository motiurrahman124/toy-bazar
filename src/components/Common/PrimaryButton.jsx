import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <div>
      <button className="py-[10px] px-6 bg-primary text-white rounded-full text-lg font-bold hover:bg-white hover:text-primary border-primary cursor-pointer">
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
