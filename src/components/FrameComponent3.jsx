import WishlistActions from "./WishlistActions";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[49px] max-w-full text-left text-6xl text-gray-100 font-small-text mq750:gap-[24px] mq1150:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border max-w-full mq750:min-w-full">
        <div className="self-stretch rounded-lg box-border flex flex-row items-start justify-start pt-3.5 px-[15px] pb-[5px] gap-[17px] max-w-full z-[2] border-[1px] border-solid border-gainsboro-200 mq750:flex-wrap">
          <div className="h-[164px] w-[872px] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-gainsboro-200" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[29px] max-w-full mq750:flex-wrap">
              <img
                className="h-[127px] w-[168px] relative rounded-lg overflow-hidden shrink-0 object-cover mq750:flex-1"
                alt=""
                src="/hero-image-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[5.5px] min-w-[283px] max-w-full">
                <h3 className="m-0 w-[382px] relative text-inherit leading-[28px] font-semibold font-inherit text-black inline-block max-w-full mq450:text-xl mq450:leading-[22px]">
                  Men slim fit collar shirt
                </h3>
                <div className="self-stretch relative text-xl leading-[150%] mq450:text-base mq450:leading-[24px]">
                  for Men’s - Formal
                </div>
                <div className="w-[383px] h-[69px] relative max-w-full text-smi">
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[13px]">
                    <div className="w-[62px] flex flex-row items-start justify-start gap-[3px]">
                      <div className="flex-1 relative leading-[20px]">
                        Size -
                      </div>
                      <div className="relative leading-[20px] font-medium text-black inline-block min-w-[12px]">
                        M
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-5xl">
                      <b className="relative leading-[150%] inline-block min-w-[84px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                        ₹ 1035
                      </b>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[80px] w-[176.1px] flex flex-col items-start justify-start gap-[13px]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="w-16 flex flex-col items-start justify-start py-0 px-0 box-border">
                        <div className="mr-[-10px] w-[74px] relative leading-[20px] flex items-center shrink-0">
                          Colour -
                        </div>
                      </div>
                      <div className="relative leading-[20px] font-medium text-black inline-block min-w-[28px] shrink-0 z-[1]">
                        Blue
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start relative text-5xl text-black">
                      <div className="h-0.5 w-[77.7px] absolute !m-[0] bottom-[16px] left-[-74px] box-border z-[1] border-t-[2px] border-solid border-black" />
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[13px]">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[7px]">
                          <b className="flex-1 relative leading-[150%] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                            ₹ 770
                          </b>
                          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-base text-style">
                            <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-plum-100 flex flex-row items-start justify-start py-[3px] px-[19px] z-[3]">
                              <div className="relative leading-[150%] uppercase font-medium inline-block min-w-[37px] z-[4]">
                                QTY.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[36px] left-[285px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-plum-200 box-border w-[77.1px] flex flex-row items-start justify-start py-px px-[33px] z-[3] text-base border-[1px] border-solid border-gray-100">
                    <div className="relative leading-[150%] font-medium inline-block min-w-[8px] z-[4]">
                      1
                    </div>
                  </div>
                  <img
                    className="absolute top-[41px] left-[366px] w-[17px] h-5 overflow-hidden z-[3]"
                    alt=""
                    src="/plussquare.svg"
                  />
                  <input
                    className="m-0 absolute top-[41px] left-[264px] w-[17px] h-5 z-[3]"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>
          <WishlistActions propGap="77px" />
        </div>
      </div>
      <div className="w-[387px] flex flex-col items-start justify-start gap-[29px] min-w-[387px] max-w-full text-base text-style mq750:min-w-full mq1150:flex-1">
        <div className="flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
          <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-plum-200 flex flex-row items-start justify-start py-3 pr-[57px] pl-[58px] whitespace-nowrap border-[1px] border-solid border-gainsboro-400">
            <div className="relative leading-[150%] font-medium inline-block min-w-[68px]">
              <span>{` `}</span>
              <span className="text-gray-100">QXVJHS</span>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3.5 px-[39px] bg-plum-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslateblue-200">
            <div className="relative text-base leading-[150%] uppercase font-medium font-small-text text-style text-left inline-block min-w-[107px]">
              use Coupon
            </div>
          </button>
        </div>
        <button className="cursor-pointer [border:none] py-3.5 px-5 bg-mediumpurple-200 self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-center whitespace-nowrap hover:bg-orchid">
          <div className="relative text-base leading-[150%] font-medium font-small-text text-style text-left">
            PROCEED TO CHECKOUT
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
