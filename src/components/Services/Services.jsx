import React from "react";
import Img2 from "../../assets/food5.png";
import Img3 from "../../assets/icecream.png";
import Img4 from "../../assets/pizza.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Main Course",
    description:
      "We pride ourselves on offering delicious main course selection that caters to all tastes.Including our famous biryanis, expertly marinated meats, all crafted with the freshest ingredients and aromatic spices.",
  },

  {
    id: 2,
    img: Img3,
    name: "Ice-Cream",
    description:
      " we also offer a range of creamy, handcrafted ice creams, available in a variety of classic and unique flavors. Come and savor the flavors that make our restaurant a favorite among food lovers.",
  },

  {
    id: 3,
    img: Img4,
    name: "Pizza",
    description:
      "Apart from all this we also provide a variety of delicious pizzas, freshly baked to perfection. Enjoy our mouth-watering toppings and crispy crusts that are sure to delight your taste buds.",
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
            <p className="text-s text-black-400 dark:text-white mt-4">
              Explore our diverse menu featuring an array of culinary delights.
              From hearty main courses crafted with the finest ingredients to
              indulgent ice creams that offer a cool, creamy escape, and
              flavorful pizzas that promise to tantalize your taste
              buds—discover a world of deliciousness with our varied offerings.
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
                      <h1 className="text-xl font-bold mt-6">{name}</h1>
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
