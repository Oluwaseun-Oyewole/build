/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, type RefObject } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: () => void,
  onEnter: () => void,
  onLeave: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    const handleMouseEnter = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        onEnter();
      }
    };

    // const handleMouseLeave = (event: MouseEvent) => {
    //   if (ref.current && ref.current.contains(event.target as Node)) {
    //     onLeave();
    //   }
    // };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mouseenter", handleMouseEnter);
    // document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      //   document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [ref, onClickOutside, onEnter, onLeave]);
}

export default useClickOutside;
