import React from "react";

import { DotLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      className="items-center justify-center w-screen h-screen bg-slate-700"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DotLoader
        cssOverride={{}}
        color="#13f54f"
        size={80}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
