import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-row w-full h-[68px]pt-4 pr-20 pb-4 pl-20 items-center justify-between :">
      <div className="w-19 h-9 font-black text-[30px]  text-[#000000]">Tom</div>
      <div className="w-[554px] h-9 gap-9 font-normal flex flex:row items-center text-[16px] mt-[40px] max-sm:hidden">
        <div>About </div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
        <img className="w-9 h-9" src="nar.png" alt="" />
        <div className="w-[136] h-9 rounded-xl flex justify-center items-center gap-2  bg-[#111827] text-[#F9FAFB] ">
          Download CV
        </div>
      </div>
      <div className="hidden max-sm:flex">
        <img src="/icon Button.png" alt="" />
      </div>
    </div>
  );
};
