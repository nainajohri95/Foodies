import React from "react";
import FooterLogo from "../../assets/food-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4 ">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-w-[50px]" />
                FOODIES
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                nulla ipsa voluptatum ad iure amet! Blanditiis unde earum fuga
                ipsa quaerat architecto eius nostrum. Doloremque veniam laborum
                quam libero aliquid?
              </p>
              <br />
              <div className="flex items-center gap-3 mt-6">
                <div>
                  <FaLocationArrow />
                </div>
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>+91 7457867725</p>
              </div>
            </div>
            {/* social handles */}
            <div>
              {" "}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedinIn className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
