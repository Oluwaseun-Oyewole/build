/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";
import { subCategories, subLinks } from "@/constants";
import { Routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const SubLinks = () => {
  const pathname = usePathname();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSubLinkVisible, setIsSubLinkVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="container">
      <section className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <ul className="flex items-center gap-8">
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "relative flex items-center gap-2 rounded-md bg-gray-_50 px-8 py-4 text-sm font-light text-gray-_600 hover:text-blue-700",
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

              {isDropdownVisible && (
                <ul
                  className="absolute left-0 top-[100%] w-[250px] list-none rounded-md bg-white px-4 py-4 text-black"
                  style={{
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  }}>
                  {subCategories.map((link) => {
                    return (
                      <li
                        key={link.id}
                        className={cn(
                          "flex w-fit items-center gap-2 rounded-md py-3 pl-4 pr-8 text-sm font-light text-gray-_600 transition-all duration-500 ease-in-out hover:bg-gray-_50 hover:text-black",
                        )}>
                        <Link
                          href={`/categories/${link.linkTitle}`}
                          className="">
                          {isSubLinkVisible && (
                            <>
                              {link.subArray && (
                                <ul
                                  className="absolute left-[260px] top-0 h-full w-[750px] list-none rounded-md bg-white px-4 py-4 text-black"
                                  style={{
                                    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                                  }}>
                                  {link.subArray.map((subLink) => {
                                    return (
                                      <li key={subLink.id}>
                                        <Link href="">
                                          <p>{link.title}</p>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </>
                          )}

                          {link.subArray ? (
                            <div
                              className="flex items-center gap-8"
                              onMouseEnter={() => {
                                setIsSubLinkVisible(true);
                              }}
                              onMouseLeave={() => {
                                setIsSubLinkVisible(false);
                              }}>
                              <p>{link.title}</p>
                              {!isSubLinkVisible ? (
                                <IoChevronForwardSharp size={15} />
                              ) : (
                                <IoIosArrowDown size={20} />
                              )}
                            </div>
                          ) : (
                            <p>{link.title}</p>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            {subLinks?.map((link) => {
              return (
                <li
                  key={link.id}
                  className={cn(
                    "flex items-center gap-2 text-sm font-light text-gray-_600 hover:text-blue-700",
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
          </ul>
        </div>

        <div />
      </section>
    </div>
  );
};

export default SubLinks;
