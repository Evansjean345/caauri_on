import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="bg-white text-black">
      {/* First Section */}
      <div className="flex flex-col justify-start space-y-4 sm:space-y-2 pt-40 pl-6 sm:pl-20 items-start">
        <span className="text-5xl  sm:text-6xl  md:text-8xl">Nous joindre</span>
        <span className="text-xl md:text-3xl">Prenons un café</span>
      </div>
      {/* Contact */}
      <div className="flex lg:flex-row flex-col w-full mt-12 lg:mt-44 pl-6 sm:pl-20 pb-44 lg:pr-0 pr-12">
        <div className="flex flex-col mt-32 lg:mt-0 lg:order-1 order-2 space-y-8 w-full lg:w-1/2 justify-normal items-start">
          <div className="flex flex-col text-lg">
            <span>Nous envoyez un e-mail :</span>
            <span className="font-medium">Contact@caauri.com</span>
          </div>
          <div className="flex flex-col text-lg">
            <span>Nous sommes basés :</span>
            <span className="font-medium">
              01 BP 194 Abidjan, 01 Rue Alphonse Daudet
            </span>
          </div>
          <div className="flex flex-col text-lg">
            <span>Téléphone portable :</span>
            <span className="font-medium">(+225) 07 08 02 80 80</span>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:order-2 order-1 pr-0 lg:pr-20">
          <form action="" method="post" className="flex flex-col space-y-12">
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Votre nom
              </label>
              <Input variant="static" size="lg" color="black" />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Votre adresse mail
              </label>
              <Input variant="static" size="lg" color="black" />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Société
              </label>
              <Input variant="static" size="lg" color="black" />
            </div>
            <div className="flex flex-col space-y-8">
              <label htmlFor="" className="font-medium text-lg">
                Votre projet concerne
              </label>
              <Input variant="static" size="lg" color="black" />
            </div>
            <div className="border-b border-black">
              <label
                htmlFor=""
                className="font-medium text-lg flex mb-4 space-x-8"
              >
                <span>Joindre un fichier</span>
                <span>
                  <input
                    type="file"
                    class="block w-full text-sm text-black font-normal
        file:border-0
      file:text-base file:font-normal
      file:bg-[#D9D9D9]
      hover:file:bg-[#c3c3c3]
    "
                  />
                </span>
              </label>
            </div>
            <span className="w-[250px] h-[29px] group sm:block hidden">
              <div className="mt-5 flex gap-5 hover:flex hover:justify-center hover:items-center hover:gap-0 py-4 hover:bg-black w-[152px] rounded-full transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
                <div className="text-xl">Envoyer</div>
                <div className="bg-black rounded-b-full w-[29px]  transition-all flex items-center hover-bg-none justify-center rounded-l-full">
                  <img src="/logo/frame.svg" alt="" />
                </div>
              </div>
            </span>
            <br className="sm:hidden block" />
            <div className="sm:hidden flex justify-center">
              <span className="w-[100px] h-[29px]   sm:hidden flex items-center justify-center group">
                <div className="mt-5 flex  justify-center items-center gap-0 py-4 px-4 bg-black w-[152px] rounded-full transition-all   text-white rounded-l-full rounded-r-full">
                  <div className="text-xl pl-2">Envoyer</div>
                  <div className="bg-black rounded-b-full w-[29px]  transition-all flex items-center hover-bg-none justify-center rounded-l-full">
                    <img src="/logo/frame.svg" alt="" />
                  </div>
                </div>
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
