import { formatCurrency } from "@/lib/utils";

const PriceTag = ({ amount }: { amount: number }) => {
  return (
    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-secondary-600 text-base text-white">
      {formatCurrency(amount)}
    </div>
  );
};

export default PriceTag;
