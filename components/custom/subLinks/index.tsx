/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";
import { subLinks } from "@/constants";
import { Routes } from "@/constants/routes";
import { useGlobal } from "@/hooks/useGlobal";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileMenu } from "../nav/mobile";
import Dropdown from "./dropdown";

const SubLinks = () => {
  const pathname = usePathname();
  const { open, toggle } = useGlobal();

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
    <div className={clsx("border-b-2 border-gray-100 bg-white py-2 lg:py-3")}>
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
                      "hidden items-center gap-2 rounded-md px-5 py-4 text-sm font-light text-gray-_600 hover:text-black lg:flex",
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

          <div className="lg:hidden">
            {!open ? (
              <RxHamburgerMenu
                size={20}
                onClick={() => {
                  toggle(true);
                }}
              />
            ) : (
              <IoMdClose
                size={20}
                role="button"
                onClick={() => {
                  toggle(false);
                }}
              />
            )}
          </div>
        </section>
      </div>
      <MobileMenu />
    </div>
  );
};

export default SubLinks;
