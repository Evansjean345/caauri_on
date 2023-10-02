import React, { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import "../style.css";
import Prefooter from "./Prefooter";
import "../style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function SectionHome() {
  //data
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [section, setSection] = useState("");
  const [pub, setPub] = useState("");
  const [portfolio1, setPortfolio1] = useState("");
  const [portfolio2, setPortfolio2] = useState("");

  useEffect(() => {
    axios
      .get("https://caauri-api.cyclic.cloud/home/65106a94b5ae36e57d7e64dd")
      .then((res) => {
        setTitle(res.data.title);
        setSubtitle(res.data.subtitle);
        setSection(res.data.section);
        setPub(res.data.pub);
        setPortfolio1(res.data.portfolio.title);
        setPortfolio2(res.data.portfolio.subtitle);
      })
      .catch((err) => console.log("error", err));

    console.log(title);
  }, []);

  const formattedTitle = title.replace(/\n/g, "<br>");
  const formattedPortfolioTitle = portfolio1.replace(/\n/g, "<br>");
  const formattedPortfolioSubtitle = portfolio2.replace(/\n/g, "<br>");

  //remove background version mobile

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Utilisez useEffect pour mettre à jour la largeur de l'écran lorsque la fenêtre est redimensionnée
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Créez un objet style en fonction de la largeur de l'écran
  const style = {
    background: 'url("/images/flou_home.gif")',
    backgroundSize: "1290px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundClip: "padding-box",
  };

  // Utilisez windowWidth pour conditionner le style en fonction de la largeur de l'écran
  if (windowWidth <= 934) {
    style.background = "none"; // Supprimer l'arrière-plan lorsque la largeur d'écran est inférieure ou égale à 768px
  }

  //animation Mobile Page d'Acceuil
  const elements = useRef([]);

  useEffect(() => {
    gsap.set(elements.current, { opacity: 0 });

    const timeline = gsap.timeline({ repeat: -1 });

    elements.current.forEach((element, index) => {
      timeline
        .to(element, { opacity: 1, duration: 4 })
        .to(element, { opacity: 0, duration: 2 });
    });
  }, []);

  // scroll section animation

  const [tilt, setTilt] = useState(0);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const maxTilt = 20;
      const minTilt = -20;
      const tiltRange = maxTilt - minTilt;

      const newTilt = (
        (mouseX / window.innerWidth) * tiltRange +
        minTilt
      ).toFixed(2);

      setTilt(newTilt);
    };

    const image1 = imageRef1.current;
    const image2 = imageRef2.current;
    const image3 = imageRef3.current;
    const image4 = imageRef4.current;

    // Ajoutez l'événement de la souris pour écouter le mouvement
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Nettoyez l'événement lorsque le composant est démonté
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    //image d'inclinaison
    const image1 = imageRef1.current;
    const image2 = imageRef2.current;
    const image3 = imageRef3.current;
    const image4 = imageRef4.current;

    // Animez l'image en fonction de l'inclinaison
    gsap.to(image1, { rotation: tilt, duration: 0.3, ease: "none" });
    gsap.to(image2, { rotation: tilt, duration: 0.3, ease: "none" });
    gsap.to(image3, { rotation: tilt, duration: 0.3, ease: "none" });
    gsap.to(image4, { rotation: tilt, duration: 0.3, ease: "none" });
  }, [tilt]);

  // animation Partie Porfolio
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);
  const image7Ref = useRef(null);
  const image8Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const image3 = image3Ref.current;
    const image4 = image4Ref.current;
    const image5 = image5Ref.current;
    const image6 = image6Ref.current;
    const image7 = image7Ref.current;
    const image8 = image8Ref.current;

    //Timeline pour gerer les animations en sequence

    const animateImages = () => {
      // Animation pour déplacer les images 1 et 2
      gsap.fromTo(
        [image1, image2],
        {
          y: 0,
          opacity: 0.1,
        },
        {
          y: -100 * 6.1,
          opacity: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    };

    const animeImagesTwo = () => {
      //animation des images 5 et 6
      gsap.fromTo(
        [image5, image6],
        {
          y: 0,
          opacity: 0.1,
        },
        {
          y: -100 * 5.1,
          opacity: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      //animation des images 7 et 8
      gsap.fromTo(
        [image7, image8],
        {
          y: 0,
          opacity: 0.1,
        },
        {
          y: -100 * 2.5,
          opacity: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    };

    // Appelez la fonction d'animation
    animateImages();
    animeImagesTwo();
  }, []);

  return (
    <div>
      <div className="bg-white text-black">
        {/* Acceuil */}
        <div
          className={"flex w-full  flex-shrink relative pt-24 lg:pt-28"}
          id="caauri_home_section"
          style={style}
        >
          <div className="caauri_div_home w-[60%]  flex flex-col justify-center pl-6 lg:pl-6 md:pl-12  2xl:pl-40">
            <p
              dangerouslySetInnerHTML={{ __html: formattedTitle }}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="xl:font-semibold leading-[41px] font-bold text-[30.5px] md:text-6xl  sm:text-6xl xl:text-7xl xl:leading-[85px]"
            />{" "}
            {/* Remove div */}
            <div className="remove_div">
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1600"
                className="mt-8 text-xs sm:text-[24px] sm:leading-[35px]"
              >
                {subtitle}
              </p>
              <span>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1700"
                  className="mt-8 sm:font-medium   cursor-pointer flex w-[180px] gap-5 py-4 hover:flex hover:items-center hover:justify-center hover:gap-0 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full"
                >
                  <div>Caaurimuniquez</div>
                  <div className="bg-black rounded-b-full w-6 sm:hover:mt-1 transition-all flex items-center justify-center rounded-l-full">
                    <img src="/logo/frame.svg" alt="" />
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div
            className="caauri_div_home w-[40%] h-[280px] sm:h-full  flex justify-center  relative"
            id="caauri_home_animation"
          >
            <img
              src="/logo/new_logo.png"
              alt=""
              id="logo_wide"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1900"
              className="md:h-[500px] h-[400px] w-[300px] hidden sm:block"
            />
            <img
              src="/logo/caauri_white.png"
              alt=""
              className="anime_text 2xl:h-[400px] sm:h-[300px] h-[100px]   sm:w-[200px] absolute top-10 md:top-[235px]"
              ref={(el) => elements.current.push(el)}
            />
            <span
              className="anime_text text-white text-center text-2xl sm:text-6xl font-bold absolute top-16 block sm:top-[295px]"
              ref={(el) => elements.current.push(el)}
            >
              LANCE TON
              <br />
              CAAURI
            </span>
            <span
              className="anime_text text-white text-center text-2xl sm:text-6xl font-bold absolute top-16 block sm:top-[295px]"
              ref={(el) => elements.current.push(el)}
            >
              LANCE TON
              <br />
              BUSINESS
            </span>
            <span
              className="anime_text text-white text-center text-2xl sm:text-6xl font-bold absolute top-16 block sm:top-[295px]"
              ref={(el) => elements.current.push(el)}
            >
              LANCE TON
              <br />
              AFFAIRE
            </span>
          </div>
          {/* Visible_div */}
          <div className="visible_div hidden  px-8">
            <p className="mt-8 text-[16px] sm:leading-[35px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aspernatur consequatur blanditiis accusamus fugit iste
            </p>
            <span className="w-full flex  items-center justify-center">
              <div className="mt-8 sm:font-medium text-white flex w-[180px] gap-0 py-4 items-center justify-center bg-black  transition-all px-2    rounded-l-full rounded-r-full">
                <div>Caaurimuniquez</div>
                <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                  <img src="/logo/frame.svg" alt="" />
                </div>
              </div>
            </span>
          </div>
        </div>
        {/* Home Section */}
        <div className="w-full flex items-center justify-center flex-col px-2 sm:px-12  2xl:px-[104px] mt-24">
          <div className="flex  rounded-t-3xl" id="home_sections_items">
            <div className="items_div cursor-pointer  group h-[686px] w-[350px] transition-all  relative rounded-t-3xl overflow-hidden">
              <div className="flex flex-col justify-center rounded-t-3xl transition-all group-hover:bg-[#DFD4C0] pt-12 h-full items-center space-y-12">
                <div className=" md:w-[200px] w-[236px]  xl:w-[236px] h-[48px] bg-black transition-all group-hover:bg-[#DFD4C0] group-hover:border-2 group-hover:border-black group-hover:text-black py-8 text-center group-hover:mt-32 text-white flex justify-center items-center rounded-full">
                  Communication
                  <br />
                  Digitale
                </div>
                <div className="w-[236px] hidden transition-all group-hover:block text-center">
                  {section && section.p1}
                </div>
                <div className="flex-col absolute space-y-1 transition-all bottom-32 left-20 z-10 hidden group-hover:flex">
                  <div className="w-[70px] shadow-2xl flex items-center justify-center p-1 h-[70px] bg-white rounded-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                    >
                      <path
                        d="M2 23C2 34.0275 10.9725 43 22 43C33.0275 43 42 34.0275 42 23C42 11.9725 33.0275 3 22 3C10.9725 3 2 11.9725 2 23ZM22 4.25C32.3387 4.25 40.75 12.6613 40.75 23C40.75 33.3387 32.3387 41.75 22 41.75C11.6613 41.75 3.25 33.3387 3.25 23C3.25 12.6613 11.6613 4.25 22 4.25Z"
                        fill="#666666"
                      />
                      <path
                        d="M22 39.25C30.96 39.25 38.25 31.96 38.25 23C38.25 14.04 30.96 6.75 22 6.75C13.04 6.75 5.75 14.04 5.75 23C5.75 31.96 13.04 39.25 22 39.25ZM20.75 8.06375V9.97125C20.75 10.137 20.8158 10.296 20.9331 10.4132C21.0503 10.5304 21.2092 10.5963 21.375 10.5963C21.5408 10.5963 21.6997 10.5304 21.8169 10.4132C21.9342 10.296 22 10.137 22 9.97125V8C29.8487 8 36.2975 14.0625 36.9362 21.75H35.0275C34.8617 21.75 34.7028 21.8158 34.5856 21.9331C34.4683 22.0503 34.4025 22.2092 34.4025 22.375C34.4025 22.5408 34.4683 22.6997 34.5856 22.8169C34.7028 22.9342 34.8617 23 35.0275 23H37C37 31.2712 30.2712 38 22 38V36.0288C22 35.863 21.9342 35.704 21.8169 35.5868C21.6997 35.4696 21.5408 35.4038 21.375 35.4038C21.2092 35.4038 21.0503 35.4696 20.9331 35.5868C20.8158 35.704 20.75 35.863 20.75 36.0288V37.9362C13.0637 37.2975 7 30.85 7 23H8.9725C9.13826 23 9.29723 22.9342 9.41444 22.8169C9.53165 22.6997 9.5975 22.5408 9.5975 22.375C9.5975 22.2092 9.53165 22.0503 9.41444 21.9331C9.29723 21.8158 9.13826 21.75 8.9725 21.75H7.06375C7.6675 14.4763 13.4763 8.6675 20.75 8.06375Z"
                        fill="#666666"
                      />
                      <path
                        d="M13.7353 31.8011C13.8663 31.8011 13.994 31.76 14.1003 31.6836L21.1178 26.6386C21.4028 26.7086 21.6966 26.7548 22.0028 26.7548C24.0703 26.7548 25.7528 25.0723 25.7528 23.0048C25.7498 22.7153 25.7133 22.4271 25.6441 22.1461L30.7765 15.0061C30.8622 14.8855 30.9024 14.7385 30.8901 14.5911C30.8778 14.4437 30.8137 14.3055 30.7092 14.2008C30.6047 14.0962 30.4665 14.0319 30.3191 14.0193C30.1718 14.0068 30.0247 14.0468 29.904 14.1323L22.6816 19.3236C22.4575 19.2797 22.2299 19.2567 22.0015 19.2548C19.9341 19.2548 18.2516 20.9373 18.2516 23.0048C18.2516 23.2486 18.2791 23.4873 18.3241 23.7186L13.2278 30.8111C13.1611 30.9045 13.1214 31.0146 13.113 31.1291C13.1046 31.2437 13.1279 31.3583 13.1803 31.4605C13.2327 31.5627 13.3122 31.6485 13.41 31.7086C13.5079 31.7686 13.6205 31.8006 13.7353 31.8011ZM19.5028 23.0061C19.5028 21.6273 20.6241 20.5061 22.0028 20.5061C23.3816 20.5061 24.5028 21.6273 24.5028 23.0061C24.5028 24.3848 23.3816 25.5061 22.0028 25.5061C20.6241 25.5061 19.5028 24.3836 19.5028 23.0061ZM27.5328 17.3786L25.0491 20.8348C24.7806 20.4573 24.445 20.1323 24.0591 19.8761L27.5328 17.3786ZM18.8841 25.0836C19.1328 25.4561 19.4516 25.7748 19.8128 26.0373L16.4728 28.4386L18.8841 25.0836Z"
                        fill="#666666"
                      />
                    </svg>
                  </div>
                  <div className="w-[70px] shadow-2xl flex items-center justify-center p-1 h-[70px] bg-white rounded-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                    >
                      <path
                        d="M40.1284 3.47771L39.9774 3.3569C38.8812 2.39944 37.45 1.91579 35.9978 2.01204C34.5455 2.10829 33.1907 2.77658 32.2305 3.87034L19.7418 18.1409C19.6006 18.288 19.4906 18.462 19.4185 18.6527C19.3464 18.8434 19.3136 19.0467 19.3221 19.2503C19.3307 19.454 19.3804 19.6539 19.4682 19.8378C19.5561 20.0218 19.6803 20.186 19.8333 20.3207C19.9863 20.4554 20.165 20.5577 20.3587 20.6214C20.5523 20.6852 20.7568 20.709 20.9599 20.6916C21.163 20.6742 21.3605 20.6158 21.5405 20.5201C21.7204 20.4243 21.8791 20.293 22.007 20.1343L34.4654 5.86369C34.6788 5.61858 34.9387 5.41815 35.2299 5.27397C35.5212 5.12979 35.8381 5.04472 36.1624 5.02366C36.4867 5.0026 36.812 5.04597 37.1195 5.15127C37.4269 5.25657 37.7105 5.42172 37.9538 5.63718L38.0897 5.75799C38.3456 5.96546 38.5576 6.22192 38.7132 6.51234C38.8688 6.80276 38.9649 7.1213 38.9958 7.44932C39.0197 7.77398 38.9786 8.10015 38.8749 8.40873C38.7712 8.7173 38.6069 9.00207 38.3917 9.24635L23.0037 26.809L17.9901 22.4297C17.6895 22.1657 17.2965 22.0317 16.8973 22.0572C16.4981 22.0827 16.1254 22.2655 15.8608 22.5656L11.8741 27.0959C11.8355 27.149 11.8002 27.2045 11.7684 27.262C10.69 27.3098 9.63232 27.5752 8.65913 28.0424C7.68593 28.5095 6.81729 29.1687 6.10547 29.9802C4.96622 31.5641 4.32482 33.4515 4.26313 35.4016C4.21274 35.9692 4.21274 36.5403 4.26313 37.108C4.32371 37.478 4.32371 37.8554 4.26313 38.2255C4.00322 39.2872 3.39102 40.2295 2.5265 40.8984C2.33588 41.062 2.18909 41.2706 2.09943 41.5053C2.00978 41.74 1.98009 41.9933 2.01306 42.2424C2.04776 42.4927 2.14475 42.7304 2.29513 42.9336C2.44552 43.1367 2.6445 43.2989 2.87382 43.4052C4.76413 44.2915 6.82652 44.7503 8.91429 44.7492C10.5375 44.7898 12.15 44.4757 13.6393 43.8289C15.1286 43.1821 16.4588 42.218 17.537 41.0041C18.9801 39.2449 19.8215 37.0698 19.9381 34.7975C20.0821 34.7151 20.2142 34.6135 20.3308 34.4955L24.3175 29.9651L40.6418 11.2397C41.6002 10.141 42.0842 8.70742 41.988 7.25268C41.8917 5.79794 41.2231 4.44058 40.1284 3.47771ZM15.1964 39.0409C14.0589 40.2434 12.6054 41.1008 11.0028 41.5148C9.40014 41.9288 7.71326 41.8827 6.13567 41.3816C6.68854 40.6071 7.07894 39.7287 7.28336 38.7993C7.38574 38.1489 7.38574 37.4865 7.28336 36.8362C7.25132 36.419 7.25132 36 7.28336 35.5828C7.31017 34.271 7.71956 32.9955 8.46125 31.9132C9.07958 31.3179 9.81966 30.8638 10.6305 30.5822C11.4413 30.3007 12.3035 30.1983 13.1577 30.2823L16.9179 33.5592C17.0212 35.5339 16.4101 37.4798 15.1964 39.0409ZM19.0019 31.3846L15.136 27.9416L17.1444 25.6462L21.0103 29.044L19.0019 31.3846Z"
                        fill="#666666"
                      />
                    </svg>
                  </div>
                  <div className="w-[70px] shadow-2xl flex items-center justify-center p-1 h-[70px] bg-white rounded-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M28.9846 4.66857C28.9847 4.08311 28.7523 3.52156 28.3384 3.10745C27.9246 2.69335 27.3632 2.46062 26.7777 2.46045C26.4878 2.46037 26.2007 2.51738 25.9329 2.62825C25.665 2.73911 25.4216 2.90164 25.2166 3.10657C24.8025 3.52044 24.5697 4.08186 24.5696 4.66732C24.5696 5.88607 26.7771 10.0011 26.7771 10.0011C26.7771 10.0011 28.9846 5.88732 28.9846 4.66857ZM25.7221 4.66857C25.7171 4.52706 25.7407 4.386 25.7914 4.25379C25.8421 4.12158 25.9189 4.00094 26.0173 3.89905C26.1156 3.79715 26.2334 3.7161 26.3637 3.66071C26.4941 3.60532 26.6342 3.57673 26.7758 3.57665C26.9174 3.57656 27.0576 3.60498 27.1879 3.66022C27.3183 3.71545 27.4363 3.79637 27.5347 3.89815C27.6332 3.99992 27.7101 4.12048 27.761 4.25262C27.8119 4.38477 27.8356 4.5258 27.8308 4.66732C27.8216 4.94069 27.7065 5.19977 27.5099 5.38994C27.3133 5.5801 27.0506 5.68648 26.777 5.68665C26.5035 5.68681 26.2406 5.58074 26.0438 5.3908C25.847 5.20087 25.7316 4.94192 25.7221 4.66857ZM31.6008 23.1186C30.9008 23.1186 30.2296 23.1773 29.6133 23.2723L13.8746 17.4698C14.1246 17.2448 14.2646 16.9948 14.2646 16.7323C14.2614 16.5939 14.2235 16.4586 14.1546 16.3386L24.6671 13.5411C25.2421 13.7123 25.9458 13.8161 26.7246 13.8161C28.6246 13.8161 30.1621 13.2111 30.1621 12.4636C30.1621 11.7136 28.6246 11.1098 26.7246 11.1098C24.8246 11.1098 23.2871 11.7161 23.2871 12.4636C23.2871 12.5511 23.3121 12.6348 23.3546 12.7161L12.3696 15.2498C11.4485 14.99 10.4953 14.8625 9.53832 14.8711C6.92957 14.8711 4.81332 15.7048 4.81332 16.7336C4.81332 17.7623 6.92957 18.5961 9.53832 18.5961C10.2558 18.5961 10.9258 18.5273 11.5358 18.4148L26.5233 24.4973C26.2858 24.7373 26.1408 24.9973 26.1408 25.2761C26.1408 25.5136 26.2608 25.7311 26.4358 25.9423L10.8683 31.7686C10.6708 31.7623 10.4733 31.7561 10.2721 31.7561C6.22207 31.7561 2.93457 33.0511 2.93457 34.6436C2.93457 36.2398 6.22207 37.5348 10.2721 37.5348C14.3221 37.5348 17.6096 36.2423 17.6096 34.6448C17.6096 34.3698 17.5058 34.1048 17.3221 33.8536L30.1546 27.3361C30.6171 27.3861 31.0958 27.4173 31.5983 27.4173C34.6146 27.4173 37.0608 26.4548 37.0608 25.2636C37.0608 24.0836 34.6146 23.1186 31.5983 23.1186H31.6008Z"
                        fill="#666666"
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src="/images/phone.png"
                  alt=""
                  className="w-[350px] h-[544px] group-hover:translate-x-[120px] group-hover:translate-y-[30px] transition-all"
                />
              </div>
            </div>
            <div className="items_div cursor-pointer group h-[686px] w-[350px] transition-all  relative rounded-t-3xl overflow-hidden">
              <div className="flex flex-col justify-center rounded-t-3xl transition-all group-hover:bg-[#DFD4C0] pt-12 h-full items-center space-y-12">
                <div className="md:w-[200px] w-[236px]  xl:w-[236px] h-[48px] bg-black transition-all group-hover:bg-[#DFD4C0] group-hover:border-2 group-hover:border-black group-hover:text-black py-8 text-center group-hover:mt-32 text-white flex justify-center items-center rounded-full">
                  Web &
                  <br />
                  Développement
                </div>
                <div className="w-[236px] hidden transition-all group-hover:block text-center">
                  {section && section.p2}
                </div>
                <div className="flex-col absolute space-y-1 left-8 transition-all bottom-8  z-10 hidden group-hover:flex">
                  <div className="w-[210px] flex shadow-2xl gap-x-4 items-center justify-center p-1 h-[58px] bg-white rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                    >
                      <path
                        d="M10.8043 26.8936H38.1957M24.5 26.8936V47M13.7391 22.1064V13.4894H11.4461C10.1431 13.4894 8.87717 13.9137 7.84776 14.6955C6.81836 15.4773 6.08401 16.5721 5.76043 17.8074L2 32.1596V32.6383H15.6957V35.5106C15.6957 38.383 15.6957 40.2979 17.163 43.1702C17.163 43.1702 18.6304 46.0426 20.587 46.0426M35.2609 22.1064V13.4894H37.5539C38.8569 13.4894 40.1228 13.9137 41.1522 14.6955C42.1816 15.4773 42.916 16.5721 43.2396 17.8074L47 32.1596V32.6383H33.3043V35.5106C33.3043 38.383 33.3043 40.2979 31.837 43.1702C31.837 43.1702 30.3696 46.0426 28.413 46.0426M13.4457 9.65957C13.4457 9.65957 10.3152 7.74468 10.3152 5.35106C10.3152 4.46332 10.6755 3.61194 11.3169 2.98421C11.9583 2.35648 12.8282 2.00383 13.7352 2.00383C14.6423 2.00383 15.5121 2.35648 16.1535 2.98421C16.7949 3.61194 17.1552 4.46332 17.1552 5.35106C17.1552 7.74468 14.0326 9.65957 14.0326 9.65957H13.4457ZM35.5543 9.65957C35.5543 9.65957 38.6848 7.74468 38.6848 5.35106C38.6848 4.46231 38.324 3.60995 37.6819 2.9815C37.0398 2.35306 36.1689 2 35.2609 2C33.3709 2 31.8448 3.50128 31.8448 5.35106C31.8448 7.74468 34.9674 9.65957 34.9674 9.65957H35.5543Z"
                        stroke="#666666"
                        stroke-width="3"
                      />
                    </svg>
                    <span className="text-lg">Planification</span>
                  </div>
                  {/* */}
                  <div className="w-[210px] flex  items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="21"
                      viewBox="0 0 8 21"
                      fill="none"
                    >
                      <path
                        d="M3.64645 20.3536C3.84171 20.5488 4.15829 20.5488 4.35355 20.3536L7.53553 17.1716C7.7308 16.9763 7.7308 16.6597 7.53553 16.4645C7.34027 16.2692 7.02369 16.2692 6.82843 16.4645L4 19.2929L1.17157 16.4645C0.976311 16.2692 0.659728 16.2692 0.464466 16.4645C0.269204 16.6597 0.269204 16.9763 0.464466 17.1716L3.64645 20.3536ZM3.5 0L3.5 20H4.5L4.5 0L3.5 0Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-[210px] flex shadow-2xl gap-x-4 items-center justify-center p-1 h-[58px] bg-white rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                      fill="none"
                    >
                      <path
                        d="M2.92007 46.0103L18.5835 30.373M38.3079 23.4193L33.6192 37.4619C33.5444 37.687 33.4163 37.8907 33.2458 38.0559C33.0752 38.221 32.8673 38.3426 32.6397 38.4104L3.89718 46.9391C3.63824 47.0159 3.36316 47.0203 3.10188 46.9518C2.8406 46.8834 2.60314 46.7447 2.41533 46.5509C2.22752 46.357 2.09656 46.1155 2.03671 45.8525C1.97685 45.5895 1.9904 45.3152 2.07586 45.0594L11.4089 17.1118C11.4758 16.9111 11.5852 16.7272 11.7295 16.5724C11.8739 16.4177 12.05 16.2957 12.2457 16.2149L25.5045 10.765C25.774 10.6538 26.0705 10.6248 26.3565 10.6817C26.6426 10.7385 26.9053 10.8787 27.1117 11.0844L37.951 21.9081C38.1454 22.1019 38.2818 22.3461 38.3449 22.613C38.4079 22.88 38.3951 23.1592 38.3079 23.4193Z"
                        stroke="#666666"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M38.5989 22.5542L45.5593 15.603C46.4821 14.6814 47.0005 13.4316 47.0005 12.1286C47.0005 10.8255 46.4821 9.57571 45.5593 8.65414L40.3414 3.44007C39.8843 2.98352 39.3416 2.62136 38.7442 2.37427C38.1469 2.12718 37.5066 2 36.86 2C36.2134 2 35.5731 2.12718 34.9758 2.37427C34.3784 2.62136 33.8357 2.98352 33.3786 3.44007L26.4181 10.3913M23.8043 25.1588C23.4614 24.8166 23.0543 24.5452 22.6063 24.3601C22.1583 24.1749 21.6781 24.0797 21.1933 24.0798C20.7084 24.0799 20.2283 24.1754 19.7804 24.3607C19.3325 24.5461 18.9255 24.8177 18.5828 25.16C18.24 25.5024 17.9681 25.9088 17.7827 26.3561C17.5972 26.8033 17.5018 27.2827 17.502 27.7667C17.5021 28.2508 17.5977 28.7301 17.7833 29.1772C17.969 29.6244 18.2411 30.0307 18.584 30.3729C19.2766 31.064 20.2158 31.4521 21.195 31.4519C22.1742 31.4517 23.1133 31.0631 23.8055 30.3717C24.4978 29.6802 24.8866 28.7426 24.8863 27.765C24.8861 26.7874 24.4969 25.8499 23.8043 25.1588Z"
                        stroke="#666666"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-lg">Design</span>
                  </div>
                  {/* */}
                  <div className="w-[210px] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="21"
                      viewBox="0 0 8 21"
                      fill="none"
                    >
                      <path
                        d="M3.64645 20.3536C3.84171 20.5488 4.15829 20.5488 4.35355 20.3536L7.53553 17.1716C7.7308 16.9763 7.7308 16.6597 7.53553 16.4645C7.34027 16.2692 7.02369 16.2692 6.82843 16.4645L4 19.2929L1.17157 16.4645C0.976311 16.2692 0.659728 16.2692 0.464466 16.4645C0.269204 16.6597 0.269204 16.9763 0.464466 17.1716L3.64645 20.3536ZM3.5 0L3.5 20H4.5L4.5 0L3.5 0Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-[210px] shadow-2xl flex gap-x-4 items-center justify-center p-1 h-[58px] bg-white rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="38"
                      viewBox="0 0 45 38"
                      fill="none"
                    >
                      <path
                        d="M27.5256 0.0615252C27.9685 0.17989 28.3463 0.469331 28.5759 0.866196C28.8055 1.26306 28.868 1.73485 28.7497 2.17782L19.5907 36.3658C19.4718 36.8091 19.1816 37.187 18.7841 37.4163C18.3866 37.6457 17.9142 37.7077 17.4709 37.5888C17.0277 37.4699 16.6498 37.1798 16.4204 36.7822C16.1911 36.3847 16.129 35.9123 16.248 35.4691L25.4093 1.28104C25.4682 1.06168 25.5696 0.856066 25.708 0.675936C25.8463 0.495806 26.0188 0.344692 26.2155 0.231229C26.4122 0.117765 26.6294 0.0441751 26.8546 0.0146613C27.0798 -0.0148526 27.3086 0.000288742 27.5279 0.05922L27.5256 0.0615252ZM32.7403 7.09739C32.8921 6.9283 33.0759 6.79082 33.2809 6.69281C33.486 6.5948 33.7084 6.53818 33.9353 6.52619C34.1623 6.5142 34.3894 6.54707 34.6036 6.62293C34.8179 6.69879 35.0151 6.81615 35.1839 6.96829L39.1883 10.5738C40.8873 12.0999 42.2935 13.3679 43.2618 14.5159C44.2761 15.7262 45 17.0241 45 18.6286C45 20.2308 44.2784 21.5287 43.2618 22.7367C42.2935 23.8871 40.8873 25.155 39.1883 26.6812L35.1839 30.2867C34.8431 30.5936 34.3942 30.7526 33.9362 30.7286C33.4781 30.7046 33.0483 30.4996 32.7414 30.1587C32.4345 29.8179 32.2755 29.3691 32.2995 28.911C32.3235 28.4529 32.5285 28.0232 32.8694 27.7162L36.7815 24.196C38.5981 22.5615 39.8222 21.4527 40.6153 20.5121C41.376 19.6061 41.542 19.0782 41.542 18.6263C41.542 18.1768 41.376 17.6489 40.6153 16.7429C39.8222 15.8 38.5981 14.6911 36.7815 13.059L32.8694 9.53873C32.7003 9.38685 32.5628 9.20313 32.4648 8.99807C32.3668 8.79301 32.3102 8.57063 32.2982 8.34367C32.2862 8.11671 32.3191 7.88961 32.3949 7.67536C32.4708 7.46112 32.5881 7.26624 32.7403 7.09739ZM12.1306 9.53873C12.2994 9.38675 12.4366 9.20302 12.5344 8.99803C12.6321 8.79303 12.6886 8.57079 12.7005 8.34398C12.7123 8.11717 12.6794 7.89025 12.6036 7.67616C12.5278 7.46207 12.4106 7.26501 12.2586 7.09623C12.1066 6.92746 11.9229 6.79027 11.7179 6.69249C11.5129 6.59472 11.2906 6.53828 11.0638 6.5264C10.837 6.51452 10.6101 6.54743 10.396 6.62325C10.1819 6.69907 9.98486 6.81631 9.81609 6.96829L5.81173 10.5738C4.11271 12.0999 2.70645 13.3679 1.73822 14.5159C0.723873 15.7262 0 17.0241 0 18.6286C0 20.2308 0.721567 21.5287 1.73822 22.7367C2.70645 23.8871 4.11271 25.155 5.81173 26.6812L9.81609 30.2867C10.1569 30.5936 10.6058 30.7526 11.0638 30.7286C11.5219 30.7046 11.9517 30.4996 12.2586 30.1587C12.5655 29.8179 12.7245 29.3691 12.7005 28.911C12.6765 28.4529 12.4715 28.0232 12.1306 27.7162L8.21849 24.196C6.4019 22.5615 5.17777 21.4527 4.38473 20.5121C3.62398 19.6061 3.45799 19.0782 3.45799 18.6263C3.45799 18.1768 3.62398 17.6489 4.38473 16.7429C5.17777 15.8 6.4019 14.6911 8.21849 13.059L12.1306 9.53873Z"
                        fill="#666666"
                      />
                    </svg>
                    <span className="text-lg">Intégration</span>
                  </div>
                  {/* */}
                  <div className="w-[210px] shadow-2xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="21"
                      viewBox="0 0 8 21"
                      fill="none"
                    >
                      <path
                        d="M3.64645 20.3536C3.84171 20.5488 4.15829 20.5488 4.35355 20.3536L7.53553 17.1716C7.7308 16.9763 7.7308 16.6597 7.53553 16.4645C7.34027 16.2692 7.02369 16.2692 6.82843 16.4645L4 19.2929L1.17157 16.4645C0.976311 16.2692 0.659728 16.2692 0.464466 16.4645C0.269204 16.6597 0.269204 16.9763 0.464466 17.1716L3.64645 20.3536ZM3.5 0L3.5 20H4.5L4.5 0L3.5 0Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-[210px] flex gap-x-4 items-center justify-center p-1 h-[58px] bg-white rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                    >
                      <path
                        d="M29.5312 32.3438C31.0846 32.3438 32.3438 31.0846 32.3438 29.5312C32.3438 27.9779 31.0846 26.7188 29.5312 26.7188C27.9779 26.7188 26.7188 27.9779 26.7188 29.5312C26.7188 31.0846 27.9779 32.3438 29.5312 32.3438Z"
                        fill="#666666"
                      />
                      <path
                        d="M9.84375 12.6562C11.3971 12.6562 12.6562 11.3971 12.6562 9.84375C12.6562 8.29045 11.3971 7.03125 9.84375 7.03125C8.29045 7.03125 7.03125 8.29045 7.03125 9.84375C7.03125 11.3971 8.29045 12.6562 9.84375 12.6562Z"
                        fill="#666666"
                      />
                      <path
                        d="M37.9688 43.5938C36.8562 43.5938 35.7687 43.2639 34.8437 42.6458C33.9186 42.0277 33.1977 41.1492 32.7719 40.1213C32.3462 39.0935 32.2348 37.9625 32.4518 36.8714C32.6689 35.7802 33.2046 34.7779 33.9913 33.9913C34.7779 33.2046 35.7802 32.6689 36.8714 32.4518C37.9625 32.2348 39.0935 32.3462 40.1213 32.7719C41.1492 33.1977 42.0277 33.9186 42.6458 34.8437C43.2639 35.7687 43.5938 36.8562 43.5938 37.9688C43.5893 39.4592 42.9952 40.8874 41.9413 41.9413C40.8874 42.9952 39.4592 43.5893 37.9688 43.5938ZM37.9688 35.1563C37.4125 35.1563 36.8687 35.3212 36.4062 35.6302C35.9437 35.9393 35.5832 36.3785 35.3703 36.8925C35.1575 37.4064 35.1018 37.9719 35.2103 38.5174C35.3188 39.063 35.5867 39.5642 35.98 39.9575C36.3734 40.3508 36.8745 40.6187 37.4201 40.7272C37.9656 40.8357 38.5311 40.78 39.0451 40.5672C39.559 40.3543 39.9982 39.9938 40.3073 39.5313C40.6163 39.0688 40.7813 38.525 40.7813 37.9688C40.779 37.2235 40.482 36.5094 39.955 35.9825C39.4281 35.4555 38.714 35.1585 37.9688 35.1563Z"
                        fill="#666666"
                      />
                      <path
                        d="M42.1875 22.4999C42.1723 17.2831 40.0932 12.2844 36.4044 8.59555C32.7155 4.90672 27.7168 2.82762 22.5 2.81241C19.1408 2.7645 15.833 3.64009 12.9375 5.34366L14.4844 7.73429C15.5836 7.20595 16.7102 6.73654 17.8594 6.32804C15.5347 10.9151 14.2389 15.9542 14.0625 21.0937H5.625C5.78257 18.7717 6.45509 16.514 7.59375 14.4843L5.48438 12.6562C3.7346 15.6416 2.81231 19.0395 2.8125 22.4999C2.81213 25.0854 3.32111 27.6457 4.31037 30.0344C5.29963 32.4232 6.74978 34.5937 8.57801 36.4219C10.4062 38.2501 12.5767 39.7003 14.9655 40.6895C17.3542 41.6788 19.9145 42.1878 22.5 42.1874C25.0069 42.211 27.4932 41.7329 29.8125 40.7812L28.9688 38.1093C26.6632 39.0952 24.1591 39.5286 21.6563 39.3749C18.6574 34.7625 17.0018 29.4063 16.875 23.9062H42.0469C42.1631 23.447 42.2105 22.973 42.1875 22.4999ZM18 38.8124C15.2036 37.9742 12.6482 36.4796 10.5469 34.453C7.75667 31.598 6.02093 27.8785 5.625 23.9062H14.0625C14.256 29.105 15.6008 34.1962 18 38.8124ZM16.875 21.0937C16.9869 15.6114 18.5913 10.2634 21.5156 5.62491H23.4844C26.4087 10.2634 28.0132 15.6114 28.125 21.0937H16.875ZM30.9375 21.0937C30.8305 15.8823 29.4806 10.7718 27 6.18741C30.3087 7.1411 33.2499 9.07684 35.4346 11.7385C37.6192 14.4003 38.9442 17.6625 39.2344 21.0937H30.9375Z"
                        fill="#666666"
                      />
                    </svg>
                    <span className="text-lg leading-5 text-center">
                      Livraison du
                      <br />
                      projet
                    </span>
                  </div>
                </div>
                <img
                  src="/images/phone.png"
                  alt=""
                  className="w-[350px] h-[544px] group-hover:translate-x-[120px] group-hover:translate-y-[30px] transition-all"
                />
              </div>
            </div>
            <div className="items_div cursor-pointer group h-[686px] w-[350px] transition-all  relative rounded-t-3xl overflow-hidden">
              <div className="flex flex-col justify-center rounded-t-3xl transition-all group-hover:bg-[#DFD4C0] pt-12 h-full items-center space-y-12">
                <div className="md:w-[200px] w-[236px]  xl:w-[236px] h-[48px] bg-black transition-all group-hover:bg-[#DFD4C0] group-hover:border-2 group-hover:border-black group-hover:text-black py-8 text-center group-hover:mt-32 text-white flex justify-center items-center rounded-full">
                  Formation
                </div>
                <div className="w-[236px] hidden transition-all group-hover:block text-center">
                  {section && section.p3}
                </div>
                <div className="flex-col bg-white w-[192px] h-[138px] absolute space-y-1 rounded-3xl transition-all bottom-32 left-2 shadow-2xl z-10 hidden group-hover:flex">
                  <div className="font-medium h-[30%] w-full flex items-center justify-center border-b ">
                    Lorem ipsum
                  </div>
                  <p className="flex text-center justify-center items-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto
                  </p>
                </div>
                <img
                  src="/images/phone.png"
                  alt=""
                  className="w-[350px] h-[544px] group-hover:translate-x-[120px] group-hover:translate-y-[30px] transition-all"
                />
              </div>
            </div>
            <div className="items_div cursor-pointer group h-[686px] w-[350px] transition-all  relative rounded-t-3xl overflow-hidden">
              <div className="flex flex-col justify-center rounded-t-3xl transition-all group-hover:bg-[#DFD4C0] pt-12 h-full items-center space-y-12">
                <div className="md:w-[200px] w-[236px]  xl:w-[236px] h-[48px] bg-black transition-all group-hover:bg-[#DFD4C0] group-hover:border-2 group-hover:border-black group-hover:text-black py-8 text-center group-hover:mt-32 text-white flex justify-center items-center rounded-full">
                  Event Pro
                </div>
                <div className="w-[236px] hidden transition-all group-hover:block text-center">
                  {section && section.p4}
                </div>
                <div className="flex-col bg-white w-[192px] h-[138px] absolute space-y-1 rounded-3xl transition-all bottom-32 left-2 shadow-2xl z-10 hidden group-hover:flex">
                  <div className="font-medium h-[30%] w-full flex items-center justify-center border-b ">
                    Lorem ipsum
                  </div>
                  <ul className="w-full flex flex-col items-center justify-center list-disc list-outside">
                    <li>Event Corporate</li>
                    <li>Event Corporate</li>
                    <li>Event Corporate</li>
                  </ul>
                </div>
                <img
                  src="/images/phone.png"
                  alt=""
                  className="w-[350px] h-[544px] group-hover:translate-x-[120px] group-hover:translate-y-[30px] transition-all"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Scroll section */}
        <div className="w-full sm:h-[600px] sm:bg-contain flex flex-col mt-20 sm:mt-52 px-2 ">
          {/*
          <div className="flex justify-between">
            <img
              src="icon/item_left_one.jpg"
              alt=""
              className="h-16 sm:h-24  lg:h-full"
              ref={imageRef1}
            />
            <img
              src="icon/item_right_one.jpg"
              alt=""
              className="h-16 sm:h-24  lg:h-full"
              ref={imageRef2}
            />
          </div> */}
          <div className="flex flex-col  items-center justify-center">
            <span className="text-3xl text-center sm:text-4xl md:text-5xl xl:text-7xl">
              Agence de publicité digitale
            </span>
            <p className="mt-12 text-[#666666] text-start px-4 sm:px-24 md:px-48 sm:text-center  sm:text-lg md:text-2xl">
              {pub && pub.p1}
            </p>
            <p className="mt-6 text-[#666666] text-start px-4 sm:px-24 md:px-48 sm:text-center sm:text-lg md:text-2xl">
              {pub && pub.p2}
            </p>
            <p className="mt-6 text-[#666666] text-start px-4 sm:px-24 md:px-48 sm:text-center sm:text-lg md:text-2xl">
              {pub && pub.p3}
            </p>
          </div>
          {/*
          <div className="flex justify-between">
            <img
              src="icon/item_left_two.jpg"
              alt=""
              className="h-16 sm:h-24  lg:h-full"
              ref={imageRef3}
            />
            <img
              src="icon/item_right_two.jpg"
              alt=""
              className="h-16 sm:h-24  lg:h-full"
              ref={imageRef4}
            />
          </div> */}
        </div>
        {/* Portfolio */}
        <div
          ref={sectionRef}
          className="w-full mt-32 sm:mt-0  h-[1037px] bg-black overflow-hidden flex-col flex items-center justify-center relative"
        >
          <span className="text-white lg:text-3xl text-xl z-30 font-normal">
            PORTFOLIO
          </span>
          <span
            dangerouslySetInnerHTML={{ __html: formattedPortfolioTitle }}
            className="text-white lg:text-7xl text-3xl z-30 sm:text-4xl font-medium mt-10 text-center"
          />
          <p
            className="text-center text-white px-4 sm:px-0 text-xl z-30 sm:text-3xl lg:text-4xl font-thin mt-16"
            dangerouslySetInnerHTML={{ __html: formattedPortfolioSubtitle }}
          />
          <span className="z-20 sm:block hidden">
            <div className="mt-16 cursor-pointer  flex w-[180px] gap-5 py-4 hover:gap-0   hover:flex hover:items-center hover:justify-center  hover:bg-white  transition-all px-2 text-white  hover:text-black hover:rounded-l-full hover:rounded-r-full">
              <div>Notre Portfolio</div>
              <div className="bg-white rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                <img src="/icon/arrow_black.svg" alt="" />
              </div>
            </div>
          </span>
          <span className="z-20 sm:hidden block">
            <div className="mt-16 cursor-pointer w-[180px]  py-4 gap-0   flex items-center  justify-center  bg-white  transition-all px-2  text-black rounded-l-full rounded-r-full">
              <div>Notre Portfolio</div>
              <div className="bg-white rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                <img src="/icon/arrow_black.svg" alt="" />
              </div>
            </div>
          </span>

          {/* left */}
          <img
            ref={image1Ref}
            src="/images/pc.png"
            alt=""
            className="absolute lg:bottom-0 bottom-[610px] left-12 opacity-40 lg:left-12 lg:w-[250px] lg:h-[220px] w-[113px] h-[103px] sm:h-[213px] sm:w-[203px]  z-10"
          />
          <img
            ref={image7Ref}
            src="/images/pc.png"
            alt=""
            className="absolute lg:bottom-0 bottom-[610px] left-24 opacity-40 lg:left-32 lg:w-[250px] lg:h-[220px] w-[113px] h-[103px] sm:h-[213px] sm:w-[203px]  z-10"
          />
          <img
            ref={image5Ref}
            src="/images/pc.png"
            alt=""
            className="absolute lg:bottom-0 bottom-[610px] left-24 opacity-40 lg:left-[250px] lg:w-[250px] lg:h-[220px] w-[113px] h-[103px] sm:h-[213px] sm:w-[203px]  z-10"
          />

          {/* right */}

          <img
            ref={image2Ref}
            src="/images/pc.png"
            alt=""
            className="absolute lg:bottom-0 lg:w-[250px] lg:h-[220px] w-[113px] h-[103px] sm:h-[213px] sm:w-[203px] lg:right-12 right-12 bottom-44 opacity-40 z-10"
          />
          <img
            ref={image8Ref}
            src="https://s3-alpha-sig.figma.com/img/396a/c52d/77798a6dd8fba3279527adfc010b6879?Expires=1694390400&Signature=ehRif3nIue5aNBp6oUrdVEpf2~5NKL7kXxA1ny9ttZDhPbUjL4A3ZDJ9EqpGNnRiuX6wiUW-mgxGWSHqGZG3yY~aAJbjUsO2KtattMp7lPjToPweo3kCquvNZw-F~gncgWgnU58uk28KfMUTkx4mQ9huufsCL~xmcgGrM-wQCBQrGT-4xkVQmxm7l3-JdVSMrf70G8Xsq4dPcUAEmC7WeWVrcPAJ6HRzdlbNrKv8EwrIcM2FrY5QdF8VFuAMSdsDmDJ4t-JNFT~-gkoFqg-t6LD5FEK5in7SHU-tRGX6KLS~mQnhy5sNyEBimdQV5oQ~j6xRRo03bX6Unj~bQmE5~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="absolute lg:bottom-[-120px] right-72  lg:right-28 opacity-40 lg:w-[250px] lg:h-[220px] z-10 h-[84px] w-[84px] bottom-24"
          />
          <img
            ref={image6Ref}
            src="https://s3-alpha-sig.figma.com/img/396a/c52d/77798a6dd8fba3279527adfc010b6879?Expires=1694390400&Signature=ehRif3nIue5aNBp6oUrdVEpf2~5NKL7kXxA1ny9ttZDhPbUjL4A3ZDJ9EqpGNnRiuX6wiUW-mgxGWSHqGZG3yY~aAJbjUsO2KtattMp7lPjToPweo3kCquvNZw-F~gncgWgnU58uk28KfMUTkx4mQ9huufsCL~xmcgGrM-wQCBQrGT-4xkVQmxm7l3-JdVSMrf70G8Xsq4dPcUAEmC7WeWVrcPAJ6HRzdlbNrKv8EwrIcM2FrY5QdF8VFuAMSdsDmDJ4t-JNFT~-gkoFqg-t6LD5FEK5in7SHU-tRGX6KLS~mQnhy5sNyEBimdQV5oQ~j6xRRo03bX6Unj~bQmE5~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="absolute lg:bottom-[-120px]  right-0 lg:right-56 opacity-40 lg:w-[250px] lg:h-[220px] z-10 h-[84px] w-[84px] bottom-24"
          />
        </div>
        {/* pub */}
        <Prefooter />
        <Footer />
      </div>
    </div>
  );
}
