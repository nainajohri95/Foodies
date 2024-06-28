import React from "react";
import Logo from "../../assets/food-logo.png";

const Navbar = () => {
  return (
    <>
      <div
        className="shadow-md bg-white
       dark:bg-gray-900
        dark:text-white duration-200"
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <a
                href="# "
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img src={Logo} alt="Logo" className="w-10" /> Foodies
              </a>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
