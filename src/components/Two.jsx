import React from "react";

export const Two = () => {
  return (
    <section className="w-full flex justify-center px-4 py-16 md:px-20">
      <div className="w-full  flex flex-col gap-12">
        <div className="flex justify-center">
          <span className="px-5 py-1 text-sm font-medium rounded-xl bg-stone-200">
            About me
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-[150px] items-center">
          <img
            src="Container.png"
            alt=""
            className="w-[900px]  h-auto"
          />
          <div className="w-full  flex flex-col gap-6">

            <h2 className="text-2xl md:text-2xl font-semibold">
              Curious about me? Here you have it:
            </h2>

            <div className="flex flex-col gap-6 text-base">
              <p>
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>

              <p>
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p>
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding.
              </p>
              <p className="font-medium">
                Finally, some quick bits about me.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2">
                  <span>• B.E. in Computer Engineering</span>
                  <span>• Full time freelancer</span>
                </div>
                <span>• Avid learner</span>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
