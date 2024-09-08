"use client";

import { useState } from "react";
import Input from "./_Components/input/page";
import Current from "./_Components/current/page";
import Forcast from "./_Components/forcast/page";
import Weather from "./_Components/weather.tsx/page";
interface WeatherData {
  location?: {
    name?: string;
    region?: string;
    country?: string;
    lat?: number;
    lon?: number;
    tz_id?: string;
    localtime_epoch?: number;
    localtime?: string;
  };
  current?: {
    last_updated_epoch?: number;
    last_updated?: string;
    temp_c?: number;
    temp_f?: number;
    is_day?: number;
    condition?: {
      text?: string;
      icon?: string;
      code?: number;
    };
    wind_mph?: number;
    wind_kph?: number;
    wind_degree?: number;
    wind_dir?: string;
    pressure_mb?: number;
    pressure_in?: number;
    precip_mm?: number;
    precip_in?: number;
    humidity?: number;
    cloud?: number;
    feelslike_c?: number;
    feelslike_f?: number;
    windchill_c?: number;
    windchill_f?: number;
    heatindex_c?: number;
    heatindex_f?: number;
    dewpoint_c?: number;
    dewpoint_f?: number;
    vis_km?: number;
    vis_miles?: number;
    uv?: number;
    gust_mph?: number;
    gust_kph?: number;
    air_quality?: {
      co?: number;
      no2?: number;
      o3?: number;
      so2?: number;
      pm2_5?: number;
      pm10?: number;
      "us-epa-index"?: number;
      "gb-defra-index"?: number;
    };
  };
  forecast?: {
    forecastday?: {
      date?: string;
      date_epoch?: number;
      day?: {
        maxtemp_c?: number;
        maxtemp_f?: number;
        mintemp_c?: number;
        mintemp_f?: number;
        avgtemp_c?: number;
        avgtemp_f?: number;
        maxwind_mph?: number;
        maxwind_kph?: number;
        totalprecip_mm?: number;
        totalprecip_in?: number;
        totalsnow_cm?: number;
        avgvis_km?: number;
        avgvis_miles?: number;
        avghumidity?: number;
        daily_will_it_rain?: number;
        daily_chance_of_rain?: number;
        daily_will_it_snow?: number;
        daily_chance_of_snow?: number;
        condition?: {
          text?: string;
          icon?: string;
          code?: number;
        };
        uv?: number;
      };
    }[];
  };
}

const Home = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}=${location}&days=7&aqi=yes&alerts=yes
`;

  const handelSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      setData(null);
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
            <div className="pt-32 text-center text-3xl md:text-4xl   text-white  font-bold">
              Welcome to Weather App.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
