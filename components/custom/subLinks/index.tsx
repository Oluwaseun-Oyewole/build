/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";
import { subLinks } from "@/constants";
import { Routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Dropdown from "./dropdown";

const SubLinks = () => {
  const pathname = usePathname();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [, setIsSubLinkVisible] = useState(false);
  // const getTitle = pathname.split("/");
  // const getTitleEnum = getTitle[getTitle.length - 1];

  const dropdownReference = useRef<HTMLLIElement>(null);

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        dropdownReference.current &&
        !dropdownReference.current.contains(e.relatedTarget as Node)
      ) {
        setDropdownVisible(false);
      }
    }
    document.body.addEventListener("mouseleave", handler);

    return () => {
      document.body.addEventListener("mouseleave", handler);
    };
  }, []);

  return (
    <div className={clsx("border-b-2 border-gray-100 py-4")}>
      <div className="container">
        <section className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.ul className="flex items-center gap-4">
              <motion.li
                ref={dropdownReference}
                whileHover={{ background: "#FA8232", color: "#fff" }}
                // onMouseEnter={openDropdown}
                // onMouseLeave={handleMouseLeave}
                className={cn(
                  "relative flex items-center gap-4 rounded-md bg-gray-_50 px-6 py-4 text-sm font-light text-gray-_600 hover:text-black",
                  {
                    "font-medium text-black": Routes.categories === pathname,
                  },
                )}>
                <Link href={Routes.categories}>
                  <p>All Categories</p>
                </Link>
                {!isDropdownVisible ? (
                  <IoIosArrowDown size={15} onClick={openDropdown} />
                ) : (
                  <MdOutlineKeyboardArrowUp size={15} onClick={closeDropdown} />
                )}

                <Dropdown
                  isDropdownVisible={isDropdownVisible}
                  setIsSubLinkVisible={setIsSubLinkVisible}
                />
              </motion.li>
              {subLinks?.map((link) => {
                return (
                  <motion.li
                    onMouseEnter={closeDropdown}
                    whileHover={{ background: "#FA8232", color: "#fff" }}
                    key={link.id}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-5 py-4 text-sm font-light text-gray-_600 hover:text-black",
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
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          <div />
        </section>
      </div>
    </div>
  );
};

export default SubLinks;
