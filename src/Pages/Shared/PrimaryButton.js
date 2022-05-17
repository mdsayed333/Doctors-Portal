import React from "react";

const PrimaryButton = ({children}) => {
  return (
    <div>
      <button className="btn bg-gradient-to-r from-secondary to-primary border-none text-white uppercase">
       {children}
      </button>
    </div>
  );
};

export default PrimaryButton;


