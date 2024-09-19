import { grotesk } from "@/app/fonts";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ShopifyServices = () => {
  return (
    <div className="container">
      <ul
        className={cn(
          "flex w-full flex-wrap items-center justify-between gap-10 rounded-lg border-[2px] border-gray-100 px-8 py-5 md:gap-5",
        )}>
        {services.map((service) => {
          return (
            <li key={service.id} className="flex items-center gap-5">
              <Image src={service.imagePath} alt={service.title} />
              <div>
                <h2 className="uppercase">{service.title}</h2>
                <h3 className={cn("pt-2 text-[#5F6C72]", grotesk.className)}>
                  {service.description}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopifyServices;
