import { Data } from "./Faar";

export const Skills = () => {
  return (
    <div className="w-full h-[560px] flex items-center justify-center pt-24 pr-20 pb-24 pl-50 max-sm:w-[375px] max-sm:h-[916px] ">
      <div className="w-[1280px] h-[368px] flex items-center flex-col gap-12 pr-8 pl-8">
        <div className="w-[1216px] h-[72px] flex flex-col items-center gap-4">
          <div className="w-[1216px] h-[28px] flex items-center justify-center">
            <div className="w-[75px] h-[28px] mt-[10px] rounded-xl pt-1 pr-5 pb-1 pl-5 font-medium text-[14px] bg-stone-300">
              Skills
            </div>
          </div>
          <div className="w-[576px] h-[28px] font-thin text-[20px] flex items-center justify-center ">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="[1216px] h-[248px] grid grid-cols-8 gap-x-[106px] gap-y-15 max-sm:grid-cols-3 max-sm:w-[343px] ">
          {Data.map((item) => (
            <div className=" flex flex-col justify-center items-centergap-2">
              <img src={item.image} alt="" />
              <p className="font-light text-[18px] max-sm:mt-[20px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
