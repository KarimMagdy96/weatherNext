import { getCurrentData } from "@/app/utils/currentDate";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
interface currentPropss {
  data: object | any;
}
const Current = ({ data }: currentPropss) => {
  let CurrentData = getCurrentData();
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
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
          {data?.current?.temp_f.toFixed()}
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
