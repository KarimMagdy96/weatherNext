import { getCurrentData } from "@/app/utils/currentDate";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

interface WeatherData {
  data?: {
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
  };
}

const Current = ({ data }: WeatherData) => {
  console.log(`https:${data?.current?.condition?.icon}`);
  const CurrentData = getCurrentData();
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 ">
      <div className="flex items-center">
        <div>
          <h1 className=" text-3xl text-white">Today</h1>
          <p className=" text-white">{CurrentData}</p>
          <div>
            <img
              className="w-[50px] object-cover"
              src={data?.current?.condition?.icon}
              alt={data?.current?.condition?.text}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-5xl text-white">
          {data?.current?.temp_f ? data?.current?.temp_f.toFixed() : ""}
          <span>°</span>
        </p>
        <span className=" text-white">{data?.current?.condition?.text}</span>
      </div>
      <div className=" flex content-center items-center  text-black bg-white/90 px-2 rounded-xl">
        <FaLocationDot />
        <span>
          {data?.location?.name}, {data?.location?.region}
        </span>
      </div>
    </div>
  );
};

export default Current;
