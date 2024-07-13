import Card2 from "./Card2";
import PropTypes from "prop-types";

const Recommendations = ({ className = "" }) => {
  return (
    <section
      className={`w-[1308px] flex flex-row items-start justify-end py-0 px-[3px] box-border max-w-full text-left text-13xl text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[72px] max-w-full mq750:gap-[36px] mq450:gap-[18px]">
        <div className="w-[1257px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <h1 className="m-0 w-[275px] relative text-inherit font-semibold font-inherit flex items-end shrink-0 mq450:text-lgi mq1050:text-7xl">
              See these also...
            </h1>
            <div className="h-[57px] w-[120px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/group-26.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-5 pl-0 gap-[32px_31px] text-xl font-small-text mq750:gap-[15px]">
          <div className="h-[382px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border gap-[25px] min-w-[118px] mq450:pb-8 mq450:box-border">
            <div className="self-stretch flex-1 rounded-lg overflow-hidden flex flex-row items-end justify-between bg-[url('/public/image@3x.png')] bg-cover bg-no-repeat bg-[top] gap-[20px]">
              <img
                className="h-[31px] w-[41px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/pluscircle-fill.svg"
              />
              <button className="cursor-pointer [border:none] py-[5px] px-[18px] bg-darkslateblue-400 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl flex flex-row items-start justify-start hover:bg-darkslateblue-100">
                <div className="relative text-sm leading-[150%] font-medium font-small-text text-style text-left inline-block min-w-[30px]">
                  BUY
                </div>
              </button>
            </div>
            <div className="w-[217px] flex flex-col items-start justify-start gap-[2.5px]">
              <div className="self-stretch relative leading-[110%] font-semibold mq450:text-base mq450:leading-[18px]">
                Shorts for women
              </div>
              <div className="self-stretch relative text-sm leading-[19px] font-semibold text-gray-100">
                Category : for women
              </div>
              <b className="w-[72px] relative text-base leading-[19px] inline-block text-mediumpurple-200">
                Rs. 500
              </b>
            </div>
          </div>
          <Card2 suitForWomen="Suit for women" />
          <Card2 suitForWomen="Trouser for women" />
          <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[51px] pr-[5px] pl-0 box-border gap-[24px] min-w-[120px] text-sm text-style mq450:pb-[33px] mq450:box-border">
            <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-end justify-start gap-[189px] bg-[url('/public/image3@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[242px] mq450:flex-wrap mq450:gap-[94px]">
              <img
                className="h-[31px] w-[41px] relative overflow-hidden shrink-0"
                alt=""
                src="/pluscircle-fill.svg"
              />
              <div className="w-[146px] flex flex-row items-start justify-start gap-[42px] shrink-0">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <button className="cursor-pointer [border:none] py-[5px] px-[18px] bg-darkslateblue-400 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl flex flex-row items-start justify-start shrink-0 hover:bg-darkslateblue-100">
                    <div className="relative text-sm leading-[150%] font-medium font-small-text text-style text-left inline-block min-w-[30px]">
                      BUY
                    </div>
                  </button>
                </div>
                <div className="h-[31px] w-[66px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-start justify-start py-[5px] px-[18px] box-border shrink-0">
                  <div className="self-stretch flex-1 relative leading-[150%] font-medium flex items-center">
                    BUY
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[217px] flex flex-col items-start justify-start gap-[2.5px] text-xl text-black">
              <div className="self-stretch relative leading-[110%] font-semibold mq450:text-base mq450:leading-[18px]">
                Top for women
              </div>
              <div className="self-stretch relative text-sm leading-[19px] font-semibold text-gray-100">
                Category : for women
              </div>
              <b className="w-[72px] relative text-base leading-[19px] inline-block text-mediumpurple-200">
                Rs. 500
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Recommendations.propTypes = {
  className: PropTypes.string,
};

export default Recommendations;
