import PropTypes from "prop-types";

const Card1 = ({ className = "", tShirtForMen, categoryForMen }) => {
  return (
    <div
      className={`w-[406px] shrink-0 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-xl text-black font-small-text ${className}`}
    >
      <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-end justify-between py-[11px] px-0 box-border bg-[url('/public/image5@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[277px] gap-[20px] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <img
            className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/pluscircle-fill.svg"
          />
        </div>
        <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border">
          <img
            className="h-[10.4px] w-[27.6px] relative"
            loading="lazy"
            alt=""
            src="/buy.svg"
          />
        </div>
      </div>
      <div className="w-[217px] flex flex-col items-start justify-start gap-[2.5px]">
        <div className="self-stretch relative leading-[110%] font-semibold mq450:text-base mq450:leading-[18px]">
          {tShirtForMen}
        </div>
        <div className="self-stretch relative text-sm leading-[19px] font-semibold text-gray-100">
          {categoryForMen}
        </div>
        <b className="w-[72px] relative text-base leading-[19px] inline-block text-mediumpurple-200">
          Rs. 500
        </b>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  tShirtForMen: PropTypes.string,
  categoryForMen: PropTypes.string,
};

export default Card1;
