"use client";

import { useState } from "react";
import Input from "./_Components/input/page";
import Current from "./_Components/current/page";
import Forcast from "./_Components/forcast/page";
import Weather from "./_Components/weather.tsx/page";

const Home = () => {
  const [data, setData] = useState<any>([]);
  const [location, setLocation] = useState<any>("");
  const [error, setError] = useState<any>("");
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
      setData([]);
    }
  };
  console.log(location);
  return (
    <>
      <div className=" bg-cover bg-gradient-to-r from-blue-500 to-blue-300 min-h-screen  ">
        <div className=" bg-white/25 w-full min-h-screen flex flex-col ">
          {/* input and logos */}
          <div className=" flex flex-col md:flex-row justify-between items-center p-12">
            <Input setLocation={setLocation} handelSearch={handelSearch} />
            <h1 className=" font-semibold mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl">
              WEATHER APP.
            </h1>
          </div>
          {data && !error && location !== "" ? (
            <div>
              <div className=" flex md:flex-row flex-col p-12 items-center justify-between ">
                <Current data={data} />
                <Forcast data={data} />
              </div>
              <div>
                <Weather data={data} />
              </div>
            </div>
          ) : location !== "" ? (
            <div>{error}</div>
          ) : (
            <div className="pt-32 text-center text-4xl   text-white  font-bold">
              Welcome to Weather App.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
