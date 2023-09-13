import React from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";

export default function Five() {
  return (
    <div className="bg-white text-black">
      {/* first Blog */}
      <div className="flex w-full pt-56">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="sm:text-7xl text-2xl w-1/2 pl-1 sm:pl-10 sm:block flex justify-start "
        >
          CAAURI BLOG
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="w-1/2 text-xs sm:text-3xl pl-16   flex justify-center"
        >
          Apprenez de nous, laissez vous divertir ou
          <br />
          inspirez
        </div>
      </div>
      <div className="flex flex-col mt-32">
        <div className="w-full flex">
          <span className="sm:text-2xl  font-medium w-1/2 flex pl-5 sm:pl-24 justify-start">
            A LA UNE{" "}
          </span>
          <span className="w-1/2"></span>
        </div>
        <div className="flex justify-center h-[350px] sm:h-[835px] px-4 sm:px-24 relative">
          <img
            src="/images/bot.png"
            alt=""
            className="max-w-full h-auto z-10 ml-auto mr-auto block"
          />
          <div className="absolute flex flex-col left-5 sm:left-24 top-0 sm:top-12">
            <span className=" sm:text-4xl  text-white z-20">KMS EXPRESS</span>
            <span className="sm:text-3xl mt-2 text-white z-20">
              13/12/2023 &nbsp; |Contenu | il y a 1 min
            </span>
          </div>
        </div>
        <div className="flex justify-center w-full mt-12 gap-x-4 px-4 sm:px-24">
          <div className="w-1/2 flex flex-col">
            <div className="h-[350px] sm:h-[407px]">
              <img
                src="/images/bot.png"
                alt=""
                className="max-w-full h-full  ml-auto mr-auto block"
              />
            </div>
            <div className="flex flex-col mt-4">
              <span className="sm:text-3xl text-xs font-medium">
                IA : DES CONSEILS SIMPLES POUR UTILISER L'IA <br /> COMME UN
                PROFESIONNEL
              </span>
              <span className="sm:mt-4 mt-1 text-xs sm:text-2xl">
                21/12/2023 | Contenu
              </span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="sm:h-[407px] h-[350px]">
              <img
                src="/images/bot.png"
                alt=""
                className="max-w-full h-full  ml-auto mr-auto block"
              />
            </div>
            <div className="flex flex-col mt-4">
              <span className="sm:text-3xl text-xs font-medium">
                IA : DES CONSEILS SIMPLES POUR UTILISER L'IA <br /> COMME UN
                PROFESIONNEL
              </span>
              <span className="sm:mt-4 mt-1 text-xs sm:text-2xl">
                21/12/2023 | Contenu
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Prefooter />
      <Footer />
    </div>
  );
}
