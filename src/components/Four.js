import React from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


export default function Four() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const promises = [
      axios.get(`https://caauri-api.cyclic.cloud/portfolio/${id}`),
      axios.get(`https://caauri-api.cyclic.cloud/`),
    ];

    Promise.all(promises).then((results) => {
      setData(results[0].data);
      setData2(results[1].data);
    });
  }, [id]);

  console.log(data2);

  const formattedTitle = data?.title?.replace(/\n/g, "<br>");
  const formattedJob = data?.client?.role?.replace(/\n/g, "<br>");

  return (
    <div className="bg-white text-black">
      {/* first Section */}
      <div className="w-full">
        <p
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-full px-4 xl:font-semibold font-bold text-black xl:px-0 pt-44 sm:pt-56 flex items-center justify-center text-xl  sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl"
          dangerouslySetInnerHTML={{ __html: formattedTitle }}
        ></p>
        <div className="flex w-full md:mt-20 mt-8">
          <div className="w-1/2 hidden md:block"></div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="w-full md:px-0 px-8 md:pl-0 sm:px-24 md:w-1/2 text-sm md:text-xl md:pr-32 text-black"
          >
            {data.p}
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="sm:px-28 rounded-lg sm:mt-32 mt-12 px-8">
        <img
          src={data.picture === undefined ? "" : data.picture[0]}
          alt=""
          className="w-full rounded-lg h-[150px] sm:h-[500px] ml-auto mr-auto block"
        />
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="w-full flex flex-col xl:flex-row justify-between mt-10"
      >
        <div className="xl:w-[45%] px-8 sm:px-12 w-full  text-black xl:px-44 flex flex-col justify-center  font-semibold text-xl sm:text-2xl">
          <p>{data.subtitle}</p>
          <span className="sm:text-base font-normal text-xs mt-2 sm:mt-4">
            {data.p}
          </span>
          <p className="sm:mt-8 mt-3 ">Industrie</p>
          <span className="text-base font-normal mt-1">{data.type}</span>
          <p className="sm:mt-8 mt-3">Service que nous avons fourni</p>
          <ul className="font-normal text-xs sm:text-base mt-2 leading-6 list-disc list-inside">
            <li>{data.featureOne}</li>
            <li>{data.featureTwo}</li>
            <li>{data.featureThree}</li>
            <li>{data.featureFour}</li>
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
            {data.problematic && data.problematic.p1}
          </span>
          <span className="text-xs sm:text-base mt-5 font-normal">
            {data.problematic && data.problematic.p2}
          </span>
          <p className="sm:mt-6 mt-3">STRATEGIE DE L'AGENCE</p>
          <span className="sm:text-base text-xs mt-2 sm:mt-5 font-normal">
            {data.strategy && data.strategy.p1}
          </span>
          <span className="text-xs sm:text-base mt-3 sm:mt-5 font-normal">
            {data.strategy && data.strategy.p2}
          </span>
        </div>
      </div>
      {/* Thrid section */}
      <div className="flex w-full md:flex-row flex-col mt-16 gap-x-0 md:gap-x-16 gap-y-10 md:gap-y-0 px-8 md:px-20">
        <div className="md:w-1/2 rounded-lg w-full">
          <img
            src={data.picture === undefined ? "" : data.picture[1]}
            alt=""
            className="w-full rounded-lg h-[175px] sm:h-[350px] z-10 ml-auto mr-auto block"
          />
        </div>
        <div className="md:w-1/2 rounded-lg w-full">
          <img
            src={data.picture === undefined ? "" : data.picture[2]}
            alt=""
            className="w-full rounded-lg h-[175px] sm:h-[350px] z-10 ml-auto mr-auto block"
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
          {data.client && data.client.p}
        </p>
        <div className="flex w-full mt-4">
          <div className="w-[31%] flex justify-end">
            <img src="/images/cadre.png" alt="" />
          </div>
          <div className="w-[69%]  pl-6">
            <span className="font-semibold">
              {" "}
              {data.client && data.client.name}
            </span>
            <br />
            <br />
            <span
              className="leading-none"
              dangerouslySetInnerHTML={{ __html: formattedJob }}
            ></span>
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
          {data2.map((item) => (
            <div
              className={`carousel-item flex group rounded-lg  transition-transform flex-col w-[300px] sm:w-[420px] h-[470px] sm:px-8 relative`}
            >
              <Link
                to={`/client/${item._id}`}
                className="w-full z-30  max-w-full h-full ml-auto mr-auto block rounded-lg cursor-pointer  group-hover:scale-95 transition-all"
              >
                <img
                  src={item.picture === undefined ? "" : item.picture[0]}
                  alt=""
                  className="w-full z-30  max-w-full h-full ml-auto mr-auto block rounded-lg cursor-pointer  group-hover:scale-95 transition-all "
                />
              </Link>
              <span className="z-40 top-10 left-12 sm:left-16 absolute cursor-pointer group-hover:scale-75 transition-all bg-white w-[150px] h-[50px] flex items-center justify-center rounded-full border border-black">
                {item.subtitle}
              </span>
              <span className="font-semibold px-4 sm:px-0 text-xl mt-6">
                {item.type}
              </span>
              <p className="mt-2 sm:text-base pl-4 sm:px-0 text-xs font-normal">
                {item.p}
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
