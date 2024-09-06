import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const growthSVG = "../../src/assets/groth.svg";
const fallSVG = "../../src/assets/fall.svg";
const audTag = "../../src/assets/aud-tag.svg";

const boxes = [
  {
    audience: { aud: "Audience", tag: audTag },
    num: "1.2M",
    growth: {
      svg: growthSVG,
      value: "25%",
    },
    fall: {
      svg: fallSVG,
      value: "10%",
    },
  },
  {
    audience: { aud: "Audience", tag: audTag },
    num: "1.2M",
    growth: {
      svg: growthSVG,
      value: "5%",
    },
    fall: {
      svg: fallSVG,
      value: "0%",
    },
  },
  {
    audience: { aud: "Audience", tag: audTag },
    num: "1.2M",
    growth: {
      svg: growthSVG,
      value: "265%",
    },
    fall: {
      svg: fallSVG,
      value: "30%",
    },
  },
];

function Box() {
  return (
    <div className="flex flex-wrap justify-center align-middle gap-6">
      {boxes.map((box, index) => (
        <motion.div
          key={index}
          variants={fadeIn()}
          initial="hidden"
          animate="show"
          className="bg-white w-[282px] h-auto p-4 rounded-lg shadow-md flex flex-col justify-between"
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <img
                src={box.audience.tag}
                alt="Audience Tag"
                className="w-5 h-5 mr-2"
              />
              <h3 className="text-md font-semibold">{box.audience.aud}</h3>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-3xl font-bold">{box.num}</p>
            {box.fall && (
              <div className="flex items-center text-[#5C6BC0]">
                <img src={box.fall.svg} alt="Fall" className="w-20 h-20 mr-1" />
                <span>{box.fall.value}</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between w-full">
            {box.growth && (
              <div className="flex items-center text-green-500">
                <img
                  src={box.growth.svg}
                  alt="Growth"
                  className="w-5 h-5 mr-1"
                />
                <span>{box.growth.value}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Box;
