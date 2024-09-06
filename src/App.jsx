import React from "react";
import { UserProvider } from "../src/context/index";

import Overview from "./components/overview/Overview";
import Box from "./components/Box/Box";
import Table from "./components/table/Table";

const App = () => {
  return (
    <UserProvider>
      <div className="bg-[#F7F7F7] w-full min-h-screen sm:p-6  lg:p-8">
        <div className="flex flex-col lg:flex-col items-center justify-start gap-6">
          <Overview />
          <Box />
        </div>
        <div className="mt-4 flex  flex-col justify-center items-center">
          <Table />
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
