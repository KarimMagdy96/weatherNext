import React from "react";

interface day {
  date: string;
  day: {
    maxtemp_f: number;
    mintemp_f: number;
    condition: {
      icon: string;
      text: string;
    };
  };
}
const Forcast = ({ data }: any) => {
  return (
    <>
      <div className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-7 gap-8 text-xs sm:text-sm lg:text-base w-full ">
        {data?.forecast?.forecastday?.map((day: day, i: any) => {
          return (
            <div
              key={i}
              className=" bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
            >
              <div>
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
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
