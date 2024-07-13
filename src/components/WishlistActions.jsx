import { useMemo } from "react";
import PropTypes from "prop-types";

const WishlistActions = ({ className = "", propGap }) => {
  const wishlistActionsStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex flex-col items-end justify-start gap-[68px] ${className}`}
      style={wishlistActionsStyle}
    >
      <div className="flex flex-row items-start justify-end py-0 px-0.5">
        <img
          className="h-[25px] w-7 relative overflow-hidden shrink-0 z-[3]"
          loading="lazy"
          alt=""
          src="/trash.svg"
        />
      </div>
      <button className="cursor-pointer py-[5px] px-5 bg-linen-200 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-gray-100">
        <div className="relative text-sm leading-[150%] font-medium font-small-text text-gray-100 text-left inline-block min-w-[124px]">
          ADD TO WISHLIST
        </div>
        <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
          <img
            className="w-4 h-3.5 relative overflow-hidden shrink-0"
            alt=""
            src="/suitheart.svg"
          />
        </div>
      </button>
    </div>
  );
};

WishlistActions.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default WishlistActions;
