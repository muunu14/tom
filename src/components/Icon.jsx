import React from "react";

export const Icon = () => {
  return (
    <div className="w-full h-[556px] flex flex-row gap-[80px] justify-center pt-[96px] pr-[80px] pb-[96px] pl-[80px] max-sm:h-[904px] max-sm:pt-16 max-sm:pr-4 max-sm:pb-16 max-sm:pl-4 max-sm:flex max-sm:flex-col-reverse">
      <div className="w-full h-[364px] flex flex-col gap-12 max-sm:h-[428px] max-sm:flex max-sm:mr-[90px] ">
        <div className="w-full h-[176px] flex flex-col gap-2  max-sm:h-[340px] max-sm:flex max-sm:flex-col max-sm:gap-2 ">
          <div className="w-full h-[72px] font-bold text-[60px] mb-[19px]   max-sm:h-[40px] max-sm:text-[36px] max-sm:font-bold ">
            Hi, I’m Tom 👋
          </div>
          <p className=" h-[96px] font-normal gap:10  text-[16px]  max-sm:h-[100px] max-sm:font-normal max-sm:text-[16px]">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className="w-[600px] h-[56px] flex flex-col gap-2 max-sm:w-full max-sm:h-[56px] ">
          <div className="w-[600px] h-[24px] flex flex-row gap-2">
            <img src="location.png" alt="" />
            <p className="w-[190px] h-[24px] font-normal text-[16px] ]">
              Ulaanbaatar, Mongolia
            </p>
          </div>
          <div className="w-[600px] h-[24px] flex flex-row gap-2">
            <img src="ivon2.png" alt="" />
            <p className="w-[600px] h-[24px] font-normal text-[16px] ">
              Available for new projects
            </p>
          </div>
        </div>
        <div className="w-[600px] h-[36px] flex flex-row gap-4 items-center">
          <img src="shuvuu.png" alt="" />
          <img className="w-[36px] h-[36px]" src="figma.png" alt="" />
          <img src="twit.png" alt="" />
        </div>
      </div>
      <div className="w-[600px] h-[365px] flex justify-end items-end max-sm:w-full max-sm:h-[300px] max-sm:flex max-sm:items-center max-sm:justify-center max-sm:mt-[64px]">
        <img src="zurag.png" alt="" />
      </div>
    </div>
  );
};
