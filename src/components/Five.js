import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Prefooter from "./Prefooter";

export default function Five() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://caauri-api.cyclic.cloud/all_blog")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className="bg-white text-black">
      {/* first Blog */}
      <div className="flex sm:flex-row flex-col w-full px-6 sm:px-0 pt-24 sm:pt-56">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="sm:text-7xl text-4xl sm:w-1/2 pl-1 sm:pl-20 sm:block flex justify-start "
        >
          CAAURI BLOG
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="sm:w-1/2 text-base sm:mt-0 mt-3 px-2 sm:px-0 sm:text-3xl sm:pl-16 sm:pr-20  flex sm:justify-center"
        >
          Apprenez de nous, laissez vous divertir ou
          <br />
          inspirez
        </div>
      </div>
      <div className="flex flex-col mt-8 sm:mt-32">
        <div className="w-full flex">
          <span className="sm:text-2xl  font-medium w-1/2 flex pl-7 sm:pl-24 justify-start">
            A LA UNE{" "}
          </span>
          <span className="w-1/2"></span>
        </div>
        <div className="flex justify-center rounded-md h-[284px] sm:h-[835px] px-6 sm:px-24 relative">
          <img
            src="/images/bot.png"
            alt=""
            className="max-w-full h-auto z-10 rounded-md ml-auto mr-auto block"
          />
          <div className="absolute hidden sm:flex flex-col left-7 sm:left-24 top-0 sm:top-12">
            <span className=" sm:text-4xl  text-white z-20">KMS EXPRESS</span>
            <span className="sm:text-3xl mt-2 text-white z-20">
              13/12/2023 &nbsp; |Contenu | il y a 1 min
            </span>
          </div>
        </div>
        <div className="px-7 mt-2 sm:hidden  text-black flex flex-col">
          <span className=" sm:text-4xl">KMS EXPRESS</span>
          <span className="sm:text-3xl">
            13/12/2023 &nbsp; |Contenu | il y a 1 min
          </span>
        </div>
        <div className="w-full block sm:hidden px-7 mt-4">
          <div className="w-full border  border-black border-dashed"></div>
        </div>
        <div className="flex justify-center rounded-lg  flex-wrap sm:flex-row flex-col w-full mt-6 sm:mt-12  px-4 sm:px-20">
          {data.map((el, index) => (
            <div
              key={index}
              className="sm:w-1/2 flex flex-col rounded-lg py-8 px-2 sm:px-0"
            >
              <Link to={`/blog/${el._id}`}>
                <div className="h-[284px] cursor-pointer rounded-lg sm:h-[407px]">
                  <img
                    src={el.cover}
                    alt=""
                    className="w-full hover:scale-105  transition-all   sm:px-6 rounded-lg h-full block"
                  />
                </div>
              </Link>
              <div className="flex flex-col mt-4 sm:px-8">
                <span className="sm:text-3xl text-xs font-medium">
                  {el.title.replace(/\n/g, "<br>")}
                </span>
                <span className="sm:mt-4 mt-1 text-xs sm:text-2xl">
                  {el.date} | Content
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Prefooter />
      <Footer />
    </div>
  );
}
