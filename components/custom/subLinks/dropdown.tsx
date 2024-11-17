/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { subCategories } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";

const Dropdown = ({
  isDropdownVisible,
  setIsSubLinkVisible,
}: {
  isDropdownVisible: boolean;
  setIsSubLinkVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const variants = {
    hidden: { x: "100%", opacity: 0.3 },
    visible: {
      opacity: [0, 0.2, 0.6, 0.8, 1],
      x: 0,
      transition: {
        type: "spring",
        mass: 0.45,
        stiffness: 100,
        damping: 10,
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: { x: "-100%", opacity: 0 },
  };

  const subLinkRef = useRef<HTMLUListElement>(null);

  const [isSubDropdownVisible, setIsSubDropdownVisible] = useState(false);

  const enter = () => {
    setIsSubDropdownVisible(true);
  };

  const leave = () => {
    setIsSubDropdownVisible(false);
  };

  return (
    <div>
      <AnimatePresence>
        {isDropdownVisible && (
          <motion.ul
            className="absolute left-0 top-[70px] w-[250px] list-none rounded-md bg-white px-4 py-4 text-black"
            style={{
              boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
            }}
            initial="hidden"
            animate="visible"
            variants={variants}
            exit="exit"
            ref={subLinkRef}>
            {subCategories.map((link) => {
              return (
                <motion.li
                  key={link.id}
                  onClick={enter}
                  className={cn(
                    "flex w-fit items-center gap-2 rounded-md py-3 pl-4 pr-8 text-sm font-light text-gray-_600 transition-all duration-500 ease-in-out hover:bg-gray-_50 hover:text-black",
                  )}>
                  <>
                    {link.subArray ? (
                      <div className="flex items-center gap-8">
                        <Link href={`/categories/${link.linkTitle}`}>
                          {link.title}
                        </Link>
                        <div className="hidden lg:block">
                          {!isSubDropdownVisible ? (
                            <IoChevronForwardSharp size={15} onClick={enter} />
                          ) : (
                            <IoIosArrowDown size={15} onClick={leave} />
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link href={`/categories/${link.linkTitle}`}>
                        {link.title}
                      </Link>
                    )}
                  </>

                  {/* {isSubDropdownVisible && (
                    <>
                      {link.subArray && (
                        <ul
                          className="absolute left-[260px] top-0 hidden w-[750px] list-none rounded-md bg-white py-4 text-black lg:block"
                          style={{
                            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                          }}
                          //   ref={subLinkRef}
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
                            <div className="flex flex-col gap-5">
                              {
                                        PhonesTitle[
                                          getTitleEnum as keyof typeof PhonesTitle
                                        ]
                                      }
                              <div className="flex items-center">
                                <Image alt="game" src={ps3} />
                                <div>
                                  <h3>Samsung Electronic</h3>
                                  <h3>Samsung Galaxy S12 5G</h3>
                                  <h3>$160</h3>
                                </div>
                              </div>

                              <div className="flex items-center">
                                <Image alt="game" src={ps3} />
                                <div>
                                  <h3>Samsung Electronic</h3>
                                  <h3>Samsung Galaxy S12 5G</h3>
                                  <h3>$160</h3>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Image alt="game" src={ps3} />
                                <div>
                                  <h3>Samsung Electronic</h3>
                                  <h3>Samsung Galaxy S12 5G</h3>
                                  <h3>$160</h3>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      )}
                    </>
                  )} */}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
