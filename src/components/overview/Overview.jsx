import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";

function Overview() {
  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 0.5)}
      initial="hidden"
      animate="show"
      className="flex justify-start items-center pb-0 mb-0 2xl:w-[1111px] w-full"
    >
      <h2 className={`${styles.HeadText} text-left mb-0`}>Overview</h2>
      <span className="w-5 h-5 flex justify-center items-center ml-1">
        <img
          className="w-full h-full"
          src="../../src/assets/info.svg"
          alt="info"
        />
      </span>
    </motion.div>
  );
}

export default Overview;
