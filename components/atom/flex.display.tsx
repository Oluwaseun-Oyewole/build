import { formatCurrency } from "@/lib/utils";
import Airpod from "@/public/assets/images/svg/airpod.svg";
import SummerSalesImage from "@/public/assets/images/svg/sales.svg";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { Button } from "../ui/button";
import Discount from "./discount";

const HeroRightSession = () => {
  return (
    <div className="flex h-[500px] w-full flex-col gap-5 md:flex-row xl:flex-col">
      <div className="relative flex h-[260px] w-full items-center gap-5 overflow-hidden rounded-lg bg-black text-white">
        <div className="pl-5">
          <h2 className="uppercase text-yellow-400 md:text-lg">Summer Sales</h2>
          <div className="py-2">
            <h2 className="md:text-xl">New Google</h2>
            <h2 className="md:text-xl">Pixel 6 Pro</h2>
          </div>
          <Button variant="secondary" size="lg">
            shop now <IoMdArrowForward size={20} />
          </Button>
        </div>
        <Image
          src={SummerSalesImage}
          alt=""
          className="absolute -right-7 bottom-0 h-[140px] md:right-0 md:h-[160px]"
        />
        <div className="absolute right-[50px] top-[70px]">
          <Discount discountPercentage={29} />
        </div>
      </div>
      <div className="flex h-[260px] w-full items-center justify-around gap-2 overflow-hidden rounded-lg bg-gray-100 xl:justify-center">
        <Image src={Airpod} alt="" />
        <div>
          <h2 className="md:text-xl">Xiaomi</h2>
          <h2 className="md:text-xl">Flipbuds Prop</h2>
          <h3 className="py-2 text-secondary-600">{formatCurrency(300)}</h3>
          <Button variant="secondary" size="lg">
            shop now <IoMdArrowForward size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroRightSession;
