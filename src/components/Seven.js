import React, { useState } from "react";
import Footer from "./Footer";

export default function Seven() {
  const [content, setContent] = useState({
    div1: false,
    div2: false,
    div3: false,
    div4: false,
  });

  const viewContent = (divName) => {
    setContent((prevContent) => ({
      ...prevContent,
      [divName]: !prevContent[divName],
    }));
  };

  return (
    <div className="bg-white text-black">
      {/*Acceuil */}
      <div className="flex sm:flex-row flex-col w-full pt-32">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="sm:text-7xl text-4xl sm:w-1/2 pl-8 sm:pl-10 flex justify-start "
        >
          Caarrières Chez
          <br />
          Caauri
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="sm:w-1/2 sm:text-2xl font-medium mt-4 sm:mt-20 pl-8 sm:pl-16 flex sm:justify-center"
        >
          Appel à tous les acteurs du changement
          <br />
          Caauri recrute !
        </div>
      </div>
      {/* Section recrutement */}
      <div>
        <div className="flex justify-center items-center flex-col mt-32 space-y-2">
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500"
            className="sm:text-2xl font-medium"
          >
            Nous embauchons
          </span>
          <span>
            <img
              src="/icon/arrow_circle.svg"
              alt=""
              className="sm:h-7 sm:w-7 h-6 w-6"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="3000"
            />
          </span>
          {/* Carreer */}
          <span className="mt-3"></span>

          <div className="flex flex-col space-y-12 font-thin w-full justify-center items-center">
            <div className="flex flex-col sm:w-[60%]  text-white py-4 px-3 bg-[#404040] rounded-lg">
              <div className="justify-between  flex">
                <div className=" w-2/6 flex justify-center font-medium sm:font-normal text-sm sm:text-xl items-center">
                  Développeur full-stack
                </div>
                <div className=" w-3/6 flex justify-center space-x-4 items-center">
                  <div className="bg-[#F2B749] justify-center text-xs sm:text-base items-center flex w-[90px] sm:w-[120px] h-[35px] sm:h-[50px] rounded-lg">
                    A DISTANCE
                  </div>
                  <div className=" bg-[#F2B749] justify-center text-xs sm:text-base items-center flex w-[90px] sm:w-[120px] h-[35px] sm:h-[50px] rounded-lg">
                    TEMPS PLEIN
                  </div>
                </div>
                <div className=" w-1/6 flex justify-end items-center pr-2 sm:pr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    onClick={() => viewContent("div1")}
                    className="cursor-pointer"
                  >
                    <path
                      d="M16 2.32007C13.2311 2.32007 10.5243 3.14115 8.22202 4.67949C5.91973 6.21783 4.12531 8.40434 3.06569 10.9625C2.00606 13.5207 1.72881 16.3356 2.26901 19.0513C2.8092 21.7671 4.14257 24.2616 6.10051 26.2196C8.05844 28.1775 10.553 29.5109 13.2687 30.0511C15.9845 30.5913 18.7994 30.314 21.3576 29.2544C23.9157 28.1948 26.1022 26.4003 27.6406 24.0981C29.1789 21.7958 30 19.089 30 16.3201C30 12.607 28.525 9.04608 25.8995 6.42057C23.274 3.79506 19.713 2.32007 16 2.32007ZM17 8.32007V20.4701L22.607 14.8901L24 16.3201L16 24.3201L8 16.3201L9.427 14.8901L15 20.4701V8.32007H17Z"
                      fill="#7B7B7B"
                    />
                  </svg>
                </div>
              </div>
              {/* Content */}
              {content.div1 && (
                <div className="mt-4 text-white flex flex-col">
                  <p className="text-white text-xs sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, fugit perferendis sequi fugiat tempore aut
                    quibusdam alias animi harum veritatis ullam! Aut corrupti
                    odio minus ducimus, eligendi corporis doloribus blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore odio asperiores porro impedit voluptatum aliquam
                    velit enim explicabo nostrum laudantium, adipisci, culpa,
                    consectetur ea ut dignissimos sed iure quia vero.
                  </p>
                  <span>
                    <div className="mt-8 cursor-pointer flex w-[180px] gap-3 py-4 hover:flex hover:items-center hover:justify-center hover:gap-0 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
                      <div>Je postule</div>
                      <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                        <img src="/logo/frame.svg" alt="" />
                      </div>
                    </div>
                  </span>
                </div>
              )}
            </div>
            {/***** */}
            <div className="flex flex-col sm:w-[60%] text-white py-4 px-3 bg-[#404040] rounded-lg">
              <div className="justify-between  flex">
                <div className=" w-2/6 flex justify-center font-medium sm:font-normal text-sm sm:text-xl items-center">
                  Développeur full-stack
                </div>
                <div className=" w-3/6 flex justify-center space-x-4 items-center">
                  <div className="bg-[#F2B749] justify-center text-xs sm:text-base items-center flex w-[90px] sm:w-[120px] h-[35px] sm:h-[50px] rounded-lg">
                    A DISTANCE
                  </div>
                  <div className=" bg-[#F2B749] justify-center text-xs sm:text-base items-center flex w-[90px] sm:w-[120px] h-[35px] sm:h-[50px] rounded-lg">
                    TEMPS PLEIN
                  </div>
                </div>
                <div className=" w-1/6 flex justify-end items-center pr-2 sm:pr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    onClick={() => viewContent("div2")}
                    className="cursor-pointer"
                  >
                    <path
                      d="M16 2.32007C13.2311 2.32007 10.5243 3.14115 8.22202 4.67949C5.91973 6.21783 4.12531 8.40434 3.06569 10.9625C2.00606 13.5207 1.72881 16.3356 2.26901 19.0513C2.8092 21.7671 4.14257 24.2616 6.10051 26.2196C8.05844 28.1775 10.553 29.5109 13.2687 30.0511C15.9845 30.5913 18.7994 30.314 21.3576 29.2544C23.9157 28.1948 26.1022 26.4003 27.6406 24.0981C29.1789 21.7958 30 19.089 30 16.3201C30 12.607 28.525 9.04608 25.8995 6.42057C23.274 3.79506 19.713 2.32007 16 2.32007ZM17 8.32007V20.4701L22.607 14.8901L24 16.3201L16 24.3201L8 16.3201L9.427 14.8901L15 20.4701V8.32007H17Z"
                      fill="#7B7B7B"
                    />
                  </svg>
                </div>
              </div>
              {/* Content */}
              {content.div2 && (
                <div className="mt-4 text-white flex flex-col">
                  <p className="text-white text-xs sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, fugit perferendis sequi fugiat tempore aut
                    quibusdam alias animi harum veritatis ullam! Aut corrupti
                    odio minus ducimus, eligendi corporis doloribus blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore odio asperiores porro impedit voluptatum aliquam
                    velit enim explicabo nostrum laudantium, adipisci, culpa,
                    consectetur ea ut dignissimos sed iure quia vero.
                  </p>
                  <span>
                    <div className="mt-8 cursor-pointer flex w-[180px] gap-3 py-4 hover:flex hover:items-center hover:justify-center hover:gap-0 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
                      <div>Je postule</div>
                      <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                        <img src="/logo/frame.svg" alt="" />
                      </div>
                    </div>
                  </span>
                </div>
              )}
            </div>
            {/***** */}
            <div className="flex flex-col sm:w-[60%] text-white py-4 px-3 bg-[#404040] rounded-lg">
              <div className="justify-between  flex">
                <div className=" w-2/6 flex justify-center font-medium sm:font-normal text-sm sm:text-xl items-center">
                  Développeur full-stack
                </div>
                <div className=" w-3/6 flex justify-center space-x-4 items-center">
                  <div className="bg-[#F2B749] justify-center text-xs sm:text-base items-center flex w-[90px] sm:w-[120px] h-[35px] sm:h-[50px] rounded-lg">
                    A DISTANCE
                  </div>
                  <div className=" bg-[#F2B749] justify-center text-xs sm:text-base items-center flex w-[90px] sm:w-[120px] h-[35px] sm:h-[50px] rounded-lg">
                    TEMPS PLEIN
                  </div>
                </div>
                <div className=" w-1/6 flex justify-end items-center pr-2 sm:pr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    onClick={() => viewContent("div3")}
                    className="cursor-pointer"
                  >
                    <path
                      d="M16 2.32007C13.2311 2.32007 10.5243 3.14115 8.22202 4.67949C5.91973 6.21783 4.12531 8.40434 3.06569 10.9625C2.00606 13.5207 1.72881 16.3356 2.26901 19.0513C2.8092 21.7671 4.14257 24.2616 6.10051 26.2196C8.05844 28.1775 10.553 29.5109 13.2687 30.0511C15.9845 30.5913 18.7994 30.314 21.3576 29.2544C23.9157 28.1948 26.1022 26.4003 27.6406 24.0981C29.1789 21.7958 30 19.089 30 16.3201C30 12.607 28.525 9.04608 25.8995 6.42057C23.274 3.79506 19.713 2.32007 16 2.32007ZM17 8.32007V20.4701L22.607 14.8901L24 16.3201L16 24.3201L8 16.3201L9.427 14.8901L15 20.4701V8.32007H17Z"
                      fill="#7B7B7B"
                    />
                  </svg>
                </div>
              </div>
              {/* Content */}
              {content.div3 && (
                <div className="mt-4 text-white flex flex-col">
                  <p className="text-white text-xs sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, fugit perferendis sequi fugiat tempore aut
                    quibusdam alias animi harum veritatis ullam! Aut corrupti
                    odio minus ducimus, eligendi corporis doloribus blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore odio asperiores porro impedit voluptatum aliquam
                    velit enim explicabo nostrum laudantium, adipisci, culpa,
                    consectetur ea ut dignissimos sed iure quia vero.
                  </p>
                  <span>
                    <div className="mt-8 cursor-pointer flex w-[180px] gap-3 py-4 hover:flex hover:items-center hover:justify-center hover:gap-0 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
                      <div>Je postule</div>
                      <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                        <img src="/logo/frame.svg" alt="" />
                      </div>
                    </div>
                  </span>
                </div>
              )}
            </div>
            {/***** */}
            <div className="flex flex-col sm:w-[60%] text-white py-4 px-3 bg-[#404040] rounded-lg">
              <div className="justify-between  flex">
                <div className=" w-2/6 flex justify-center font-medium sm:font-normal text-sm sm:text-xl items-center">
                  Développeur full-stack
                </div>
                <div className=" w-3/6 flex justify-center space-x-4 items-center">
                  <div className="bg-[#F2B749] justify-center text-xs sm:text-base items-center flex w-[90px] sm:w-[120px] h-[35px] sm:h-[50px] rounded-lg">
                    A DISTANCE
                  </div>
                  <div className=" bg-[#F2B749] justify-center text-xs sm:text-base items-center flex w-[90px] sm:w-[120px] h-[35px] sm:h-[50px] rounded-lg">
                    TEMPS PLEIN
                  </div>
                </div>
                <div className=" w-1/6 flex justify-end items-center pr-2 sm:pr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    onClick={() => viewContent("div4")}
                    className="cursor-pointer"
                  >
                    <path
                      d="M16 2.32007C13.2311 2.32007 10.5243 3.14115 8.22202 4.67949C5.91973 6.21783 4.12531 8.40434 3.06569 10.9625C2.00606 13.5207 1.72881 16.3356 2.26901 19.0513C2.8092 21.7671 4.14257 24.2616 6.10051 26.2196C8.05844 28.1775 10.553 29.5109 13.2687 30.0511C15.9845 30.5913 18.7994 30.314 21.3576 29.2544C23.9157 28.1948 26.1022 26.4003 27.6406 24.0981C29.1789 21.7958 30 19.089 30 16.3201C30 12.607 28.525 9.04608 25.8995 6.42057C23.274 3.79506 19.713 2.32007 16 2.32007ZM17 8.32007V20.4701L22.607 14.8901L24 16.3201L16 24.3201L8 16.3201L9.427 14.8901L15 20.4701V8.32007H17Z"
                      fill="#7B7B7B"
                    />
                  </svg>
                </div>
              </div>
              {/* Content */}
              {content.div4 && (
                <div className="mt-4 text-white flex flex-col">
                  <p className="text-white text-xs sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, fugit perferendis sequi fugiat tempore aut
                    quibusdam alias animi harum veritatis ullam! Aut corrupti
                    odio minus ducimus, eligendi corporis doloribus blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore odio asperiores porro impedit voluptatum aliquam
                    velit enim explicabo nostrum laudantium, adipisci, culpa,
                    consectetur ea ut dignissimos sed iure quia vero.
                  </p>
                  <span>
                    <div className="mt-8 cursor-pointer flex w-[180px] gap-3 py-4 hover:flex hover:items-center hover:justify-center hover:gap-0 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
                      <div>Je postule</div>
                      <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                        <img src="/logo/frame.svg" alt="" />
                      </div>
                    </div>
                  </span>
                </div>
              )}
            </div>
            {/***** */}
          </div>
        </div>
      </div>
      {/* Message  */}
      <div className="flex text-black mt-32 items-center text-center justify-center w-full flex-col pb-16 sm:pb-44 font-medium sm:font-base sm:text-4xl leading-6 sm:leading-[50px]">
        <span>Vous ne voyez pas un rôle qui vous convient</span>
        <span className="underline underline-offset-6 text-[#E5964D]">
          Envoyez nous votre cv de toute façon !
        </span>
        <span>Nous aimerions avoir de vos nouvelles</span>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
