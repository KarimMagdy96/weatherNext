"use client";

import Input from "./input/page";

const Home = () => {
  return (
    <>
      <div className=" bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen  ">
        <div className=" bg-white/25 w-full h-full flex flex-col ">
          {/* input and logos */}
          <div className=" flex flex-col md:flex-row justify-between items-center p-12">
            <Input />
            <h1 className=" mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl">
              Weather App.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
