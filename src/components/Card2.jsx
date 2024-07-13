import PropTypes from "prop-types";

const Card2 = ({ className = "", suitForWomen }) => {
  return (
    <div
      className={`h-[382px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[51px] box-border gap-[24px] min-w-[118px] text-left text-xl text-black font-small-text mq450:pb-[33px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex-1 rounded-lg overflow-hidden flex flex-row items-end justify-start gap-[189px] bg-[url('/public/image1@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:gap-[94px]">
        <img
          className="h-[31px] w-[41px] relative overflow-hidden shrink-0"
          alt=""
          src="/pluscircle-fill.svg"
        />
        <div className="mb-[-1px] w-[164px] flex flex-row items-start justify-between shrink-0 gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <button className="cursor-pointer [border:none] py-[5px] px-[18px] bg-darkslateblue-400 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl flex flex-row items-start justify-start hover:bg-darkslateblue-100">
              <div className="relative text-sm leading-[150%] font-medium font-small-text text-style text-left inline-block min-w-[30px]">
                BUY
              </div>
            </button>
          </div>
          <button className="cursor-pointer [border:none] py-[5px] px-[18px] bg-darkslateblue-400 h-[31px] w-[66px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl flex flex-row items-start justify-start box-border hover:bg-darkslateblue-100">
            <div className="self-stretch flex-1 relative text-sm leading-[150%] font-medium font-small-text text-style text-left flex items-center">
              BUY
            </div>
          </button>
        </div>
      </div>
      <div className="w-[217px] flex flex-col items-start justify-start gap-[2.5px]">
        <div className="self-stretch relative leading-[110%] font-semibold mq450:text-base mq450:leading-[18px]">
          {suitForWomen}
        </div>
        <div className="self-stretch relative text-sm leading-[19px] font-semibold text-gray-100">
          Category : for women
        </div>
        <b className="w-[72px] relative text-base leading-[19px] inline-block text-mediumpurple-200">
          Rs. 500
        </b>
      </div>
    </div>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  suitForWomen: PropTypes.string,
};

export default Card2;
