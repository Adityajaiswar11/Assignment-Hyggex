import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

import { MdLightbulbOutline } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiFullscreenFill } from "react-icons/ri";
import { Link} from "react-router-dom";
import FAQ from "./FAQ";

const Main = () => {
  const [line, setLine] = useState("study");

  return (
    <div className=" main w-full mt-5 font-semibold mb-20">
      <div className="w-[88%] flex justify-start items-center mx-auto gap-1 ">
        <AiOutlineHome className="text-lg" />
        <IoIosArrowForward />
        <Link to="" className="text-sm opacity-85">Flashback</Link>
        <IoIosArrowForward />
        <Link to=""className="text-sm opacity-85">Mathematics</Link>
        <IoIosArrowForward />
        <Link className="text-md text-[#112041] font-bold">Relation and Function</Link>
      </div>
      <div className="w-[90%] mx-auto mt-10">
        <h1 className="ml-3 text-[#0d1861] font-semibold text-lg">
          Relation and Functions ( Mathematics )
        </h1>
      </div>

      <div className=" w-[90%] mx-auto mt-8">
        <div className=" link flex justify-center items-center gap-20 mx-auto">
          <Link
            to="/study"
            onClick={() => {
              setLine("study");
            }}
            className=" opacity-90"
          >
            Study {line === "study" ? <hr /> : <></>}
          </Link>
          <Link
            to="/quiz"
            onClick={() => {
              setLine("quiz");
            }}
            className=" opacity-80"
          >
            Quiz{line == "quiz" ? <hr /> : <></>}
          </Link>
          <Link
            to="/test"
            onClick={() => {
              setLine("test");
            }}
            className=" opacity-80"
          >
            Test{line == "test" ? <hr /> : <></>}
          </Link>
          <Link
            to="/game"
            onClick={() => {
              setLine("game");
            }}
            className=" opacity-80"
          >
            Game {line == "game" ? <hr /> : <></>}
          </Link>
          <Link
            to="others"
            onClick={() => {
              setLine("others");
            }}
            className=" opacity-80"
          >
            Others{line == "others" ? <hr /> : <></>}
          </Link>
        </div>

        <div className=" w-[600px] h-[300px] relative bg-gradient-to-r from-[#3452eb] to-[#070642]  mt-5 mx-auto rounded-lg">
          <div className="flex justify-between items-center p-5">
            <MdLightbulbOutline className="text-white text-2xl" />
            <HiOutlineSpeakerWave className="text-white text-2xl"/>
          </div>
          <div className=" text-center mt-20 text-white font-semibold text-xl">
            <h1>9 + 6 + 7x - 2x - 3</h1>
          </div>
        </div>
        <div className="w-full mx-auto p-3">
          <div className="flex justify-between items-center w-1/2 mx-auto p-3">
            <FaArrowRotateRight className="text-xl text-[#070642]" />
            <div className="flex justify-center items-center gap-7">
              <div className="bg-[#070642] rounded-full p-1">
                <IoIosArrowBack className="text-xl text-white" />
              </div>
              <p>01/10</p>
              <div className="bg-[#070642] rounded-full p-1">
                <IoIosArrowForward className="text-xl text-white" />
              </div>
            </div>
            <RiFullscreenFill className="text-xl text-[#070642] font-bold" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <div className="w-[50px] rounded-full shadow-inner shadow-[#1d34a3]">
              <img
                src="/public/assets/pic1.jpeg"
                alt="logo"
                className="w-[50px] rounded-full shadow-[#1d34a3]  shadow-inner p-1"
              />
            </div>

            <div className="flex justify-center items-center flex-col">
              <p className="text-[12px] opacity-85 pl-2">Published by</p>
              <h1 className="text-[#121154] opacity-90 text-md">
                Hygge<span className=" font-extrabold text-lg">X</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="bg-[rgb(7,6,66)] rounded-full p-1">
              <FaPlus className="text-xl text-white" />
            </div>
            <span className="text-[#070642]">Create Flashcard</span>
          </div>
        </div>
        <FAQ />
      </div>
    </div>
  );
};

export default Main;
