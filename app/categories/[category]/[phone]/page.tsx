import Wrapper from "@/components/custom/wrapper";

const Phones = ({
  params: { category, phone },
}: {
  params: { category: string; phone: string };
}) => {
  return (
    <Wrapper>
      Phones -- {category} - {phone}
    </Wrapper>
  );
};

export default Phones;
