import React, { useEffect, useState } from "react";
import Darkpng from "../../assets/dark-mode-button.png";
import Lightpng from "../../assets/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="relative">
        {theme === "dark" ? (
          <img
            src={Darkpng}
            alt="Dark mode button"
            onClick={changeTheme}
            className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
              theme !== "dark" ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : (
          <img
            src={Lightpng}
            alt="Light mode button"
            onClick={changeTheme}
            className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
          />
        )}
      </div>
    </>
  );
};

export default DarkMode;
