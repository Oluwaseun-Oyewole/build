import { formatCurrency } from "@/lib/utils";

const PriceTag = ({ amount }: { amount: number }) => {
  return (
    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-secondary-600 text-xs text-white md:h-[70px] md:w-[70px] md:text-base">
      {formatCurrency(amount)}
    </div>
  );
};

export default PriceTag;
