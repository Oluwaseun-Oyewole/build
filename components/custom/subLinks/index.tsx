/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";
import { PhonesTitle, subCategories, subLinks } from "@/constants";
import { Routes } from "@/constants/routes";
import useClickOutside from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const SubLinks = () => {
  const pathname = usePathname();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSubLinkVisible, setIsSubLinkVisible] = useState(false);
  const getTitle = pathname.split("/");
  const getTitleEnum = getTitle[getTitle.length - 1];

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleClickOutside = () => {
    setDropdownVisible(false);
  };
  const ulRef = useRef<HTMLUListElement>(null);
  const subLinkRef = useRef<HTMLUListElement>(null);
  //   const ulRef = useClickOutside<HTMLUListElement>(handleClickOutside);
  useClickOutside(
    ulRef,
    handleClickOutside,
    handleMouseEnter,
    handleMouseLeave,
  );
  //   useClickOutside(subLinkRef, handleClickOutside, handleMouseEnter, handleMouseLeave);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subLinkRef.current &&
        !subLinkRef.current.contains(event.target as Node)
      ) {
        setIsSubLinkVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [subLinkRef]);

  return (
    <div className="container">
      <section className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <motion.ul className="flex items-center gap-8">
            <motion.li
              //   onClick={handleClickOutside}
              onMouseEnter={handleMouseEnter}
              //   onMouseLeave={handleMouseLeave}
              className={cn(
                "relative flex items-center gap-2 rounded-md bg-gray-_50 px-8 py-4 text-sm font-light text-gray-_600 hover:text-black",
                {
                  "font-medium text-black": Routes.categories === pathname,
                },
              )}>
              <Link href={Routes.categories}>
                <p>All Categories</p>
              </Link>
              {!isDropdownVisible ? (
                <IoIosArrowDown size={20} />
              ) : (
                <MdOutlineKeyboardArrowUp size={20} />
              )}

              <AnimatePresence>
                {isDropdownVisible && (
                  <motion.ul
                    ref={ulRef}
                    className="absolute left-0 top-[70px] w-[250px] list-none rounded-md bg-white px-4 py-4 text-black"
                    style={{
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                    }}
                    //   onClick={() =>}
                  >
                    {subCategories.map((link) => {
                      return (
                        <motion.li
                          key={link.id}
                          className={cn(
                            "flex w-fit items-center gap-2 rounded-md py-3 pl-4 pr-8 text-sm font-light text-gray-_600 transition-all duration-500 ease-in-out hover:bg-gray-_50 hover:text-black",
                          )}>
                          <>
                            {link.subArray ? (
                              <div
                                className="flex items-center gap-8"
                                onClick={() => {
                                  setIsSubLinkVisible(!isSubLinkVisible);
                                }}

                                //   onMouseLeave={() => {
                                //     setIsSubLinkVisible(false);
                                //   }}
                              >
                                <Link href={`/categories/${link.linkTitle}`}>
                                  {link.title}
                                </Link>
                                {!isSubLinkVisible ? (
                                  <IoChevronForwardSharp size={15} />
                                ) : (
                                  <IoIosArrowDown size={20} />
                                )}
                              </div>
                            ) : (
                              <Link href={`/categories/${link.linkTitle}`}>
                                {link.title}
                              </Link>
                            )}
                          </>

                          {isSubLinkVisible && (
                            <>
                              {link.subArray && (
                                <ul
                                  className="absolute left-[260px] top-0 w-[750px] list-none rounded-md bg-white py-4 text-black"
                                  style={{
                                    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                                  }}
                                  ref={subLinkRef}
                                  onMouseLeave={() => {
                                    setIsSubLinkVisible(false);
                                  }}>
                                  <li className="grid grid-flow-col grid-cols-[25%_75%]">
                                    <ul>
                                      {link.subArray.map((subLink) => {
                                        return (
                                          <li
                                            key={subLink.id}
                                            className="rounded-md px-8 py-3 text-sm font-light text-gray-_600 transition-all duration-500 ease-in-out hover:bg-gray-_50 hover:text-black">
                                            <Link
                                              href={`/categories/phone/${subLink.title}`}>
                                              <p className="text-base">
                                                {subLink.title}
                                              </p>
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                    <div className="">
                                      {
                                        PhonesTitle[
                                          getTitleEnum as keyof typeof PhonesTitle
                                        ]
                                      }
                                    </div>
                                  </li>
                                </ul>
                              )}
                            </>
                          )}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
            {subLinks?.map((link) => {
              return (
                <li
                  key={link.id}
                  className={cn(
                    "flex items-center gap-2 text-sm font-light text-gray-_600 hover:text-black",
                    {
                      "font-medium text-black": link.route === pathname,
                    },
                  )}>
                  <Image
                    alt={link.title}
                    src={link.image}
                    className="h-[21px] w-[21px]"
                  />
                  <Link href={link.route}>
                    <p>{link.title}</p>
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <div />
      </section>
    </div>
  );
};

export default SubLinks;
