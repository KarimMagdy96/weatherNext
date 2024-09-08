import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BiSolidDirections } from "react-icons/bi";
import { BsSunriseFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";
import { SiAirbyte } from "react-icons/si";
import { MdOutlineVisibility } from "react-icons/md";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
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
        astro?: {
          sunrise?: string;
          sunset?: string;
          moonrise?: string;
          moonset?: string;
          moon_phase?: string;
          moon_illumination?: string;
          is_moon_up?: number;
          is_sun_up?: number;
        };
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
const Weather = ({ data }: WeatherData) => {
  if (data && !data?.current) {
    return null;
  }

  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white italic font-bold">
        Weather Details
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-bold">
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Wind Speed</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Wind Speed: ${data && data?.current?.wind_mph} mph`}
            >
              {data && data?.current?.wind_mph} mph
            </h3>
          </div>
          <div>
            <FaWind fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Humidity</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Humidity: ${data?.current?.humidity}%`}
            >
              {data?.current?.humidity}%
            </h3>
          </div>
          <div>
            <WiHumidity fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Wind Direction</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Wind Direction: ${data && data?.current?.wind_dir}`}
            >
              {data && data?.current?.wind_dir}
            </h3>
          </div>
          <div>
            <BiSolidDirections fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sunrise</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Sunrise: ${
                data?.forecast?.forecastday &&
                data?.forecast?.forecastday[0]?.astro?.sunrise
              }`}
            >
              {data?.forecast?.forecastday &&
                data?.forecast?.forecastday[0]?.astro?.sunrise}
            </h3>
          </div>
          <div>
            <BsSunriseFill fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sunset</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Sunset: ${
                data?.forecast?.forecastday != undefined
                  ? data?.forecast?.forecastday[0]?.astro?.sunset
                  : ""
              }`}
            >
              {data?.forecast?.forecastday != undefined
                ? data?.forecast?.forecastday[0]?.astro?.sunset
                : ""}
            </h3>
          </div>
          <div>
            <BsSunsetFill fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Air Pressure</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Air Pressure: ${
                data && data?.current?.pressure_mb
              } hPa`}
            >
              {data && data?.current?.pressure_mb} hPa
            </h3>
          </div>
          <div>
            <SiAirbyte fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Feels Like</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Feels Like: ${data && data?.current?.feelslike_f}°`}
            >
              {data && data?.current?.feelslike_f}°
            </h3>
          </div>
          <div>
            <FaArrowDownUpAcrossLine fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Visibility</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Visibility: ${data && data?.current?.vis_km} km`}
            >
              {data && data?.current?.vis_km} km
            </h3>
          </div>
          <div>
            <MdOutlineVisibility fontSize={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
