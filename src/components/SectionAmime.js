import React, { useEffect, useState } from "react";
import "../App.css";
import Footer from "./Footer";
import Prefooter from "./Prefooter";
import axios from "axios";

export default function SectionAmime() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://caauri-api.cyclic.cloud/caauri/65097b48d3b64a105032ddfc")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className="bg-white text-black">
      <iframe
        id="iframe-trailer"
        className="w-full sm:h-[800px] h-[500px]"
        src="https://www.dailymotion.com/embed/video/x33a1ra"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
        allowfullscreen="true"
      ></iframe>
      <br />
      <br />
      <br />
      {/*partie 2 */}
      <div className="remove_div w-full mt-6  flex flex-nowrap sm:flex-wrap bg-white relative">
        <div className="w-[60%]">
          {/* Animation du text */}
          <div className="flex flex-col py-4 px-6 sm:px-12">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              <div className="text-6xl text-[#FF9A62]">CAAURI CONSULTING</div>
              <br/>
              <br/>
              <strong className="font-extralight text-4xl text-black mt-2 mb-4">
                AGENCE DE PUBLICITE DIGITALE
              </strong>
              <br/>
              <br/>
              <p className="font-thin sm:text-base text-black text-xs">
                {data.firstSection && data.firstSection.p1}
                <br />
                <br />
                {data.firstSection && data.firstSection.p2}
                <br />
                <br />
                {data.firstSection && data.firstSection.p3}
              </p>
              <strong className="w-full text-[#FF9A62] flex items-center justify-center font-thin my-4">
                VOUS FOURNIR 100% DE SATISFACTION
              </strong>
              <p className="font-light text-black text-xs sm:text-base">
                {data.firstSection && data.firstSection.p4}
              </p>
              <ul className="mt-4 list-inside text-black font-thin list-disc text-xs sm:text-base">
                <li>Lorem ipsum dolor, sit amet </li>
                <li>Lorem ipsum dolor, sit amet </li>
                <li>Lorem ipsum dolor, sit amet </li>
                <li>Lorem ipsum dolor, sit amet </li>
              </ul>
            </div>
            {/* nos services */}
            <strong
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="w-full  mt-28 text-[#FF9A62] font-thin text-xl sm:text-2xl md:text-3xl xl:text-5xl flex items-center justify-center"
            >
              NOS SERVICES
            </strong>
            <div className="h-[550px] sm:h-[580px] md:h-[720px] bg-white">
              <img
                src="/images/mac_img.png"
                alt=""
                className=" max-w-full h-full ml-auto mr-auto block"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1300"
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text-[#C52127]  font-bold flex-col flex w-full justify-end text-end items-end leading-none sm:pr-40 px-16">
            <span
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              2019
            </span>
            <span
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              creation de caauri consulting
            </span>
          </div>
          {/*roll up */}
          <div className="h-[850px] sm:h-[950px]">
            <img
              src="/images/roll_up.png"
              alt=""
              className="max-w-full h-full ml-auto mr-auto block"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1300"
            />
          </div>
          <div className="text-[#C52127]  font-bold flex-col flex w-full justify-end text-end items-end leading-none pr-60 px-16">
            <span
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              2019
            </span>
            <span
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              creation de caauri consulting
            </span>
          </div>
          {/* div absolute */}
          <div className="absolute bg-black top-[67%] z-40 w-full items-center justify-center text-white  flex flex-col h-[300px]">
            <div>
              <span className="z-[60] font-semibold text-2xl">Google</span>{" "}
              <span className="z-[60] font-thin text-2xl">
                business profile
              </span>
            </div>
            <div className="mt-4 font-thin text-2xl flex gap-x-2">
              <span>4.O</span>{" "}
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star_empty.svg" alt="" className="h-6 mt-1" />
              </span>
            </div>
            <div className="mt-5 font-thin text-xs text-white">
              note globale sur avis clients sur note fiche
            </div>
            <div className="border text-xs border-[#FFD700] w-[180px] mt-6 py-2 rounded-[60px] text-black flex items-center justify-center">
              <div className="bg-[#FFD700] text-center hover:scale-75 transition-all cursor-pointer w-[160px] h-[50px] flex rounded-[60px] items-center justify-center">
                {" "}
                partagez-nous <br /> votre experience
              </div>
            </div>
          </div>
          {/* image ipad */}
          <div className="bg-white mt-[1150px] h-[580px] ">
            <img
              src="/images/ipad.png"
              alt=""
              className="max-w-full h-full ml-auto mr-auto block"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1300"
            />
          </div>
          {/* image ipad */}
        </div>
        {/* border-div */}
        <div className="w-[2%]   flex flex-col items-center z-30  pt-20">
          {/*1 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="336"
            viewBox="0 0 1 336"
            fill="none"
          >
            <path
              d="M1 0.618164L1 335.804H0L0 0.618164L1 0.618164Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 2 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="705"
            viewBox="0 0 110 804"
            fill="none"
            className="ml-24"
          >
            <path
              d="M0.990234 0.553223L109.753 803.333L108.763 803.468L-0.000663666 0.688202L0.990234 0.553223Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 3 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="ml-48 z-30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="483"
            height="535"
            viewBox="0 0 483 1078"
            fill="none"
            className="mr-12"
          >
            <path
              d="M0.816406 1076.92L481.432 0.996947L482.345 1.40481L1.72945 1077.33L0.816406 1076.92Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 4 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mr-72  z-30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="165"
            height="735"
            viewBox="0 0 165 972"
            fill="none"
            className="mr-40"
          >
            <path
              d="M0.990234 0.711914L164.987 971.475L163.997 971.643L-0.000146766 0.880134L0.990234 0.711914Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 5 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mr-8"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="370"
            height="235"
            viewBox="0 0 370 398"
            fill="none"
            className="mr-64"
          >
            <path
              d="M0.769531 397.095L368.95 0.593206L369.682 1.27649L1.50141 397.778L0.769531 397.095Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 6 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mr-[475px]  z-30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="231"
            height="1035"
            viewBox="0 0 231 1210"
            fill="none"
            className="mr-[675px]"
          >
            <path
              d="M0.900391 1209.76L229.647 0.909147L230.63 1.09507L1.88295 1209.94L0.900391 1209.76Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 7 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mr-[875px]  z-30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="535"
            height="834"
            viewBox="0 0 535 834"
            fill="none"
            className="h-[735px] mr-[405px]"
          >
            <path
              d="M1.83984 0.988281L534.442 832.969L533.6 833.508L0.997632 1.52742L1.83984 0.988281Z"
              fill="#7B7B7B"
            />
          </svg>
          {/*8 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="z-30 ml-16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="246"
            viewBox="0 0 12 246"
            fill="none"
            className="ml-16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5 0.81868L6.5 233.183H5.5L5.5 0.81868H6.5Z"
              fill="#7B7B7B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 244.032C8.75888 244.032 11 241.789 11 239.016C11 236.243 8.75888 234 6 234C3.24112 234 1 236.243 1 239.016C1 241.789 3.24112 244.032 6 244.032ZM6 245.032C9.31371 245.032 12 242.339 12 239.016C12 235.694 9.31371 233 6 233C2.68629 233 -2.15538e-08 235.694 -4.81417e-08 239.016C-7.47297e-08 242.339 2.68629 245.032 6 245.032Z"
              fill="#F2B749"
            />
          </svg>
          {/*
            <img src="/icon/circle.svg" alt="" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[335px]"></div>
          <img src="/icon/circle.svg" alt="" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B] h-[705px] rotate-[-4.5deg]  ml-14"></div>
          <img src="/icon/circle.svg" alt="" className="ml-28 z-30" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[535px] rotate-[11.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="mr-28  z-30" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[735px] rotate-[-8.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="ml-28 z-30" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[235px] rotate-[25.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="mr-28  z-30" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[1035px] mr-[310px] rotate-[10.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="z-30 mr-[505px]" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[735px] mr-[310px] rotate-[-15.2deg]"></div>
          <img src="/icon/circle.svg" alt="" className="z-30 mr-[108px]" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[335px] mr-[108px] mt-2"></div>
          <img src="/icon/circle.svg" alt="" className="z-30 mr-[108px]" /> */}
        </div>
        {/* second-div */}
        <div className="w-[38%]  flex flex-col">
          <div className="text-[#C52127] font-bold flex-col  h-[97px] relative flex justify-end items-start leading-none px-4">
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              1990
            </span>
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              création d'internet
            </span>
          </div>
          <div className=" text-[#C52127] font-bold flex-col justify-end flex h-[365px] items-start leading-none px-4">
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              1990
            </span>
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              création d'internet
            </span>
          </div>
          {/* logo_caauri */}
          <div className="flex-col flex h-[700px]  items-center justify-end">
            <div className="flex h-[1/2] w-full  justify-end">
              <img
                src="/icon/logo_none.png"
                alt=""
                className="max-w-full h-full ml-auto mr-auto block"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1300"
              />
            </div>
            <div className="h-1/2 text-end z-30 flex flex-col text-[#C52127] font-bold flex-end w-full items-start justify-end mr-52 sm:mr-96">
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                className="w-full flex items-end justify-end md:w-[65%] lg:w-[53%] xl:w-[35%]"
              >
                2019
              </div>
              <span
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                className="text-black text-xs font-bold sm:text-base sm:font-normal"
              >
                création de caauri consulting
              </span>
            </div>
          </div>
          <div className="flex-col flex h-[550px]  items-center justify-end">
            <img
              src="/images/out.png"
              alt=""
              className="max-w-full h-full ml-auto mr-auto block"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1300"
            />
          </div>
          <div className="text-[#C52127] font-bold flex-col h-[750px] flex items-start justify-end leading-none px-16 sm:px-12">
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              1990
            </span>
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              création d'internet
            </span>
          </div>
          {/* iPad text */}
          <div className=" text-black mt-[1500px]">
            <div
              data-aos="fade-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              <span className="  text-[#FF9A62]  text-5xl mr-32 font-thin">
                lorem lorem
              </span>
              <br />
              <br />
              <span className="text-3xl sm:text-4xl font-thin text-[#FF9A62]">
                Lorem ipsum{" "}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl font-thin text-[#FF9A62]">
                Lorem ipsum{" "}
              </span>
              <br />
              <p className="mt-6 pr-4 text-xs sm:text-base text-black ">
                {data.lastSection && data.lastSection.p}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="visible_div">
        <div className="flex flex-col items-center justify-center py-4 ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
            className="flex items-center px-6 flex-col justify-center"
          >
            <div className="text-3xl text-[#FF9A62]">CAAURI CONSULTING</div>
            <br />
            <strong className="font-extralight w-full items-center justify-center flex text-black mt-2 mb-4">
              AGENCE DE PUBLICITE DIGITALE
            </strong>
            <p className="font-thin text-center sm:text-base mt-6 text-black text-xs">
              {data.firstSection && data.firstSection.p1}
              <br />
              <br />
              {data.firstSection && data.firstSection.p2}
              <br />
              <br />
              {data.firstSection && data.firstSection.p3}
            </p>
            <strong className="w-full text-[#FF9A62] flex items-center justify-center font-thin my-4">
              VOUS FOURNIR 100% DE SATISFACTION
            </strong>
            <p className="font-light text-center text-black text-xs sm:text-base">
              {data.firstSection && data.firstSection.p4}
            </p>
            <ul className="mt-4 list-inside flex flex-col px-3 w-full text-black font-thin list-disc text-xs sm:text-base">
              <li>Lorem ipsum dolor, sit amet </li>
              <li>Lorem ipsum dolor, sit amet </li>
              <li>Lorem ipsum dolor, sit amet </li>
              <li>Lorem ipsum dolor, sit amet </li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <div className=" bg-black  z-40 w-full items-center justify-center text-white  flex flex-col h-[300px]">
            <div>
              <span className="z-[60] font-semibold text-2xl">Google</span>{" "}
              <span className="z-[60] font-thin text-2xl">
                business profile
              </span>
            </div>
            <div className="mt-4 font-thin text-2xl flex gap-x-2">
              <span>4.O</span>{" "}
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star_empty.svg" alt="" className="h-6 mt-1" />
              </span>
            </div>
            <div className="mt-5 font-thin text-xs text-white">
              note globale sur avis clients sur note fiche
            </div>
            <div className="border text-xs border-[#FFD700] w-[180px] mt-6 py-2 rounded-[60px] text-black flex items-center justify-center">
              <div className="bg-[#FFD700] text-center hover:scale-75 transition-all cursor-pointer w-[160px] h-[50px] flex rounded-[60px] items-center justify-center">
                {" "}
                partagez-nous <br /> votre experience
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className=" text-black">
            <div
              data-aos="fade-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="flex flex-col px-6"
            >
              <span className="  text-[#FF9A62]  text-5xl mr-32 font-thin">
                lorem lorem
              </span>
              <br />
              <span className="text-3xl sm:text-4xl font-thin text-[#FF9A62]">
                Lorem ipsum{" "}
              </span>
              <span className="text-2xl sm:text-3xl font-thin text-[#FF9A62]">
                Lorem ipsum{" "}
              </span>
              <br />
              <p className=" pr-4 text-xs sm:text-base text-black ">
                {data.lastSection && data.lastSection.p}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
}
