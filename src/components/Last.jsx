import React from "react";

export const Last = () => {
  return (
    <div className="w-full py-20 px-6 flex flex-col items-center  max-sm:h-[516px]">
      <div className="mb-4">
        <div className="rounded-xl px-4 py-2 bg-gray-200 text-sm font-medium">
          Get in touch
        </div>
      </div>

      <p className="w-full text-center text-gray-600 font-light text-lg mb-10">
        What's next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>

      <div className="flex items-center gap-3 mb-4">
        <img src="zhia.png" className="w-6" />
        <h1 className="text-3xl font-bold">tom@pinecone.mn</h1>
        <img src="/icono.png" className="w-6 cursor-pointer" />
      </div>

      <div className="flex items-center gap-3 mb-10">
        <img src="zhia.png" className="w-6" />
        <h1 className="text-3xl font-bold">+97688112233</h1>
        <img src="/icono.png" className="w-6 cursor-pointer" />
      </div>
      <p className="text-gray-600 text-sm mb-3">
        You may also find me on these platforms!
      </p>
      <div className="flex gap-4 mb-12">
        <img src="shuvuu.png" className="w-8 " />
        <img src="twit.png" className="w-8 " />
        <img src="figma.png" className="w-8 " />
      </div>

      <p className="text-gray-500 text-sm">
        2024 | Greetings with ♥ from Ulaanbaatar
      </p>
    </div>
  );
};
