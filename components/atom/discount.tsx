const Discount = ({ discountPercentage }: { discountPercentage: number }) => {
  return (
    <div className="rounded-md bg-yellow-_300 px-6 py-3 text-black">
      {discountPercentage}% OFF
    </div>
  );
};

export default Discount;
