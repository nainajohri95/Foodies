import React from "react";
import Food1 from "../../assets/food6.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { BiChair } from "react-icons/bi";

const Banner = () => {
  return (
    <>
      <div className="min-h-[500px] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {/* image section */}
          <img
            src={Food1}
            alt=""
            className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
          />

          {/* Text-container section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold dark:text-white">
              Chowmein
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5 dark:text-white w-1/2 ">
              Order now for our delectable chicken chowmein, a savory stir-fry
              noodle dish that promises to satisfy your cravings with every
              bite.
            </p>
            <div className="flex gap-6 ">
              <button>
                <BiChair className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-400 dark:bg-red-400 hover:scale-105 duration-400" />
              </button>
              <button>
                <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-yellow-400 dark:bg-orange-400 hover:scale-105 duration-400" />
              </button>
              <button>
                <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-400 dark:bg-green-400 hover:scale-105 duration-400" />
              </button>
            </div>
            <button className="w-1/2 bg-gradient-to-r from-primary to-secondary text-white px-1 py-3 rounded-full hover:scale-105 duration-200">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
