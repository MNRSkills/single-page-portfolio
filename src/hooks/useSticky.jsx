import React, { useState, useEffect, useRef } from "react";

const useSticky = () => {
  const [isSticky, setSticky] = useState(false);
  // const element = useRef(null);
  console.log(isSticky, "state from useSticky");

  const handleScroll = () => {
    console.log("THIS IS REF ELEMENT", window.scrollY);
    window.scrollY > 10 ? setSticky(true) : setSticky(false);
  };

  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut
  //   return () => {
  //     let context = this,
  //       args = arguments
  //     console.log("ARGS", args);
  //     const later = () => {
  //       timeOut = null
  //       if (!immediate) func.apply(context, args)
  //     }
  //     const callNow = immediate && !timeOut
  //     clearTimeout(timeOut)
  //     timeOut = setTimeout(later, wait)
  //     if (callNow) func.apply(context, args)
  //   }
  // }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return { isSticky };
};

export default useSticky;
