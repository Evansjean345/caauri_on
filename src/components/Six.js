import React from "react";
import Footer from "./Footer";

export default function Six() {
  return (
    <div className="bg-white text-black">
      {/* first section */}
      <div className="pt-24">
        <div className="flex justify-center px-6 sm:px-24 pt-32  relative">
          <img
            src="/images/bot.png"
            alt=""
            className="h-[285px] sm:h-[1035px] max-w-full ml-auto mr-auto block"
          />
        </div>
        <div className="w-full text-black mt-2 flex">
          <span className="sm:text-2xl text-sm font-medium sm:w-1/2 flex px-8 sm:pl-24 justify-start">
            A LA UNE &nbsp; &nbsp; ----- &nbsp; &nbsp; Yurii Verkalets
          </span>
          <span className="w-1/2 sm:block hidden"></span>
        </div>
      </div>
      <span className="sm:text-xl text-sm text-black font-medium px-8 sm:px-24 flex justify-start mt-2 sm:mt-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
        quibusdam adipisci fuga aspernatur veritatis vitae optio veniam, fugit
      </span>
      <p className="sm:text-base text-xs text-black flex justify-start sm:px-24 px-8 mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consequatur facilis blanditiis quisquam ad voluptate tenetur pariatur
        odio. Est illo assumenda soluta consequuntur fuga autem, beatae neque
        doloremque ducimus alias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Autem consequatur facilis blanditiis quisquam ad
        voluptate tenetur pariatur odio. Est illo assumenda soluta consequuntur
        fuga autem, beatae neque doloremque ducimus alias. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Autem consequatur facilis blanditiis
        quisquam ad voluptate tenetur pariatur odio. Est illo assumenda soluta
        consequuntur fuga autem, beatae neque doloremque ducimus alias. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur
        facilis blanditiis quisquam ad voluptate tenetur pariatur odio. Est illo
        assumenda soluta consequuntur fuga autem, beatae neque doloremque
        ducimus alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem consequatur facilis blanditiis quisquam ad voluptate tenetur
        pariatur odio. Est illo assumenda soluta consequuntur fuga autem, beatae
        neque doloremque ducimus alias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Autem consequatur facilis blanditiis quisquam ad
        voluptate tenetur pariatur odio. Est illo assumenda soluta consequuntur
        fuga autem, beatae neque doloremque ducimus alias. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Autem consequatur facilis blanditiis
        quisquam ad voluptate tenetur pariatur odio. Est illo assumenda soluta
        consequuntur fuga autem, beatae neque doloremque ducimus alias. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur
        facilis blanditiis quisquam ad voluptate tenetur pariatur odio. Est illo
        assumenda soluta consequuntur fuga autem, beatae neque doloremque
        ducimus alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem consequatur facilis blanditiis quisquam ad voluptate tenetur
        pariatur odio. Est illo assumenda soluta consequuntur fuga autem, beatae
        neque doloremque ducimus alias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Autem consequatur facilis blanditiis quisquam ad
        voluptate tenetur pariatur odio. Est illo assumenda soluta consequuntur
        fuga autem, beatae neque doloremque ducimus alias.
      </p>
      <div className="w-full mt-20 flex pb-96">
        <span className="sm:text-2xl text-sm font-medium sm:w-1/2 space-x-3 flex px-8 sm:pl-24 justify-start">
          <img
            src="/icon/arrow_left.svg"
            alt=""
            className="sm:mt-2 w-5 sm:w-9"
          />{" "}
          <span>retour au blog</span>
        </span>
        <span className="w-1/2 sm:block hidden"></span>
      </div>
      <Footer />
    </div>
  );
}
