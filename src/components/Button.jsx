// import React from "react";

// export const Buttons = () => {
//   return (
//     <div className="w-[345px] h-[32px] flex flex-row gap-[6px] ">
//       <div className="w-[38px] h-[32px] rounded-md pt-1 pr-3 pb-1 pl-3 bg-[#3C82F6] flex items-center">
//         <button className="w-[14px] h-[15px] font-normal text-[12px] text-[#FFFFFF]">
//           All
//         </button>
//       </div>
//       <div className="w-[60px] h-[32px] rounded-md  pt-1 pr-3 pb-1 pl-3 bg-[#F3F4F6] flex items-center  ">
//         <button className="w-[36px] h-[15px] font-normal text-[12px] text-[#363636]">
//           Active
//         </button>
//       </div>
//       <div className="w-[87px] h-[32px] rounded-md  pt-1 pr-3 pb-1 pl-3 bg-[#F3F4F6] flex items-center">
//         <button className="w-[63px] h-[15px] font-normal text-[12px] text-[#363636]">
//           Completed
//         </button>
//       </div>
//     </div>
//   );
// };
export default function Button() {
  return (
    <div className="w-[345px] h-[32px] flex flex-row gap-[6px]">
      <div className="w-[38px] h-[32px] rounded-md pt-1 pr-3 pb-1 pl-3 bg-[#3C82F6] flex items-center">
        <button className="w-[14px] h-[15px] text-[12px] text-[#FFFFFF]">
          All
        </button>
      </div>

      <div className="w-[60px] h-[32px] rounded-md pt-1 pr-3 pb-1 pl-3 bg-[#F3F4F6] flex items-center">
        <button className="w-[36px] h-[15px] text-[12px] text-[#363636]">
          Active
        </button>
      </div>

      <div className="w-[87px] h-[32px] rounded-md pt-1 pr-3 pb-1 pl-3 bg-[#F3F4F6] flex items-center">
        <button className="w-[63px] h-[15px] text-[12px] text-[#363636]">
          Completed
        </button>
      </div>
    </div>
  );
}
