import React from "react";
import Img2 from "../../assets/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Dum Briyani",
    description:
      "Indulge in our Dum Biryani, a fragrant and flavorful dish where long-grain basmati rice is slow-cooked with marinated chicken, aromatic spices, and herbs in a sealed pot. This traditional cooking method ensures that every bite is infused with rich flavors and a tantalizing aroma",
  },

  {
    id: 2,
    img: Img2,
    name: "Hyderabadi Biryani",
    description:
      "Experience the rich and aromatic Hyderabadi Biryani, a signature dish of perfectly spiced basmati rice layered with tender, marinated chicken and infused with saffron and traditional spices. This delectable delicacy offers an exquisite taste of Hyderabad's culinary heritage.",
  },

  {
    id: 3,
    img: Img2,
    name: "Special Briyani",
    description:
      "Our Special Biryani is a culinary masterpiece that combines tender marinated chicken. Each mouthful offers a burst of flavors and textures, making it a favorite among biryani enthusiasts. Experience the essence of tradition and taste in every delightful bite.",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-4xl font-bold  dark:text-white">
              Our Services
            </h1>
            <p className="text-xs text-black-400 dark:text-white">
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
                      <p className="text-black-500 text-sm line-clamp-8 duration-300">
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
