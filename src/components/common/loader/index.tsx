import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="w-[60px] h-[60px] bg-white rounded-full relative animate-spin
        overflow-hidden border-[2px] border-solid border-black
        after:absolute after:w-[60px] after:h-[30px] after:bg-red-600 after:border
        after:border-solid after:border-black after:-top-1 af
        before:absolute before:bg-white 
        before:w-[14px] before:h-[14px] before:border-[3px]
        before:border-solid before:border-black before:rounded-full 
        before:bottom-[22px] before:right-[22px] before:z-10"
      />
    </div>
  );
};

export default Loader;
