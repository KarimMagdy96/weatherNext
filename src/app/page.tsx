"use client";

import { useState } from "react";
import Input from "./_Components/input/page";

const Home = () => {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState<any>("");
  const [error, setError] = useState<any>({});
  let apiKey = process.env.NEXT_PUBLIC_API_KEY;

  let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}=${location}&days=7&aqi=yes&alerts=yes
`;

  const handelSearch = async (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(url);
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      console.log(data);
      setData(data);

      // setLocation("");
      setError("");
    } catch (error) {
      setError("city not found");
      setData({});
    }
  };
  console.log(location);
  return (
    <>
      <div className=" bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen  ">
        <div className=" bg-white/25 w-full h-full flex flex-col ">
          {/* input and logos */}
          <div className=" flex flex-col md:flex-row justify-between items-center p-12">
            <Input setLocation={setLocation} handelSearch={handelSearch} />
            <h1 className=" mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl">
              Weather App.
            </h1>
          </div>
          {data?.current?.temp_f}
        </div>
      </div>
    </>
  );
};

export default Home;
