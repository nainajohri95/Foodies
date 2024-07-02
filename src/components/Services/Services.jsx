import React from "react";
import Img2 from "../../assets/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Dum Briyani",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab error qui? Illo, pariatur nisi itaque tenetur neque quidem sunt",
  },

  {
    id: 2,
    img: Img2,
    name: "Hyderabadi Biryani",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab error qui? Illo, pariatur nisi itaque tenetur neque quidem sunt",
  },

  {
    id: 3,
    img: Img2,
    name: "Cold Cofee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab error qui? Illo, pariatur nisi itaque tenetur neque quidem sunt?",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p
              className="text-sm bg-clip-text
            text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, beatae esse? Veritatis qui ipsum aut iure. Distinctio
              odio eos unde!
            </p>
          </div>
          {/* Card section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 md:grid-cols-3 md:gap-5 place-items-center ">
              {ServicesData.map(({ id, img, name, description }) => {
                return (
                  <div
                    key={id}
                    className="max-w-[300px] group rouned-2xl bg-white  hover:bg-primary hover:text-white duration-300 p-4 shadow-xl rounded-lg "
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt=""
                        className="max-w-[200px] mx-auto block
                      transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm line-clamp-2 duration-300">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
