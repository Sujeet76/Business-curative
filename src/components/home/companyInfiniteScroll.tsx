import { companyDetails } from "@/constants";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const CompanyInfiniteScroll = () => {
  return (
    <InfiniteMovingCards
      items={companyDetails}
      direction='right'
      speed='normal'
    />
  );
};

export default CompanyInfiniteScroll;
