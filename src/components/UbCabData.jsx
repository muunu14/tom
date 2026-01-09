import React from "react";

export const UbCabData = () => {
  return (
    <section className="w-full  py-10 ">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col gap-16 ">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="px-5 py-1 rounded-xl bg-stone-300 text-sm font-medium">
              Work
            </span>
            <p className="text-lg sm:text-xl">
              Some of the noteworthy projects I have built:
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-sm:w-[443px] max-sm:h-[700px] max-sm:ml-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <img src="oc.png" alt="UBCab" className="w-full rounded-lg" />
              <div className="flex flex-col gap-5 w-[400px] mb-[100px]">
                <h3 className="text-xl font-semibold ">UBCab</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>

                <div className="flex flex-wrap gap-2 w-[300px]">
                  {[
                    "React",
                    "Next.js",
                    "Typescript",
                    "Nest.js",
                    "PostgreSQL",
                    "Tailwindcss",
                    "Figma",
                    "Cypress",
                    "Storybook",
                    "Git",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-200 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <img className="w-[24px] h-[24px]" src="icon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-sm:w-[443px] max-sm:ml-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-4 order-2 lg:order-1 h-[300px] w-[390px] ">
                <h3 className="text-xl font-semibold">Mentorhub</h3>
                <p className="text-gray-600 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div className="flex flex-wrap gap-3 w-[400px]">
                  {[
                    "React",
                    "Next.js",
                    "Typescript",
                    "Nest.js",
                    "PostgreSQL",
                    "Tailwindcss",
                    "Figma",
                    "Cypress",
                    "Storybook",
                    "Git",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-200 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <img className="w-[24px] h-[24px]" src="icon.png" alt="" />
              </div>
              <img
                src="122.png"
                alt="Mentorhub"
                className="w-full rounded-lg order-1 lg:order-2"
              />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-sm:w-[443px] max-sm:ml-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <img src="2222.png" alt="iToim" className="w-full rounded-lg" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">iToim</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div className="flex flex-wrap gap-2 w-[300px]">
                  {[
                    "React",
                    "Next.js",
                    "Typescript",
                    "Nest.js",
                    "PostgreSQL",
                    "Tailwindcss",
                    "Figma",
                    "Cypress",
                    "Storybook",
                    "Git",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-200 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <img className="w-[24px] h-[24px]" src="icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
