import React from "react";

export default function Footer() {
  return (
    <div className="bg-black w-full pt-4 mt-6 text-white">
      <div className="w-full flex items-start justify-start  lg:items-center px-6 sm:px-12 lg:px-0 lg:justify-center ">
        <img src="/logo/logo_white.png" alt="" />
      </div>
      {/* Footer item */}
      <div className=" mt-6 w-full flex justify-center items-start flex-col lg:flex-row px-6 sm:px-12 lg:px-24">
        <div className="w-full  lg:w-1/2 flex flex-col mt-12 lg:mt-0 justify-center items-start">
          <span className="bg-black text-start border-white text-xl  border-b-2 rounded-sm">
            Contact@caauri.com
          </span>
          <span className="font-thin mt-6  text-start text-xl">
            Pharmacie Azur,Angré,Abidjan
            <br />
            (+225) 07 08 02 80 80
          </span>
        </div>
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex flex-col justify-center  items-start lg:items-end">
          <ul className="flex lg:mr-44 gap-x-2">
            <li>
              {" "}
              <img
                src="/icon/in_white.svg"
                alt=""
                className="border border-white rounded-full flex items-center justify-center p-[2px] w-[30px] h-[30px] mt-2"
              />
            </li>
            <li>
              {" "}
              <img
                src="/icon/insta_white.svg"
                alt=""
                className="border border-white rounded-full flex items-center justify-center p-[2px] w-[30px] h-[30px] mt-2"
              />
            </li>
            <li>
              {" "}
              <img
                src="/icon/twitter_w.svg"
                alt=""
                className="border border-white rounded-full flex items-center justify-center p-[2px] w-[30px] h-[30px] mt-2"
              />
            </li>
            <li>
              {" "}
              <img
                src="/icon/f_w.svg"
                alt=""
                className="border border-white rounded-full flex items-center justify-center p-[2px] w-[30px] h-[30px] mt-2"
              />
            </li>
          </ul>
          <span className="font-thin   mt-6 text-start text-xl">
            Résevervez une consultation gratuite
            <br />
            ou envoyez nous un email
          </span>
        </div>
      </div>
      {/* Footer derniere partie */}
      <div className="h-[1px] border mx-6 sm:mx-12 lg:mx-20 mt-20 border-white rounded-sm"></div>
      <div className="bg-black w-full flex justify-between mt-4 px-6 sm:px-12 lg:px-20 pb-12">
        <div>
          {" "}
          &copy;{" "}
          <span className="font-thin text-xs">2023 Caauri Consulting</span>{" "}
        </div>
        <div className="flex justify-end font-thin text-xs mt-[6.5px] sm:mt-0 gap-x-6">
          <span>Terms & Services</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </div>
  );
}
