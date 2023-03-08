import React from "react";

const Helpful = ({ helpful, yes, no }) => {
  return (
    <div className="text-center mt-6">
      <p className="text-sm">{helpful}</p>
      <div className="flex space-x-[.13rem] justify-center mt-4">
        <button className="bg-white p-2">
          <p>{yes}</p>
        </button>
        <button className="bg-white p-2">
          <p>{no}</p>
        </button>
      </div>
    </div>
  );
};

export default Helpful;
