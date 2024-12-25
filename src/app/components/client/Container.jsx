"use client";

const Container = ({ children }) => {
  return (
    <div className=" flex flex-col justify-center items-center mt-14 md:mt-[4.5rem] lg:mt-[6rem] ">
      {children}
    </div>
  );
};

export default Container;
