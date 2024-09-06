import React, { useState } from "react";
import { useUser } from "../../context/index";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { deleteSvg, update } from "../../Constant";
import { styles } from "../../styles";

const Table = () => {
  const { user, deleteUser, updateUser } = useUser();

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (index) => {
    setSelectedRows((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(user.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleUpdate = (id, newName) => {
    updateUser(id, newName);
  };

  if (!user || user.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <motion.div variants={fadeIn()} initial="hidden" animate="show">
      <div className="w-full lg:w-[888px] 2xl:w-[1200px] overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <div className="min-w-full">
          <div className="mb-5">
            <h3 className={`font-bold ${styles.sectionHeadText} `}>Overview</h3>
            <p className={`${styles.sectionSubText}`}>
              Get an overview of how you're doing on social media compared to
              competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 text-left text-gray-500 font-medium border-b pb-2 gap-2 md:gap-4">
            <div className="col-span-1 flex justify-center items-center">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="w-4 h-4"
              />
            </div>
            <div className="col-span-4 hidden md:block">Account Name</div>
            <div className="col-span-2 hidden md:block">Followers</div>
            <div className="col-span-3 hidden md:block">Brand Mentions</div>
            <div className="col-span-1 hidden md:block">Actions</div>
          </div>

          {user.map((row, index) => (
            <div
              key={row.id}
              className="grid grid-cols-1 md:grid-cols-11 text-left py-2 text-gray-700 border-b gap-2 md:gap-4"
            >
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                  className="w-4 h-4"
                />
              </div>
              <div className="col-span-4 flex items-center space-x-2">
                {/* <div className="relative w-12 h-12">
                  <img
                    src={row.pic}
                    alt="profile"
                    className="w-full h-full rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 mb-1 mr-1 flex justify-center items-center">
                    <div className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                      <img
                        src={row.tag}
                        alt="tag"
                        className="object-contain w-1/2"
                      />
                    </div>
                  </div>
                </div>  */}
                <div className="relative w-12 h-12">
                  <img
                    src={row.pic}
                    alt="profile"
                    className="w-full h-full rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 mb-0.5 mr-0.5 flex justify-center items-center">
                    <div className="       w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">
                      <img
                        src={row.tag}
                        alt="tag"
                        className="object-contain w-2/3"
                      />
                    </div>
                  </div>
                </div>

                <span>{row.name}</span>
              </div>
              <div className="col-span-2">{row.followers}</div>
              <div className="col-span-3">{row.mentions}</div>
              <div className="col-span-1 flex space-x-2">
                <img
                  src={update}
                  className="text-blue-500 cursor-pointer w-6 h-6"
                  onClick={() =>
                    handleUpdate(row.id, prompt("New name?", row.name))
                  }
                />
                <img
                  src={deleteSvg}
                  className="text-red-500 cursor-pointer w-6 h-6"
                  onClick={() => handleDelete(row.id)}
                />
              </div>
            </div>
          ))}
          {user.map((row) => console.log(row))}
        </div>
      </div>
    </motion.div>
  );
};

export default Table;
