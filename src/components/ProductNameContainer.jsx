import { useMemo } from "react";
import PropTypes from "prop-types";

const ProductNameContainer = ({
  className = "",
  blackPantForMen,
  propWidth,
}) => {
  const productNameContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[201px] flex flex-col items-start justify-start gap-[3.5px] text-left text-3xl text-gray-100 font-small-text ${className}`}
      style={productNameContainerStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-black">
        <h3 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit mq450:text-lg mq450:leading-[19px]">
          {blackPantForMen}
        </h3>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-0.5 text-sm">
        <div className="relative leading-[16px] font-semibold">
          Category : Men’s Wear
        </div>
      </div>
      <div className="w-40 flex flex-row items-start justify-start gap-[10px] text-base">
        <div className="h-[19px] flex-1 relative">
          <div className="absolute top-[0px] left-[2px] leading-[19px] font-semibold inline-block w-[76px] h-[19px] min-w-[76px]">
            Rs. 1200
          </div>
          <img
            className="absolute top-[9px] left-[0px] w-[70.5px] h-0.5 z-[1]"
            alt=""
            src="/line-41.svg"
          />
        </div>
        <b className="flex-1 relative leading-[19px] text-mediumpurple-200">
          Rs. 500
        </b>
      </div>
    </div>
  );
};

ProductNameContainer.propTypes = {
  className: PropTypes.string,
  blackPantForMen: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default ProductNameContainer;
