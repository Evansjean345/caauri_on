import React from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";

export default function Three() {
  return (
    <div className="bg-white text-black">
      {/* Heading */}
      <div className="flex justify-center font-semibold text-center text-5xl w-full px-6 sm:px-0 lg:text-8xl py-32 flex-col items-center">
        <p>
          <span>Les</span>&nbsp;<span className="text-[#F2B749]">travaux</span>
          &nbsp;
          <span>que nous avons</span>
        </p>
        <p>
          <span className="text-[#F2B749]">réalisés</span>&nbsp;
          <span>jusqu'à présent</span>
        </p>
      </div>
      {/* button section computer version */}
      <div className="lg:pl-24 lg:mt-24 sm:px-12 px-6">
        <span className="text-3xl text-black font-thin sm:font-normal pl-2">
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
      <div className="lg:px-24 sm:px-12 px-6">
        <div className="border border-black"></div>
      </div>
      <div className="w-full sm:px-12 px-6 lg:px-24 flex lg:flex-row flex-col">
        <div className="w-full lg:order-1 order-2 lg:w-1/2 flex flex-col mt-8 bg-white">
          <ul className="lg:flex space-x-6 mt-3 hidden list-outside">
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
          </ul>

          <span className="sm:mt-10 text-xl sm:text-4xl  text-black font-semibold">
            Lorem ipsum
          </span>

          <p className="sm:mt-12 mt-2 text-sm sm:text-lg font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptatum aliquam! Eius quis modi, non accusamus voluptas
            consectetur sapiente. Ex dolor aliquam quo itaque facilis corporis
            id aspernatur magnam perspiciatis.
          </p>

          <ul className="list-disc hidden sm:flex flex-col space-y-1 text-black list-inside mt-12 pl-4 text-3xl font-light">
            <li>Conception d'applications mobiles</li>
            <li>Conception d'applications Web</li>
            <li>Conception de la page de destination</li>
            <li>Marque</li>
            <li>Système de conception</li>
            <li>Recherche UX</li>
            <li>Stratégie</li>
          </ul>

          <div className="sm:flex hidden mt-20 justify-start space-x-2">
            <span className="text-3xl text-black">VOIR L'ETUDE DE CAS</span>
            <img src="/icon/arrow_empty.svg" alt="" />
          </div>
        </div>
        <div className="w-full lg:block flex items-center justify-center lg:order-2 order-1 lg:w-1/2 bg-blue-50 mt-8 relative">
          <img
            src="/images/img_tec.png"
            alt=""
            className="max-w-full h-auto z-10 ml-auto mr-auto block"
          />
          <div className="flex top-0 left-1 sm:left-24 md:left-36 lg:hidden z-20 absolute">
            <ul className="flex space-x-2 sm:space-x-6 mt-3  list-outside">
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  Refonte
                </div>
              </li>
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  Website
                </div>
              </li>
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  BTP
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*2 */}
      <div className="px-24 mt-20 lg:block hidden">
        <div className="border border-black"></div>
      </div>
      <div className="w-full sm:px-12 px-6 lg:px-24 flex lg:flex-row flex-col">
        <div className="w-full lg:order-1 order-2 lg:w-1/2 flex flex-col mt-8 bg-white">
          <ul className="lg:flex space-x-6 mt-3 hidden list-outside">
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
          </ul>

          <span className="sm:mt-10 text-xl sm:text-4xl text-black font-semibold">
            Lorem ipsum
          </span>

          <p className="sm:mt-12 mt-2 text-sm sm:text-lg font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptatum aliquam! Eius quis modi, non accusamus voluptas
            consectetur sapiente. Ex dolor aliquam quo itaque facilis corporis
            id aspernatur magnam perspiciatis.
          </p>

          <ul className="list-disc hidden sm:flex flex-col space-y-1 text-black list-inside mt-12 pl-4 text-3xl font-light">
            <li>Conception d'applications mobiles</li>
            <li>Conception d'applications Web</li>
            <li>Conception de la page de destination</li>
            <li>Marque</li>
            <li>Système de conception</li>
            <li>Recherche UX</li>
            <li>Stratégie</li>
          </ul>

          <div className="sm:flex hidden mt-20 justify-start space-x-2">
            <span className="text-3xl text-black">VOIR L'ETUDE DE CAS</span>
            <img src="/icon/arrow_empty.svg" alt="" />
          </div>
        </div>
        <div className="w-full lg:block flex items-center justify-center lg:order-2 order-1 lg:w-1/2 bg-blue-50 mt-8 relative">
          <img
            src="/images/img_tec.png"
            alt=""
            className="max-w-full h-auto z-10 ml-auto mr-auto block"
          />
          <div className="flex top-0 left-1 sm:left-24 md:left-36 lg:hidden z-20 absolute">
            <ul className="flex space-x-2 sm:space-x-6 mt-3  list-outside">
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  Refonte
                </div>
              </li>
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  Website
                </div>
              </li>
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  BTP
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*3 */}
      <div className="px-24 mt-20 lg:block hidden">
        <div className="border border-black"></div>
      </div>
      <div className="w-full sm:px-12 px-6 lg:px-24 flex lg:flex-row flex-col">
        <div className="w-full lg:order-1 order-2 lg:w-1/2 flex flex-col mt-8 bg-white">
          <ul className="lg:flex space-x-6 mt-3 hidden list-outside">
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
          </ul>

          <span className="sm:mt-10 text-xl sm:text-4xl text-black font-semibold">
            Lorem ipsum
          </span>

          <p className="sm:mt-12 mt-2 text-sm sm:text-lg font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptatum aliquam! Eius quis modi, non accusamus voluptas
            consectetur sapiente. Ex dolor aliquam quo itaque facilis corporis
            id aspernatur magnam perspiciatis.
          </p>

          <ul className="list-disc hidden sm:flex flex-col space-y-1 text-black list-inside mt-12 pl-4 text-3xl font-light">
            <li>Conception d'applications mobiles</li>
            <li>Conception d'applications Web</li>
            <li>Conception de la page de destination</li>
            <li>Marque</li>
            <li>Système de conception</li>
            <li>Recherche UX</li>
            <li>Stratégie</li>
          </ul>

          <div className="sm:flex hidden mt-20 justify-start space-x-2">
            <span className="text-3xl text-black">VOIR L'ETUDE DE CAS</span>
            <img src="/icon/arrow_empty.svg" alt="" />
          </div>
        </div>
        <div className="w-full lg:block flex items-center justify-center lg:order-2 order-1 lg:w-1/2 bg-blue-50 mt-8 relative">
          <img
            src="/images/img_tec.png"
            alt=""
            className="max-w-full h-auto z-10 ml-auto mr-auto block"
          />
          <div className="flex top-0 left-1 sm:left-24 md:left-36 lg:hidden z-20 absolute">
            <ul className="flex space-x-2 sm:space-x-6 mt-3  list-outside">
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  Refonte
                </div>
              </li>
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  Website
                </div>
              </li>
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  BTP
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*4 */}
      <div className="px-24 mt-20 lg:block hidden">
        <div className="border border-black"></div>
      </div>
      <div className="w-full sm:px-12 px-6 lg:px-24 flex lg:flex-row flex-col">
        <div className="w-full lg:order-1 order-2 lg:w-1/2 flex flex-col mt-8 bg-white">
          <ul className="lg:flex space-x-6 mt-3 hidden list-outside">
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
          </ul>

          <span className="sm:mt-10 text-xl sm:text-4xl text-black font-semibold">
            Lorem ipsum
          </span>

          <p className="sm:mt-12 mt-2 text-sm sm:text-lg font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptatum aliquam! Eius quis modi, non accusamus voluptas
            consectetur sapiente. Ex dolor aliquam quo itaque facilis corporis
            id aspernatur magnam perspiciatis.
          </p>

          <ul className="list-disc hidden sm:flex flex-col space-y-1 text-black list-inside mt-12 pl-4 text-3xl font-light">
            <li>Conception d'applications mobiles</li>
            <li>Conception d'applications Web</li>
            <li>Conception de la page de destination</li>
            <li>Marque</li>
            <li>Système de conception</li>
            <li>Recherche UX</li>
            <li>Stratégie</li>
          </ul>

          <div className="sm:flex hidden mt-20 justify-start space-x-2">
            <span className="text-3xl text-black">VOIR L'ETUDE DE CAS</span>
            <img src="/icon/arrow_empty.svg" alt="" />
          </div>
        </div>
        <div className="w-full lg:block flex items-center justify-center lg:order-2 order-1 lg:w-1/2 bg-blue-50 mt-8 relative">
          <img
            src="/images/img_tec.png"
            alt=""
            className="max-w-full h-auto z-10 ml-auto mr-auto block"
          />
          <div className="flex top-0 left-1 sm:left-24 md:left-36 lg:hidden z-20 absolute">
            <ul className="flex space-x-2 sm:space-x-6 mt-3  list-outside">
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  Refonte
                </div>
              </li>
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  Website
                </div>
              </li>
              <li>
                <div className="border-white text-sm sm:font-medium text-white border w-[80px] sm:w-[110px] flex items-center justify-center h-[40px] rounded-full">
                  BTP
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/**Footer */}
      <Prefooter />
      <Footer />
    </div>
  );
}
