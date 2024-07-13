import Card1 from "./Card1";
import Card from "./Card";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start pt-0 px-0 pb-[131px] box-border gap-[66px] max-w-full text-left text-13xl text-black font-poppins mq750:gap-[33px] mq750:pb-[85px] mq750:box-border mq450:gap-[16px] ${className}`}
    >
      <div className="w-[641px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq1050:text-7xl">
          See these also ( Nearby stores)
        </h1>
      </div>
      <div className="w-[1296px] overflow-x-auto flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[32px] max-w-full mq750:gap-[16px]">
        <Card1
          tShirtForMen="T-shirt for men"
          categoryForMen="Category : for men"
        />
        <Card1
          tShirtForMen="Trouser for women"
          categoryForMen="Category : for women"
        />
        <Card />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
