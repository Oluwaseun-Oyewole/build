import { grotesk } from "@/app/fonts";
import clsx from "clsx";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { Button } from "../ui/button";
import PriceTag from "./price.tag";

const SliderComponent = ({
  title,
  heading,
  description,
  buttonText,
  imagePath,
  amount,
}: {
  title: string;
  heading: string;
  description: string;
  buttonText: string;
  imagePath: string;
  amount: number;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-between rounded-lg bg-gray-100 px-10 py-10 md:h-[500px] md:flex-row md:py-0">
      <div className="order-2 basis-1/2">
        <div className="flex items-center gap-2">
          <span className="block h-[2px] w-[15px] bg-secondary-600" />
          <h3 className="text-secondary-600">{title}</h3>
        </div>
        <div className="flex flex-col gap-3 pt-2 md:gap-5">
          <h2 className="text-2xl md:text-5xl">{heading}</h2>
          <h2
            className={clsx(
              "text-sm text-gray-700 md:pr-14 md:text-base",
              grotesk.className,
            )}>
            {description}
          </h2>
          <Button variant="secondary" size="lg">
            {buttonText} <IoMdArrowForward size={20} />
          </Button>
        </div>
      </div>
      <div className="absolute right-16 top-10">
        <PriceTag amount={amount} />
      </div>
      <div className="order-1 basis-1/2">
        <Image
          src={imagePath}
          alt="item"
          priority
          className="h-[200px] md:h-[370px]"
        />
      </div>
    </div>
  );
};

export default SliderComponent;
