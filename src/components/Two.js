import React, { useRef, useEffect, useState } from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";
import { TweenMax, Power1 } from "gsap";
import { motion, useAnimation } from "framer-motion";

const styles = {
  container: {
    background: `linear-gradient(0deg, #0000009a 0%, #0000009a 100%), url(https://s3-alpha-sig.figma.com/img/e10b/b6a8/a07526a073011cd7adaf9388164bdfe7?Expires=1694995200&Signature=QjfvSAuvvmR8KdF6pSwpfGECH7tPHgsKL3ELFLqHk3gy6TZZIa8kRAqmPCG3De0wTumHGQ7XtkK-i0B2vZYbvcuzQeUyfMHgofUGRm6mJJ6qek6GT1Pz3Z4J9ijpvyB0rZh2AtrKrgi0H~BzSbv1lXfMIf7B7PJEp-A82ShQolUm012jwISHdRQ4jkl00Lbc~LhKrwwNaDUVPQEf2QRYqKLGStRF06eFJnPSk3qA2-VV~XXu7fUG87q~nYJkDydTq3S4EM2qiVkIlPJxG3ZmQlF0qDMt3CQKVx-cR~upWs-h76Hksr9HTYILD~2d2daFdd99IlTzFQBRiQLjp1nspA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
};

export default function Two() {
  const rebondRef = useRef(null);
  const [activeElement, setActiveElement] = useState("A");
  const [elementWidht, setElementWidht] = useState(30);

  useEffect(() => {
    TweenMax.to(rebondRef.current, 0.5, {
      y: -20,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  //animation des div A , B , C et D
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [showD, setShowD] = useState(false);

  const controlsA = useAnimation();
  const controlsB = useAnimation();
  const controlsC = useAnimation();
  const controlsD = useAnimation();

  useEffect(() => {
    const animationInterval = setInterval(() => {
      animateDivA();
    }, 8000); // Utilisation d'une transition de 8 secondes pour A

    return () => {
      clearInterval(animationInterval);
    };
  }, [showA, showB, showC, showD, controlsA, controlsB, controlsC, controlsD]);

  const animateDivA = async () => {
    await controlsA.start({
      width: "100%",
      transition: { duration: 4, ease: "easeInOut" },
    });
    await controlsA.start({ width: "0%", transition: { duration: 0 } });
    setShowA(false);
    setShowB(true);
    animateDivB();
  };

  const animateDivB = async () => {
    await controlsB.start({
      width: "100%",
      transition: { duration: 4, ease: "easeInOut" },
    });
    await controlsB.start({ width: "0%", transition: { duration: 0 } });
    setShowB(false);
    setShowC(true);
    animateDivC();
  };

  const animateDivC = async () => {
    await controlsC.start({
      width: "100%",
      transition: { duration: 4, ease: "easeInOut" },
    });
    await controlsC.start({ width: "0%", transition: { duration: 0 } });
    setShowC(false);
    setShowD(true);
    animateDivD();
  };

  const animateDivD = async () => {
    await controlsD.start({
      width: "100%",
      transition: { duration: 4, ease: "easeInOut" },
    });
    await controlsD.start({ width: "0%", transition: { duration: 0 } });
    setShowD(false);
    setShowA(true);
  };

  return (
    <div className="bg-white text-black">
      {/* first Section */}
      <div className="pt-28 sm:pt-24 flex flex-col">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800"
          className="w-full px-8 sm:px-0 pl-0 sm:pl-40 xl:font-semibold font-bold text-4xl md:text-6xl  sm:text-5xl xl:text-7xl xl:leading-[85px]"
        >
          Tout commence
          <br />
          Par <br />
          compétences
        </div>
        <div className="flex w-full md:mt-6 mt-16">
          <div className="w-1/2 "></div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2500"
            className="w-full md:px-0 px-8 md:pl-0  sm:px-24 md:w-1/2 font-medium sm:font-normal text-sm md:text-4xl md:pr-32 text-black"
          >
            Agence curieuse, toujours en train de s'adapter et évoluant avec le
            temps, et c'est ce qui fait nos créations vraiment spécial.
          </div>
        </div>
        <div className="flex my-28 gap-3 items-center justify-center">
          <span
            ref={rebondRef}
            className="bg-[#D9D9D9] border border-[#9a9191] flex items-center justify-center rounded-full h-[35px] w-[35px] sm:w-[45px] sm:h-[45px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11.4904 2.69262L11.3932 20.1924M11.3932 20.1924L19.3118 12.3612M11.3932 20.1924L3.56206 12.2738"
                stroke="#666666"
                stroke-width="2.33333"
              />
            </svg>
          </span>
          <span className="text-sm">Explorer</span>
        </div>
      </div>
      {/* Second section */}
      <div>
        <div className="w-full h-[50vh] sm:h-[85vh] ">
          <img
            src="/images/mockup.jpg"
            alt=""
            className="max-w-full h-full ml-auto mr-auto block bg-white"
          />
        </div>
      </div>
      {/** Three section */}
      <div className="bg-black h-[100vh] sm:h-[140vh]">
        <div className="flex justify-between sm:px-12 px-3 xl:px-28 py-12">
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs font-thin sm:text-sm text-white sm:pl-2">
              CLIENTELE
            </span>
            <span className="sm:text-6xl text-white mt-8 text-2xl font-medium">
              +50
            </span>
          </div>
          <div className="flex flex-col pl-5 sm:pl-0 justify-center items-center">
            <span className="text-xs sm:text-sm font-thin  text-white sm:pl-4">
              PROJETS
            </span>
            <span className="sm:text-6xl text-2xl text-white mt-8 font-medium ">
              +150
            </span>
          </div>
          <div className="flex flex-col font-thin  justify-center items-center">
            <span className="text-xs sm:text-sm text-white">
              CLIENTS STAISFAITS
            </span>
            <span className="sm:text-6xl text-2xl text-white mt-8 font-medium">
              100%
            </span>
          </div>
        </div>
        <div className="flex mt-44 text-white flex-col justify-center items-center">
          <div className="sm:text-xl">Nous sommes expert en</div>
          <div className="text-5xl lg:text-8xl mt-8 font-semibold text-center">
            Communication
            <br />
            digitale
          </div>
          <div className="flex items-center justify-center mt-10 sm:mt-20">
            inclus
          </div>
          <div className="flex gap-10 sm:gap-[100px] mt-8 sm:mt-16 justify-between">
            <div>
              <ul className="flex flex-col gap-y-3">
                <li className="font-medium sm:text-xl">identitité de marque</li>
                <li className="font-medium sm:text-xl">identitité de marque</li>
                <li className="font-medium sm:text-xl">identitité de marque</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-y-3">
                <li className="font-medium sm:text-xl">identitité de marque</li>
                <li className="font-medium sm:text-xl">identitité de marque</li>
                <li className="font-medium sm:text-xl">identitité de marque</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Four Section */}
      <div className="sm:h-[120vh] h-[110vh] mt-20">
        <div className="flex sm:flex-row flex-col">
          <div className="sm:w-1/2 flex flex-col">
            <span className="px-8 text-black xl:font-semibold font-bold text-4xl md:text-6xl  sm:text-5xl xl:text-7xl xl:leading-[85px]">
              Web & <br />
              Développement
            </span>
            <span className="mt-6 px-8 sm:font-medium font-normal text-sm md:text-xl  text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              voluptas magnam beatae doloribus architecto nisi odit consequuntur
              sit error rerum, provident eius maxime non, porro natus fugiat
              inventore voluptatem a.
            </span>
          </div>
          <div className="sm:w-1/2 px-8 py-8 sm:py-0 sm:px-0 h-[431px]">
            {showA ? (
              <img
                src="https://s3-alpha-sig.figma.com/img/06eb/17d3/bd41d8efd0be9dba35553e67536d6df7?Expires=1694995200&Signature=Nj8BqiNtY1x-UaCAAcECyuN6D6WV7VKm8EuP0HrnZymX0s2-MUBVeX1L-tuvfo4VQwuIKv8kh7dkkokocPVQ2GPBOMRM4aXdSPIXIyg4z3AbydvyL-3JsbTKgsq59jNjkJ1TND3pV4dlKebqb1EaO6Hh2-j7tDQo7fg54~LtGyWKywgoHYZH-ohxOIPTVa2zqJirFdlJ-AzmMe5IZUevYGy5wN4TlbycedVFC-IVtq-y9lC9nigUXNo31jLcq2fYbRMdfR7ZLdQaNUQc~ckDY~KWXu98JzZa5ecfeG0X2kqSbUK8FyPpKe0xyq-jnK-UtpSOS3B2awh-PjYmQtc5mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className=" max-w-full h-full rounded-3xl  ml-auto mr-auto block"
              />
            ) : null}
            {showB ? (
              <img
                src="https://images.unsplash.com/photo-1693648794747-e21e54f9e1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" max-w-full h-full rounded-3xl  ml-auto mr-auto block"
              />
            ) : null}
            {showC ? (
              <img
                src="https://images.unsplash.com/photo-1694032856871-82bbf1cfd4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" max-w-full h-full rounded-3xl  ml-auto mr-auto block"
              />
            ) : null}
            {showD ? (
              <img
                src="https://images.unsplash.com/photo-1694071132037-5ff85e0da51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" max-w-full h-full rounded-3xl  ml-auto mr-auto block"
              />
            ) : null}
          </div>
        </div>
        <div className="flex mt-6 sm:mt-20 gap-6 px-8 sm:gap-12 justify-evenly">
          <div className="w-1/4 flex flex-col ">
            <span className="font-medium sm:text-base text-xs">01</span>
            <p className="mt-2 font-medium sm:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis cupiditate consectetur
            </p>
            <div className="border-[#e3e2e2] mt-2 bg-[#e3e2e2] border w-full rounded-3xl">
              <motion.div
                className="animated-image border-black  rounded-3xl border-2"
                initial={{ width: "0%" }}
                animate={controlsA}
              ></motion.div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <span className="font-medium sm:text-base text-xs">02</span>
            <p className="mt-2 font-medium sm:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis cupiditate consectetur
            </p>
            <div className="border-[#e3e2e2] mt-2 bg-[#e3e2e2] border w-full rounded-3xl">
              <motion.div
                className="animated-image border-black  rounded-3xl border-2"
                initial={{ width: "0%" }}
                animate={controlsB}
              ></motion.div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <span className="font-medium sm:text-base text-xs">03</span>
            <p className="mt-2 font-medium sm:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis cupiditate consectetur
            </p>
            <div className="border-[#e3e2e2] mt-2 bg-[#e3e2e2] border w-full rounded-3xl">
              <motion.div
                className="animated-image border-black  rounded-3xl border-2"
                initial={{ width: "0%" }}
                animate={controlsC}
              ></motion.div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <span className="font-medium sm:text-base text-xs">04</span>
            <p className="mt-2 font-medium sm:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis cupiditate consectetur
            </p>
            <div className="border-[#e3e2e2] mt-2 bg-[#e3e2e2] border w-full rounded-3xl">
              <motion.div
                className="animated-image border-black  rounded-3xl border-2"
                initial={{ width: "0%" }}
                animate={controlsD}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Formation */}
      <div
        className="w-full h-[100vh] first-letter:mt-4"
        style={styles.container}
      >
        <div className="flex justify-center items-center">
          <span className="xl:font-semibold font-bold text-4xl md:text-6xl  text-[#F99B40] sm:text-5xl xl:text-8xl xl:leading-[85px] lg:pb-20 xl:pt-16 pt-16">
            Formation
          </span>
        </div>
        <div className="w-full flex pt-44 2xl:pt-12">
          <div className="w-1/4 flex border-r  flex-col justify-center items-center h-[233px] p-1 md:p-7">
            <span className="md:text-2xl text-[#F99B40]  text-xs text-center md:text-start font-semibold">
              CONCEPTION WEB
            </span>
            <p className="mt-8 text-white text-xs font-thin md:text-base lg:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col border-r  justify-center items-center h-[233px] p-1 md:p-7">
            <span className="md:text-2xl text-xs text-[#F99B40] text-center md:text-start font-semibold">
              CONCEPTION WEB
            </span>
            <p className="mt-8 text-white text-xs  font-thin md:text-base lg:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col border-r justify-center items-center h-[233px] p-1 md:p-7">
            <span className="md:text-2xl text-xs text-[#F99B40] text-center md:text-start font-semibold">
              CONCEPTION WEB
            </span>
            <p className="mt-8 text-white text-xs font-thin  md:text-base lg:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col justify-center  items-center h-[233px] p-1 md:p-7">
            <span className="md:text-2xl text-xs text-center text-[#F99B40] md:text-start font-semibold">
              CONCEPTION WEB
            </span>
            <p className="mt-8 text-white text-xs md:text-base font-thin lg:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center pt-24 md:pt-56 lg:pt-24 xl:pt-24 2xl:pt-24  items-center">
          <span className="group">
            <div className="mt-5 flex gap-5 hover:flex hover:justify-center cursor-pointer hover:items-center hover:gap-0 py-4 group-hover:bg-white   transition-all px-2   group-hover:text-black rounded-l-full rounded-r-full hover:rounded-l-full hover:rounded-r-full">
              <div className="text-white group-hover:text-black">Discutons</div>
              <div className="bg-white  rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                <img src="/icon/arrow_black.svg" alt="" />
              </div>
            </div>
          </span>
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full h-[70vh] bg-gradient-to-r from-black  sm:h-[100vh] flex flex-col items-start justify-start sm:mt-44 mt-20 px-8 sm:px-0 sm:pl-20">
        <span className="xl:font-semibold font-bold text-4xl md:text-6xl  text-[#F99B40] sm:text-5xl xl:text-8xl xl:leading-[85px] pt-12">
          Event pro
        </span>
        <p className="flex justify-start items-start text-start mt-8 sm:mt-20 sm:w-[450px] text-white text-sm sm:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          provident vero suscipit perspiciatis nesciunt nam? Repellendus dolorum
          architecto eius minus blanditiis exercitationem, laudantium qui ullam
          cum veniam, id magnam similique?
        </p>
        <ul className="flex mt-8 sm:mt-20 flex-col xl:flex-row">
          <li>
            <div className="flex space-x-2">
              <div className="sm:w-[10px] sm:h-[10px] h-[7px] w-[7px] mt-2 rounded-[100px] bg-white"></div>
              <span className="text-white">Event Corporate</span>
            </div>
            <span className="text-xs mt-2 flex items-start justify-start sm:w-96 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores laudantium accusamus dolor itaque placeat ab
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <div className="sm:w-[10px] sm:h-[10px] h-[7px] w-[7px] mt-2 rounded-[100px] bg-white"></div>
              <span className="text-white">Event Corporate</span>
            </div>
            <span className="text-xs mt-2 flex items-start justify-start sm:w-96 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores laudantium accusamus dolor itaque placeat ab
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <div className="sm:w-[10px] sm:h-[10px] h-[7px] w-[7px] mt-2 rounded-[100px] bg-white"></div>
              <span className="text-white">Event Corporate</span>
            </div>
            <span className="text-xs mt-2 flex items-start justify-start sm:w-96 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores laudantium accusamus dolor itaque placeat ab
            </span>
          </li>
        </ul>
      </div>
      {/* Pub */}
      <Prefooter />
      <Footer />
    </div>
  );
}
