import { useMemo } from "react";
import PropTypes from "prop-types";

const ProductDetails1 = ({
  className = "",
  casualWearShirt,
  propWidth,
  propGap,
}) => {
  const productDetailsStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  return (
    <div
      className={`w-[317px] flex flex-row items-start justify-between gap-[20px] text-left text-3xl text-black font-small-text ${className}`}
      style={productDetailsStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-[3.5px]">
          <h3 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit mq450:text-lg mq450:leading-[19px]">
            {casualWearShirt}
          </h3>
          <div className="relative text-sm leading-[16px] font-semibold text-gray-100">
            Category : Men’s Wear
          </div>
          <b className="w-[72px] relative text-base leading-[19px] inline-block text-mediumpurple-200">
            Rs. 600
          </b>
        </div>
      </div>
      <div className="h-[23px] rounded-3xs overflow-hidden flex flex-row items-start justify-start text-xs">
        <div className="mt-[-5px] ml-[-4px] rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px] shrink-0">
          <div className="relative leading-[17px] font-medium inline-block min-w-[19px]">
            4.6
          </div>
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-2.5 h-[11px] relative overflow-hidden shrink-0"
              alt=""
              src="/starfill1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails1.propTypes = {
  className: PropTypes.string,
  casualWearShirt: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
};

export default ProductDetails1;
