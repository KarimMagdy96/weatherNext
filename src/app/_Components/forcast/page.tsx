import React from "react";

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
const Forcast = ({ data }: WeatherData) => {
  return (
    <>
      <div className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-7 gap-8 text-xs sm:text-sm lg:text-base w-full ">
        {data?.forecast?.forecastday?.map((day, i: number) => {
          return (
            <div
              key={i}
              className=" bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
            >
              <div>
                {day.date
                  ? new Date(day?.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })
                  : ""}
              </div>
              <img
                src={day?.day?.condition?.icon}
                alt={day?.day?.condition?.text}
              />
              <div>H {day?.day?.maxtemp_f?.toFixed()}°</div>
              <div>L {day?.day?.mintemp_f?.toFixed()}°</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Forcast;
