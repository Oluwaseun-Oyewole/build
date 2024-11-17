import icon from "@/public/assets/images/png/Icon.png";
import cart from "@/public/assets/images/svg/cart.svg";
import love from "@/public/assets/images/svg/love.svg";
import user from "@/public/assets/images/svg/user.svg";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Search from "../search";

const Navigation = () => {
  return (
    <header className="flex flex-col items-center justify-between bg-secondary-700 py-4 text-white">
      <nav className="container grid w-full grid-flow-col items-center md:grid-cols-[20%_60%_20%]">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image alt="logo" src={icon} className="hidden h-[30px] w-[30px]" />
            <h1>Shopify</h1>
          </div>
        </Link>
        <div>
          <Suspense fallback={<p>..</p>}>
            <Search />
          </Suspense>
        </div>
        <div className="hidden items-center justify-end gap-4 md:flex">
          <Image alt="cart" src={cart} className="h-[30px] w-[30px]" />
          <Image alt="love" src={love} className="h-[30px] w-[30px]" />
          <Image alt="user" src={user} className="h-[30px] w-[30px]" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
