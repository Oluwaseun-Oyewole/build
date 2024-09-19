"use client";
import { grotesk } from "@/app/fonts";
import { subLinks } from "@/constants";
import { useGlobal } from "@/hooks/useGlobal";
import { cn } from "@/lib/utils";
import cart from "@/public/assets/images/svg/cart.svg";
import love from "@/public/assets/images/svg/love.svg";
import user from "@/public/assets/images/svg/user.svg";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const { open } = useGlobal();
  const pathname = usePathname();
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
      },
    },
    exit: { opacity: [1, 0.8, 0.5, 0.3, 0] },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={variants}
          exit="exit"
          className={classNames(
            `container fixed right-0 z-[100000] mt-2 flex h-[89vh] w-full flex-col overflow-hidden bg-secondary-700 shadow-md lg:hidden`,
            grotesk.className,
          )}>
          <div className="flex items-center justify-end gap-4 py-5 md:hidden">
            <Image alt="cart" src={cart} className="h-[30px] w-[30px]" />
            <Image alt="love" src={love} className="h-[30px] w-[30px]" />
            <Image alt="user" src={user} className="h-[30px] w-[30px]" />
          </div>
          <motion.ul
            className="flex flex-col gap-4"
            initial="hidden"
            animate="show"
            variants={container}>
            {subLinks?.map((link) => {
              return (
                <motion.li
                  variants={item}
                  whileHover={{ background: "#FA8232", color: "#fff" }}
                  key={link.id}
                  className={cn(
                    "flex items-center gap-2 rounded-md py-2 text-lg text-gray-100 hover:text-black lg:hidden",
                    {
                      "font-medium text-orange-300": link.route === pathname,
                    },
                  )}>
                  <Link href={link.route}>
                    <p>
                      0.{link.id} {link.title}
                    </p>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
