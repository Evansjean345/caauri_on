import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onMenuChange }) {
  const [menu, setMenu] = useState(true);
  const changeMenu = () => {
    setMenu(!menu);
    onMenuChange(!menu);
  };
  //aniamtion de la Navbar
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolling(prevScrollPos < currentScrollPos); // Modifié ici
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarStyle = {
    transition: "top 0.3s",
    top: scrolling ? "-65px" : "0",
    backdropFilter: "blur(5px)",
    background: " rgba(255, 255, 255, 0.20)",
  };
  return (
    <div
      style={navbarStyle}
      className="fixed w-full  h-[65px] z-50 text-black "
    >
      <div className="w-full flex z-50 py-0 px-5  sm:px-20 justify-between">
        <div className="w-1/2 flex items-center  sm:mt-[3px]">
          {menu ? (
            <img src="/logo/logo_black_text.png" alt="" className="h-11" />
          ) : (
            ""
          )}
        </div>
        <div className="w-1/2 transition-all  relative  flex items-center  justify-end  gap-x-2">
          <div
            className={
              menu ? "mt-3 cursor-pointer  text-black font-medium" : "hidden"
            }
            onClick={changeMenu}
          >
            Menu
          </div>
          <div
            className={
              menu
                ? "rounded-full mt-4 mb-[3px] border cursor-pointer h-9 border-black"
                : "hidden"
            }
            onClick={changeMenu}
          >
            <img src="/images/menu.png" alt="" className="h-9" />
          </div>
        </div>
      </div>
      {/* Menu */}
      <div
        className={
          menu
            ? "hidden"
            : "absolute z-50 top-4  sm:right-[24px] right-2  sm:top-[24px] rounded-3xl shadow-2xl bg-white py-2 sm:py-0 w-[95%] h-[79vh] sm:w-[441px] sm:h-[558px]"
        }
      >
        <div className="w-full flex items-center mt-2 px-4 sm:px-6  justify-between">
          <div className="w-1/2 ">
            <span className="sm:block hidden text-[#888]">
              Pharmacie azur,Angré
            </span>
            <img
              src="/logo/logo_black_text.png"
              alt=""
              className="h-11 sm:hidden block"
            />
          </div>
          <div className="w-1/2 gap-x-2 sm:pr-0  flex justify-end">
            <div
              className="sm:mt-2 mt-4 font-semibold text-base cursor-pointer"
              onClick={changeMenu}
            >
              Retour
            </div>
            <img
              onClick={changeMenu}
              className="cursor-pointer w-8 h-10 hidden sm:block"
              src="/logo/back.svg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="60"
              viewBox="0 0 31 30"
              fill="none"
              className="sm:hidden block cursor-pointer"
              onClick={changeMenu}
            >
              <rect
                x="1"
                y="0.5"
                width="29"
                height="29"
                rx="14.5"
                stroke="black"
                stroke-opacity="0.8"
              />
              <path
                d="M9 9L21 21M9 21L21 9"
                stroke="black"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mt-8 px-4 sm:px-5 flex flex-col">
          <ul>
            <li className="sm:text-4xl text-3xl font-normal sm:font-normal sm:hover:translate-x-8  sm:hover:translate-y-[-10px] sm:hover:font-medium mt-6 sm:mt-2 sm:hover:text-4xl transition-all cursor-pointer">
              <Link to="/" onClick={changeMenu}>
                Accueil
              </Link>
            </li>
            <li className="sm:text-4xl text-3xl font-normal sm:font-normal sm:hover:translate-x-8  sm:hover:translate-y-[-10px] sm:hover:font-medium mt-3 sm:mt-2 sm:hover:text-4xl transition-all cursor-pointer">
              <Link to="/caaurimuniquez" onClick={changeMenu}>
                Caaurimuquez
              </Link>
            </li>
            <li className="sm:text-4xl text-3xl font-normal sm:font-normal sm:hover:translate-x-8  sm:hover:translate-y-[-10px] sm:hover:font-medium mt-3 sm:mt-2 sm:hover:text-4xl transition-all cursor-pointer">
              <Link to="/services" onClick={changeMenu}>
                Service
              </Link>
            </li>
            <li className="sm:text-4xl text-3xl font-normal sm:font-normal sm:hover:translate-x-8  sm:hover:translate-y-[-10px] sm:hover:font-medium mt-3 sm:mt-2 sm:hover:text-4xl transition-all cursor-pointer">
              <Link to="/portfolio" onClick={changeMenu}>
                Portfolio
              </Link>
            </li>
            <li className="sm:text-4xl text-3xl font-normal sm:font-normal sm:hover:translate-x-8  sm:hover:translate-y-[-10px] sm:hover:font-medium mt-3 sm:mt-2 sm:hover:text-4xl transition-all cursor-pointer">
              <Link to="/blog" onClick={changeMenu}>
                {" "}
                Blog
              </Link>
            </li>
            <li className="sm:text-4xl text-3xl font-normal sm:font-normal sm:hover:translate-x-8  sm:hover:translate-y-[-10px] sm:hover:font-medium mt-3 sm:mt-2 sm:hover:text-4xl transition-all cursor-pointer">
              <Link to="/carriere" onClick={changeMenu}>
                Carriere
              </Link>
            </li>
            <li className="sm:text-4xl text-3xl font-normal sm:font-normal sm:hover:translate-x-8 sm:hover:translate-y-[-10px] sm:hover:font-medium mt-3 sm:mt-2 sm:hover:text-4xl transition-all cursor-pointer">
              <Link to="/contact" onClick={changeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className=" justif-between px-2 sm:px-2 flex w-full">
          <div className="w-1/2 flex sm:justify-end flex-col justify-start   sm:items-center">
            <span>
              <div className="sm:mt-8 mt-20 cursor-pointer flex w-[200px] gap-1 py-0  transition-all px-2">
                <div>contact@caauri.com</div>
                <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                  <img src="/logo/frame.svg" alt="" />
                </div>
              </div>
            </span>
            <span className="block sm:hidden ml-2 text-[#888]">
              Pharmacie azur,Angré
            </span>
          </div>
          <div className="w-1/2 flex justify-end pr-4 sm:pr-8">
            <ul>
              <li>
                <img
                  src="/icon/faceboock.svg"
                  alt=""
                  className="border border-[#272727B2] rounded-full flex items-center justify-center w-[24px] h-[24px]"
                />
              </li>
              <li>
                <img
                  src="/icon/twitter.svg"
                  alt=""
                  className="border border-[#272727B2] rounded-full flex items-center justify-center w-[24px] h-[24px] mt-2"
                />
              </li>
              <li>
                <img
                  src="/icon/instagram.svg"
                  alt=""
                  className="border border-[#272727B2] rounded-full flex items-center justify-center w-[24px] h-[24px] mt-2"
                />
              </li>
              <li>
                <img
                  src="/icon/in.svg"
                  alt=""
                  className="border border-[#272727B2] rounded-full flex items-center justify-center w-[24px] h-[24px] mt-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
