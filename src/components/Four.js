import React from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";

const items = [
  {
    id: 1,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Site internet",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio modi .",
  },
  {
    id: 2,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Application web",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio .",
  },
  {
    id: 3,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Strategie",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio .",
  },
  {
    id: 4,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Strategie",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio modi ",
  },
  {
    id: 5,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Site internet",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio modi ",
  },
];

export default function Four() {
  return (
    <div className="bg-white text-black">
      {/* first Section */}
      <div className="w-full">
        <p
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-full px-4 xl:font-semibold font-bold text-black xl:px-0 pt-44 sm:pt-56 flex items-center justify-center text-xl  sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl"
        >
          CAAURI CONSULTING :
          <br />
          plateforme de gestions interne des
          <br />
          employés
        </p>
        <div className="flex w-full md:mt-20 mt-8">
          <div className="w-1/2 hidden md:block"></div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="w-full md:px-0 px-8 md:pl-0 sm:px-24 md:w-1/2 text-sm md:text-xl md:pr-32 text-black"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            illo dolor debitis accusantium maiores sunt nulla odit aliquam sit
            perferendis, tempora voluptatum pariatur sapiente cum excepturi fuga
            perferendis, tempora voluptatum pariatur sapiente cum excepturi fuga
            consequatur error architecto!
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="sm:px-28 sm:mt-32 mt-12 px-8">
        <img
          src="/images/plats.png"
          alt=""
          className="w-full max-w-full h-auto ml-auto mr-auto block"
        />
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="w-full flex flex-col xl:flex-row justify-between mt-10"
      >
        <div className="xl:w-[45%] px-8 sm:px-12 w-full  text-black xl:px-44 flex flex-col justify-center  font-semibold text-xl sm:text-2xl">
          <p>Caauri consulting</p>
          <span className="sm:text-base font-normal text-xs mt-2 sm:mt-4">
            (role du client) Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Id temporibus possimus repudiandae minima
          </span>
          <p className="sm:mt-8 mt-3 ">Industrie</p>
          <span className="text-base font-normal mt-1">Saas</span>
          <p className="sm:mt-8 mt-3">Service que nous avons fourni</p>
          <ul className="font-normal text-xs sm:text-base mt-2 leading-6 list-disc list-inside">
            <li>Refonte site web</li>
            <li>Stratégie</li>
            <li>Expérience utilisateur</li>
            <li>Image de la marque</li>
          </ul>
          <br className="hidden sm:hidden" />
          <br className="hidden sm:hidden" />
          <p className="sm:mt-8 mt-3 flex pb-8 sm:pb-20 text-lg  sm:text-4xl underline underline-offset-8">
            Voir le site
            <img src="/icon/arrow.svg" alt="" className="sm:mt-2" />
          </p>
        </div>
        <div className="xl:w-[55%] w-full px-8 sm:px-12 xl:px-12 flex-col flex xl:pr-24 font-semibold text-xl sm:text-2xl text-start">
          <p>PROBLEMATIQUE</p>
          <span className="text-xs sm:text-base mt-2 sm:mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            rem at dolorum, alias ullam libero assumenda laboriosam dolorem!
            Mollitia error, aperiam labore deleniti culpa eos neque cumque
            consequuntur quidem?
          </span>
          <span className="text-xs sm:text-base mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            rem at dolorum, alias ullam libero assumenda laboriosam dolorem! rem
            at dolorum, alias ullam libero assumenda laboriosam dolorem! at
            dolorum, alias ullam libero assumenda laboriosam dolorem! Mollitia
            error, aperiam labore deleniti culpa eos neque cumque consequuntur
            quidem?
          </span>
          <p className="sm:mt-6 mt-3">STRATEGIE DE L'AGENCE</p>
          <span className="sm:text-base text-xs mt-2 sm:mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            rem at dolorum, alias ullam libero assumenda laboriosam dolorem! rem
            at dolorum, alias ullam libero assumenda laboriosam dolorem! at
            dolorum, alias ullam libero assumenda laboriosam dolorem! Mollitia
            error, aperiam labore deleniti culpa eos neque cumque consequuntur
            quidem?
          </span>
          <span className="text-xs sm:text-base mt-3 sm:mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            rem at dolorum, alias ullam libero assumenda laboriosam dolorem! rem
            at dolorum, alias ullam libero assumenda laboriosam dolorem! at
            dolorum, alias ullam libero assumenda laboriosam dolorem! Mollitia
            error, aperiam labore deleniti culpa eos neque cumque consequuntur
            quidem?
          </span>
        </div>
      </div>
      {/* Thrid section */}
      <div className="flex w-full md:flex-row flex-col mt-16 gap-x-0 md:gap-x-16 gap-y-10 md:gap-y-0 px-8 md:px-20">
        <div className="md:w-1/2 w-full">
          <img
            src="/images/plats.png"
            alt=""
            className="max-w-full h-auto z-10 ml-auto mr-auto block"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src="/images/plats.png"
            alt=""
            className="max-w-full h-auto z-10 ml-auto mr-auto block"
          />
        </div>
      </div>
      {/* Caroussel section */}
      <div
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="w-full text-black flex-col flex items-center justify-center mt-28 "
      >
        <span className="2xl:text-7xl px-8 md:text-3xl lg:px-8 font-bold 2xl:font-normal text-xl w-full text-start font-meduim lg:text-center">
          CE QUE LE CLIENT A DIT
        </span>
        <p className="lg:text-xl text-xs  font-normal px-8 xl:px-96 mt-4">
          `` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          corporis fugiat illum enim. Laudantium, omnis vitae. Adipisci, magnam.
          Commodi voluptatem asperiores sed, enim non facilis tenetur Commodi
          voluptatem asperiores sed, enim non facilis tenetur consequuntur ipsum
          ad odio. ``
        </p>
        <div className="flex w-full mt-4">
          <div className="w-[31%] flex justify-end">
            <img src="/images/cadre.png" alt="" />
          </div>
          <div className="w-[69%]  pl-6">
            <span className="font-semibold">Carine N'Guessan</span>
            <br />
            <br />
            <span className="leading-none">
              Responsable de l'ingénerie
              <br />
              de caauri consulting
            </span>
          </div>
        </div>
      </div>
      {/* Carousels div */}
      <div className="w-full flex justify-between mt-10 text-lg px-4 sm:px-12">
        <div className="sm:w-1/2 w-[35%]  font-semibold text-xl sm:text-2xl pt-4 lg:pt-2">
          D'autres travaux
        </div>
        <div className="sm:w-1/2 flex justify-end">
          <div className="sm:mt-5 mt-9 flex gap-2 hover:bg-black py-2  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
            <div className="font-thin">Tous les travaux</div>
            <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
              <img src="/logo/frame.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* carousels items */}
      <div className="py-4 px-2 sm:px-0 sm:py-0 rounded-lg">
        <div
          className="carousel carousel-center w-full rounded-lg  p-4 mt-6
       space-x-4"
        >
          {items.map((item) => (
            <div
              className={`carousel-item flex group rounded-lg  transition-transform flex-col w-[300px] sm:w-[420px] h-[470px] sm:px-8 relative`}
            >
              <img
                src={item.imgSource}
                alt=""
                className="w-full z-30  max-w-full h-full ml-auto mr-auto block rounded-lg cursor-pointer  group-hover:scale-95 transition-all "
              />
              <span className="z-40 top-10 left-12 sm:left-16 absolute cursor-pointer group-hover:scale-75 transition-all bg-white w-[150px] h-[50px] flex items-center justify-center rounded-full border border-black">
                {item.title}
              </span>
              <span className="font-semibold px-4 sm:px-0 text-xl mt-6">
                Caauri consulting
              </span>
              <p className="mt-2 sm:text-base pl-4 sm:px-0 text-xs font-normal">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Pub */}
      {/* Footer */}
      <Prefooter />
      <Footer />
    </div>
  );
}
