"use client";

import { BsSearch } from "react-icons/bs";
interface InputProps {
  handelSearch: () => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}
const Input = ({ handelSearch, setLocation }: InputProps) => {
  const handelsumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handelSearch();
  };
  return (
    <>
      <form
        onSubmit={handelsumbit}
        className=" flex items-center md:w-2/4 w-full order-2 md:order-1"
      >
        <input
          onChange={(e) => setLocation(e.target.value)}
          className=" w-full bg-transparent border-b-2 placeholder-white outline-none text-white "
          type="text"
          placeholder="Enter city name"
        />
        <div
          onClick={handelSearch}
          className="ml-[-25px] text-white cursor-pointer"
        >
          <BsSearch />
        </div>
      </form>
    </>
  );
};

export default Input;
