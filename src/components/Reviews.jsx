"use client";

import Image from "next/image";
import Heading from "./sub/Heading";

export default function Reviews() {
  return (
    <div className="my-20 px-96 ">
      <Heading text="Reviews" />
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl">
            <Image
              src="/reviews/client-1.png"
              alt="Reviews Image"
              width={130}
              height={130}
              className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
            />
            <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
              Bob W., Lifestyle Blogger
            </h1>
            <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              perferendis nam beatae fugiat quae adipisci suscipit, accusantium
              maxime minima iure eligendi in unde sequi itaque reiciendis,
              alias, ducimus possimus ut.
            </p>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <span className="text-lg font-light text-yellow-600 mr-3">
                4.5
              </span>
              <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                <span>Stars</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button>Left</button>
          <button>Right</button>
        </div>
      </div>
    </div>
  );
}

function Review() {
  return <div>Review</div>;
}
