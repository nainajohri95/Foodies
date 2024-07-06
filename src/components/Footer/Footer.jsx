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
      <div className="dark:bg-gray-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4 ">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left  dark:text-white">
                <img src={FooterLogo} alt="" className="max-w-[50px]" />
                FOODIES
              </h1>
              <p className="dark:text-white">
                Discover flavors that tell a story.
              </p>
              <br />
              <div className="flex items-center gap-3  dark:text-white ">
                <div>
                  <FaLocationArrow />
                </div>
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-6 dark:text-white">
                <FaMobileAlt />
                <p>+91 1234567890</p>
              </div>
            </div>
            {/* social handles */}
            <div className=" dark:text-white mt-4">
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
