import React from "react";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Briyani",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab error qui? Illo, pariatur nisi itaque tenetur neque quidem sunt",
  },

  {
    id: 2,
    img: Img2,
    name: "Chicken Kari",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab error qui? Illo, pariatur nisi itaque tenetur neque quidem sunt",
  },

  {
    id: 3,
    img: Img3,
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
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p
              className="text-sm bg-clip-text 
            bg-gradient-to-r from-primary to-secondary"
            >
              Our Services
            </p>
            <h1 className="text-3xl font-3xl">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ab
              error qui? Illo, pariatur nisi itaque tenetur neque quidem sunt?
            </p>
          </div>
          {/* Header section */}
        </div>
      </div>
    </>
  );
};

export default Services;
