import React, { useRef, useEffect, useState } from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Three() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://caauri-api.cyclic.cloud/portfolio")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Heading */}
      <div className="flex justify-center font-semibold text-center text-5xl w-full px-6 sm:px-0 lg:text-8xl py-32 flex-col items-center">
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="sm:mt-20"
        >
          <span>Les</span>&nbsp;<span>travaux</span>
          &nbsp;
          <span>que nous avons</span>
        </p>
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <span>réalisés</span>&nbsp;
          <span>jusqu'à présent</span>
        </p>
      </div>
      {/* button section computer version */}
      <div className="lg:pl-24 lg:mt-14 sm:px-12 px-6">
        <span className="text-3xl text-black font-thin sm:font-normal sm:pl-2">
          Catégories
        </span>
        <ul className="lg:flex space-x-6 mt-3 list-outside hidden">
          <li>
            <div className="bg-black hover:border hover:border-black hover:bg-white hover:text-black transition-all cursor-pointer font-medium text-white w-[170px] flex items-center justify-center h-[60px] rounded-full text-xl">
              Tous les projets
            </div>
          </li>
          <li>
            <div className="border-black hover:text-white hover:bg-black hover:border-white cursor-pointer transition-all font-medium text-black border w-[170px] flex items-center justify-center h-[60px] rounded-full text-xl">
              Stratégie
            </div>
          </li>
          <li>
            <div className="border-black font-medium  hover:text-white hover:bg-black hover:border-white cursor-pointer transition-all  text-black border w-[170px] flex items-center justify-center h-[60px] rounded-full text-xl">
              Branding
            </div>
          </li>
          <li>
            <div className="border-black  hover:text-white hover:bg-black hover:border-white cursor-pointer transition-all  font-medium text-black border w-[170px] flex items-center justify-center h-[60px] rounded-full text-xl">
              Digital
            </div>
          </li>
        </ul>
      </div>
      {/* button presentation computer version */}
      <div className="pl-24 lg:mt-28 lg:block hidden">
        <span className="lg:text-5xl md:text-3xl pl-2 text-black">
          TOUTES LES OEUVRES
        </span>
      </div>
      <br className="hidden sm:block" />
      {/* button section mobile version */}
      <div className="lg:px-20 bg-white rounded-none sm:px-10 px-3 lg:hidden block">
        <details className="collapse rounded-none">
          <summary className="collapse-title  relative text-xl flex justify-between font-medium">
            <div className="flex w-full justify-between">
              <span className="text-base text-black">Tous les projets</span>
              <span className="absolute right-2 bottom-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                >
                  <path
                    d="M16.625 1.54375L15.2687 0.1875L8.3125 7.14375L1.35625 0.1875L0 1.54375L8.3125 9.8125L16.625 1.54375Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </summary>
          <div className="collapse-content hover:bg-base-100 flex items-center px-3 justify-start border-2">
            <p className="text-black">Strategie</p>
          </div>
          <div className="collapse-content hover:bg-base-100  flex items-center px-3 justify-start border-2">
            <p className="text-black">Branding</p>
          </div>
          <div className="collapse-content hover:bg-base-100  flex items-center px-3 justify-start border-2">
            <p className="text-black">Digital</p>
          </div>
        </details>
      </div>
      {/* button section mobile version */}
      {data.map((el) => (
        <>
          <div className="lg:px-24 sm:px-12 px-6">
            <div className="border border-black"></div>
          </div>
          <div className="w-full pb-6 sm:px-12 px-6 lg:px-24 flex lg:flex-row flex-col">
            <div className="w-full lg:order-1 order-2 lg:w-1/2 flex flex-col mt-8 bg-white">
              <ul className="lg:flex space-x-6 mt-3 hidden list-outside">
                <li>
                  <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                    {el.descriptionOne}
                  </div>
                </li>
                <li>
                  <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                    {el.descriptionTwo}
                  </div>
                </li>
                <li>
                  <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                    {el.descriptionThree}
                  </div>
                </li>
              </ul>

              <span className="sm:mt-10 text-xl sm:text-4xl  text-black font-semibold">
                {el.subtitle}
              </span>

              <p className="sm:mt-12 mt-2 text-sm sm:text-lg font-medium text-black">
                {el.p}
              </p>

              <ul className="list-disc hidden sm:flex flex-col space-y-1 text-black list-inside mt-12 pl-4 text-3xl font-light">
                <li className={el.featureOne === "" ? "hidden" : "visible"}>
                  {el.featureOne}
                </li>
                <li className={el.featureTwo === "" ? "hidden" : "visible"}>
                  {el.featureTwo}
                </li>
                <li
                  className={el.descriptionThree === "" ? "hidden" : "visible"}
                >
                  {el.featureThree}
                </li>
                <li className={el.featureFour === "" ? "hidden" : "visible"}>
                  {el.featureFour}
                </li>
                <li className={el.featureFive === "" ? "hidden" : "visible"}>
                  {el.featureFive}
                </li>
                <li className={el.featureSix === "" ? "hidden" : "visible"}>
                  {el.featureSix}
                </li>
                <li className={el.featureSeven === "" ? "hidden" : "visible"}>
                  {el.featureSeven}
                </li>
              </ul>

              <Link to={`/client/${el._id}`}>
                <div className="sm:flex hidden cursor-pointer hover:underline mt-20 justify-start space-x-2">
                  <span className="text-3xl text-black">
                    VOIR L'ETUDE DE CAS
                  </span>
                  <img src="/icon/arrow_empty.svg" alt="" />
                </div>
              </Link>
            </div>
            <div className="w-full lg:block flex items-center justify-center lg:order-2 order-1 lg:w-1/2  mt-8 relative">
              <Link to={`/client/${el._id}`}>
                <img
                  src={el.picture[0]}
                  alt=""
                  className="max-w-full h-full rounded-lg cursor-pointer hover:scale-95 transition-all z-10 ml-auto mr-auto block"
                />
              </Link>
              <div className="flex top-0 left-1 sm:left-24 md:left-36 lg:hidden z-20 absolute">
                <ul className="flex space-x-2 sm:space-x-6 mt-3  list-outside">
                  <li>
                    <div className="border-white bg-white  sm:bg-none text-sm sm:font-medium text-black border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                      {el.descriptionOne}
                    </div>
                  </li>
                  <li>
                    <div className="border-white text-sm sm:font-medium bg-white  sm:bg-none text-black border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                      {el.descriptionTwo}
                    </div>
                  </li>
                  <li>
                    <div className="border-white text-sm sm:font-medium bg-white  sm:bg-none text-black border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                      {el.descriptionThree}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ))}
      {/**Footer */}
      <Prefooter />
      <Footer />
    </div>
  );
}
