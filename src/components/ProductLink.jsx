import { useMemo } from "react";
import PropTypes from "prop-types";

const ProductLink = ({ className = "", roundNeckTShirt, propMinWidth }) => {
  const productLinkStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`w-[317px] flex flex-col items-start justify-start gap-[24px] text-left text-3xl text-black font-small-text ${className}`}
      style={productLinkStyle}
    >
      <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[148px] px-0 pb-0 box-border gap-[192px] bg-[url('/public/image13@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:gap-[96px]">
        <div className="h-[52px] flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border">
          <img
            className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
            alt=""
            src="/pluscircle-fill.svg"
          />
        </div>
        <div className="h-[132px] w-[170px] flex flex-row items-end justify-start gap-[23px] shrink-0">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <img
              className="self-stretch h-[52px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/group-238.svg"
            />
          </div>
          <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border shrink-0">
            <img
              className="h-[10.4px] w-[27.6px] relative"
              loading="lazy"
              alt=""
              src="/buy.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[52px] mq450:flex-wrap mq450:gap-[26px]">
        <div className="flex flex-col items-start justify-start gap-[3.5px]">
          <h3 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit mq450:text-lg mq450:leading-[19px]">
            {roundNeckTShirt}
          </h3>
          <div className="relative text-sm leading-[16px] font-semibold text-gray-100">
            Category : Men’s Wear
          </div>
          <b className="w-[72px] relative text-base leading-[19px] inline-block text-mediumpurple-200">
            Rs. 600
          </b>
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
    </div>
  );
};

ProductLink.propTypes = {
  className: PropTypes.string,
  roundNeckTShirt: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default ProductLink;
