import React, { useEffect, useState } from "react";
import Header from "../header";
import Profile from "../../img/pp.png";
import MobileAruga from "../../img/mobile-aruga.png";
import AspectAll from "../../img/aspect-all.png";
const Home = () => {
  const [NavColor, setNavColor] = useState(false);

  const [toShow, setToShow] = useState(false);

  const changeNavbarColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 150) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div>
      <main className="w-full h-screen bg-neutral-800 flex items-center flex-col justify-center">
        <Header color={NavColor} />
        <div className="w-full h-full flex gap-2 justify-around ">
          <div className="lg:w-[40%]  w-full flex  justify-center flex-col p-20">
            <p className="text-xl text-white font-normal">Software Developer</p>
            <h1 className="text-[4rem] text-white font-bold font-[Carme]">
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
          <h1
            className="text-[5rem] font-semibold"
            style={{ fontFamily: "Carme" }}
          >
            Projects
          </h1>

          <div className="w-full p-2 justify-around mt-20 items-center projects flex flex-wrap gap-10 ">
            <div className="lg:w-[25%] w-[72%]  flex flex-col gap-2 justify-center ">
              <h1
                className="text-slate-800 text-2xl font-bold"
                style={{ fontFamily: "Carme" }}
              >
                Aruga
              </h1>
              <p className="text-slate-600 text-[1.1rem] font-normal ">
                Aruga is an online platform marketplace dedicated for parents
                and babysitter. Find jobs for babysitter and finding babysitter
                for parent done easily using the Aruga's Matching Algorithm.
              </p>
            </div>
            <div className="">
              <div className="h-[50vh] w-full flex justify-center">
                <img src={MobileAruga} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="w-full p-2 justify-around mt-20 items-center projects flex flex-wrap gap-10 flex-row-reverse">
            <div className="lg:w-[30%] w-[72%]  flex flex-col gap-2 justify-center  ">
              <h1
                className="text-slate-800 text-2xl font-bold"
                style={{ fontFamily: "Carme" }}
              >
                Aspect
              </h1>
              <p className="text-slate-600 text-[1.1rem] font-normal ">
                Introducing Aruga a mobile and web app, designed to bring the
                convenience of online shopping to your fingertips. With our app,
                you can browse through a vast selection of products, from
                electronics to fashion, and order them with just a few taps on
                your phone.
              </p>
              <ul className="flex gap-3"></ul>
            </div>
            <div className="">
              <div className="h-[50vh] w-full flex justify-center">
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
