import { grotesk } from "@/app/fonts";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ShopifyServices = () => {
  return (
    <ul
      className={cn(
        "flex h-[120px] w-full items-center justify-between rounded-lg border-[2px] border-gray-100 px-8",
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
  );
};

export default ShopifyServices;
