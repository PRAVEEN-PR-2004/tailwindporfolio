import React from "react";

import { ClimbingBoxLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      className="items-center justify-center w-screen h-screen bg-slate-950"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClimbingBoxLoader color="#a8e5ab" size={25} />
    </div>
  );
};

export default Loader;
