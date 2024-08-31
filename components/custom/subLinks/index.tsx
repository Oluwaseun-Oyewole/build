"use client";
import { subLinks } from "@/constants";
import { Routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import dropdown from "@/public/assets/images/svg/dropdown.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubLinks = () => {
  const pathname = usePathname();
  return (
    <div className="container">
      <section className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <ul className="flex items-center gap-8">
            <li
              className={cn(
                "flex items-center gap-2 text-sm font-light text-gray-_600 hover:text-blue-700",
                {
                  "font-medium text-black": Routes.categories === pathname,
                },
              )}>
              <Link href={Routes.categories}>
                <p>All Categories</p>
              </Link>
              <Image alt="categories" src={dropdown} />
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
