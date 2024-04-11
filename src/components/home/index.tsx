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
import MixerLogin from "../../img/mixer-login.png";
import MixerHome from "../../img/mixer-home.png";

import { TechStack } from "../list/techStack";
const Home = () => {
  const [NavColor, setNavColor] = useState(false);
  const [toShow, setToShow] = useState(false);

  const [slideBanner, setSlideBanner] = useState(false);
  const [slideBanner2, setSlideBanner2] = useState(false);

  const changeNavbarColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 50) {
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

  const TECH_STACK: any = [
    "devicon-angularjs-plain colored",
    "devicon-react-original colored",
    "devicon-reactbootstrap-original colored",
    "devicon-nextjs-original-wordmark colored",
    "devicon-laravel-original colored",
    "devicon-dotnetcore-plain colored",
    "devicon-spring-original colored",
    "devicon-typescript-plain colored",
    "devicon-tailwindcss-original colored",
    "devicon-blazor-original colored",
    "devicon-mysql-original colored",
    "devicon-postgresql-plain colored",
    "devicon-mongodb-plain colored",
    "devicon-firebase-plain colored",
    "devicon-graphql-plain colored",
    "devicon-azure-plain colored",
  ];

  return (
    <div>
      <main className="w-full h-screen  flex items-center flex-col justify-center">
        <Header color={NavColor} />
        <div className="w-full h-full flex gap-2 justify-around ">
          <div className="lg:w-[40%]  w-full flex  justify-center flex-col p-20">
            <p className="text-  font-normal carme">Hi, I am Cj</p>
            <h1 className="text-[2rem]  font-bold carme">
              Full Stack Developer
            </h1>

            <TechStack techStack={TECH_STACK} />
          </div>
          <div className="w-[50%] md:flex justify-center items-center hidden">
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
                Aruga is a dedicated mobile and web marketplace connecting
                parents and babysitters effortlessly. Easily find babysitting
                jobs or the perfect babysitter with just a few clicks.
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
                Introducing Aspect, a revolutionary mobile and web application
                designed to seamlessly integrate the convenience of online
                shopping into your daily life. With our app, explore a wide
                array of products spanning from electronics to fashion, and
                effortlessly place orders with just a few taps on your
                smartphone.
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

          <div className="w-full p-2 justify-around mt-10 items-center projects flex flex-wrap gap-10 ">
            <div
              className={`lg:w-[30%] w-[72%]  flex flex-col gap-2 justify-center ${
                slideBanner ? "w3-animate-left" : ""
              }`}
            >
              <h1 className="text-slate-800 text-2xl font-bold">Mixer</h1>

              <p
                className={`text-slate-600 text-[1.1rem] font-normal mt-5 carme `}
              >
                Experience real-time music collaboration with Mixer, stream your
                favorite songs and create music with your friends.
              </p>

              <ul className="flex gap-5 items-center justify-center">
                <div className="flex w-[110px]">
                  <i className="devicon-dotnetcore-plain colored text-5xl"></i>
                </div>
                <div className="flex w-[110px]">
                  <i className="devicon-react-plain colored text-5xl"></i>
                </div>
                <div className="flex flex-col w-[110px]">
                  <i className="devicon-nodejs-plain-wordmark colored text-5xl"></i>
                </div>
                <div className="flex w-[110px]">
                  <i className="devicon-postgresql-plain-wordmark colored text-5xl"></i>
                </div>

                <div className="flex w-[110px]">
                  <i className="devicon-amazonwebservices-plain-wordmark colored text-5xl"></i>
                </div>
              </ul>
            </div>
            <div className="">
              <div
                className={`h-[50vh] w-full flex justify-center  ${
                  slideBanner ? "w3-animate-right	" : ""
                }`}
              >
                <img src={MixerHome} className="object-contain" />
                <img src={MixerLogin} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
