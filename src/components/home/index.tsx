import React, { useEffect, useState } from "react";
import Header from "../header";
import Profile from "../../img/pp.png";
import MobileAruga from "../../img/mobile-aruga.png";
import AspectAll from "../../img/aspect-all.png";
import Android from "../../img/android.png";
import ReactIcon from "../../img/react-icon.png";
import Laravel from "../../img/laravel-icon.png";
import MysqlIcon from "../../img/mysql.png";
import MongoIcon from "../../img/mongo.png";
import ReactTs from "../../img/react-ts.png";
import JavaIcon from "../../img/java-icon.png";
const Home = () => {
  const [NavColor, setNavColor] = useState(false);
  const [toShow, setToShow] = useState(false);

  const [slideBanner, setSlideBanner] = useState(false);
  const [slideBanner2, setSlideBanner2] = useState(false);

  const changeNavbarColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 150) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }

    if (window.scrollY >= 780) {
      setSlideBanner2(true);
    } else {
      setSlideBanner2(false);
    }
    if (window.scrollY >= 470) {
      setSlideBanner(true);
    } else {
      setSlideBanner(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div>
      <main className="w-full h-screen bg-neutral-800 flex items-center flex-col justify-center">
        <Header color={NavColor} />
        <div className="w-full h-full flex gap-2 justify-around ">
          <div className="lg:w-[40%]  w-full flex  justify-center flex-col p-20">
            <p className="text-xl text-white font-normal carme">
              Software Developer
            </p>
            <h1 className="text-[4rem] text-white font-bold carme">
              Cj Tañedo
            </h1>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img src="https://img.icons8.com/emoji/256/man-technologyst.png" />
          </div>
        </div>
      </main>
      <section className="w-full h-[50vh] mt-5">
        <div className="w-[full] flex justify-center flex-col gap-3 items-center">
          <h1 className="text-[5rem] font-semibold carme">Projects</h1>

          <div className="w-full p-2 justify-around mt-20 items-center projects flex flex-wrap gap-10 ">
            <div
              className={`lg:w-[30%] w-[72%]  flex flex-col gap-2 justify-center ${
                slideBanner ? "w3-animate-left" : ""
              }`}
            >
              <h1 className="text-slate-800 text-2xl font-bold">Aruga</h1>

              <p
                className={`text-slate-600 text-[1.1rem] font-normal mt-5 carme `}
              >
                Aruga is an mobile and web marketplace platform dedicated for
                parents and babysitters. Find jobs for babysitter and finding
                babysitter for parent done easily.
              </p>

              <ul className="flex gap-10 items-center justify-center">
                <div className="flex w-[200px]">
                  <img src={JavaIcon} className="object-cover" />
                </div>
                <div className="flex w-[110px]">
                  <img src={ReactIcon} className="object-cover" />
                </div>
                <div className="flex flex-col w-[110px]">
                  <img src={Laravel} className="object-cover" />
                </div>
                <div className="flex w-[110px]">
                  <img src={MysqlIcon} className="object-cover" />
                </div>
              </ul>
            </div>
            <div className="">
              <div
                className={`h-[50vh] w-full flex justify-center  ${
                  slideBanner ? "w3-animate-right	" : ""
                }`}
              >
                <img src={MobileAruga} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="w-full p-2 justify-around mt-20 items-center projects flex flex-wrap flex-row-reverse">
            <div
              className={`lg:w-[30%] w-[72%]  flex flex-col gap-2 justify-center  ${
                slideBanner2 ? "w3-animate-right	" : ""
              }`}
            >
              <h1 className="text-slate-800 text-2xl font-bold carme">
                Aspect
              </h1>
              <p className="text-slate-600 text-[1.1rem] font-normal carme">
                Introducing Aruga a mobile and web app, designed to bring the
                convenience of online shopping to your fingertips. With our app,
                you can browse through a vast selection of products, from
                electronics to fashion, and order them with just a few taps on
                your phone.
              </p>

              <ul className="flex gap-10 items-center justify-center mt-2">
                <div className="flex w-[200px]">
                  <img src={JavaIcon} className="object-cover" />
                </div>
                <div className="flex w-[110px]">
                  <img src={ReactIcon} className="object-cover" />
                </div>
                <div className="flex w-[110px]">
                  <img src={MongoIcon} className="object-cover" />
                </div>
              </ul>
              <ul className="flex gap-3"></ul>
            </div>
            <div className="">
              <div
                className={`h-[50vh] w-full flex justify-center ${
                  slideBanner2 ? "w3-animate-top" : ""
                }`}
              >
                <img src={AspectAll} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
