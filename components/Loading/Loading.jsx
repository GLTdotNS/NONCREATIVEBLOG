import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-slate-300 bg-opacity-90">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
