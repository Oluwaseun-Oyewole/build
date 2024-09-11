import Wrapper from "@/components/custom/wrapper";

const SubCategory = ({
  params: { category },
}: {
  params: { category: string };
}) => {
  return <Wrapper>SubCategory -- {category}</Wrapper>;
};

export default SubCategory;
