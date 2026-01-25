
import { Data } from "./Faar";

export const Skills = () => {
  return (
    <section className="w-full flex justify-center px-4 py-16 md:px-20">
      <div className="w-full  flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="px-5 py-1 text-sm font-medium rounded-xl bg-stone-300">
            Skills
          </span>
          <p className="text-lg font-light max-w-[576px]">
            The skills, tools and technologies I am really good at:
          </p>
        </div>


        <div
          className="
            grid
            grid-cols-3
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-8
            gap-x-16
            gap-y-12
          "
        >
          {Data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <p className="text-base font-light text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
