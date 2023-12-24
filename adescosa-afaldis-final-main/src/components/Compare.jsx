import React from "react";

const Compare = () => {
  return (
    <div className="bg-[#ceeaf4]">
      <h1 className="text-3xl font-bold text-center text-gray-800 pt-14">
        Standards et Qualité
      </h1>
      <section
        className="bg-center flex  items-center justify-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/images/compare.png')`,
          height: "90vh",
        }}
      ></section>
    </div>
  );
};

export default Compare;
