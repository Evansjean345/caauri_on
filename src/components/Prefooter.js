import React from "react";

export default function Prefooter() {
  return (
    <div className="w-full mt-32 bg-white text-black sm:px-0 px-2 pb-32 flex items-center justify-center flex-col">
      <span
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2500"
        className="2xl:text-6xl sm:text-4xl text-2xl font-semibold sm:font-meduim text-center"
      >
        Débloquez votre prochaine étape de
        <br className="sm:block hidden" />
        croissance avec Caauri !
      </span>
      <span
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="lg:text-2xl sm:text-xl font-normal mt-12 text-center"
      >
        Nous utilisons la statégie , la créativité et l'ingénierie pour fournir
        des
        <br className="sm:block hidden" />
        résultats mésurables à fort impact pour votre entreprise. Exlporez
        <br className="sm:block hidden" />
        le marketing de niveau supérieur avec un pionnet du marketing <br />
        numérique qui garantit un rendement maximal des investissements
      </span>
      <span className="sm:block hidden">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="mt-5 sm:font-medium cursor-pointer  flex gap-5 hover:gap-0 py-4 hover:flex hover:items-center hover:justify-center hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full"
        >
          <div>Discutons</div>
          <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
            <img src="/logo/frame.svg" alt="" />
          </div>
        </div>
      </span>
      <span className="sm:hidden block">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="mt-5 sm:font-medium cursor-pointer  flex  px-4 gap-0 py-4 items-center justify-center bg-black  transition-all sm:px-2   text-white rounded-l-full rounded-r-full"
        >
          <div>Discutons</div>
          <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
            <img src="/logo/frame.svg" alt="" />
          </div>
        </div>
      </span>
    </div>
  );
}
