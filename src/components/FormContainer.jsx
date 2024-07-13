import WishlistActions from "./WishlistActions";
import PropTypes from "prop-types";

const FormContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[49px] max-w-full text-left text-base text-gray-200 font-small-text mq750:gap-[24px] mq1150:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center max-w-full mq450:gap-[16px]">
          <div className="flex-1 flex flex-col items-center justify-center max-w-full mq1150:flex-1">
            <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-style box-border flex flex-row items-center justify-center py-5 px-[15px] gap-[8px] max-w-full border-[1px] border-solid border-gainsboro-200 mq750:flex-wrap">
              <div className="flex-1 relative leading-[150%] inline-block min-w-[186px] max-w-full">
                <p className="m-0">
                  <span className="font-medium font-small-text text-gray-100">{`Deliver to- `}</span>
                  <span>
                    <span className="font-semibold font-small-text">Joe</span>
                    <b className="font-small-text">{` `}</b>
                    <span className="font-semibold font-small-text">Biden</span>
                    <b className="font-small-text">{` , `}</b>
                    <span className="font-semibold">432356</span>
                    <b className="font-small-text">{` `}</b>
                  </span>
                </p>
                <p className="m-0 font-medium text-gray-100">NEW YORK , USA</p>
              </div>
              <button className="cursor-pointer [border:none] py-1 pr-[74px] pl-[76px] bg-darkslateblue-300 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center hover:bg-mediumpurple-100">
                <div className="relative text-xl leading-[150%] font-medium font-small-text text-style text-left inline-block min-w-[86px] mq450:text-base mq450:leading-[24px]">
                  CHANGE
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg box-border flex flex-row items-end justify-center pt-[17px] px-[15px] pb-3 relative gap-[17px] max-w-full z-[2] text-6xl text-gray-100 border-[1px] border-solid border-gainsboro-200 mq750:flex-wrap">
          <div className="h-0.5 w-[77.7px] absolute !m-[0] bottom-[29px] left-[213px] box-border z-[1] border-t-[2px] border-solid border-black" />
          <div className="h-[164px] w-[872px] relative rounded-lg box-border hidden max-w-full z-[1] border-[1px] border-solid border-gainsboro-200" />
          <div className="flex-1 flex flex-row items-start justify-center gap-[29px] min-w-[411px] max-w-full mq750:flex-wrap mq750:min-w-full">
            <img
              className="h-[127px] w-[168px] relative rounded-lg overflow-hidden shrink-0 object-cover min-h-[127px] mq750:flex-1"
              loading="lazy"
              alt=""
              src="/hero-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[3.5px] min-w-[283px] max-w-full">
              <h3 className="m-0 w-[382px] relative text-inherit leading-[28px] font-semibold font-inherit text-black inline-block max-w-full mq450:text-xl mq450:leading-[22px]">
                Blue Denim Jacket
              </h3>
              <div className="self-stretch relative text-xl leading-[150%] mq450:text-base mq450:leading-[24px]">
                for Men’s - casual
              </div>
              <div className="w-[383px] h-[61px] relative max-w-full text-smi">
                <div className="absolute top-[0px] left-[0px] w-[91px] flex flex-col items-start justify-start gap-[5px]">
                  <div className="w-[62px] flex flex-row items-start justify-start gap-[3px]">
                    <div className="flex-1 relative leading-[20px]">Size -</div>
                    <div className="relative leading-[20px] font-medium text-black inline-block min-w-[12px]">
                      M
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] text-5xl">
                    <b className="flex-1 relative leading-[150%] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                      ₹ 700
                    </b>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[80px] w-[176.1px] flex flex-col items-start justify-start gap-[5px]">
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
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[18px] text-5xl text-black">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[2px]">
                      <b className="flex-1 relative leading-[150%] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                        ₹ 230
                      </b>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-base text-style">
                        <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-plum-100 flex flex-row items-start justify-start py-[3px] px-[19px] z-[3]">
                          <div className="relative leading-[150%] uppercase font-medium inline-block min-w-[37px] z-[4]">
                            QTY.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[29px] left-[285px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-plum-200 box-border w-[77.1px] flex flex-row items-start justify-start py-px px-[33px] z-[3] text-base border-[1px] border-solid border-gray-100">
                  <div className="relative leading-[150%] font-medium inline-block min-w-[8px] z-[4]">
                    1
                  </div>
                </div>
                <img
                  className="absolute top-[34px] left-[366px] w-[17px] h-5 overflow-hidden z-[3]"
                  loading="lazy"
                  alt=""
                  src="/plussquare.svg"
                />
                <input
                  className="m-0 absolute top-[34px] left-[264px] w-[17px] h-5 z-[3]"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
            <WishlistActions />
          </div>
        </div>
      </div>
      <div className="w-[387px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[387px] max-w-full text-black mq750:min-w-full mq1150:flex-1">
        <div className="self-stretch shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] rounded-lg box-border overflow-hidden flex flex-col items-start justify-start pt-[22px] pb-[11px] pr-0.5 pl-[23px] gap-[5px] max-w-full border-[1px] border-solid border-gainsboro-200">
          <div className="relative leading-[150%] font-semibold text-gray-100 inline-block min-w-[117px]">
            PRICE DETAILS
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between pt-2.5 pb-3 pr-[22px] pl-0 gap-[20px] z-[1] border-t-[1px] border-solid border-gainsboro-200 mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="w-[197px] relative leading-[150%] font-medium inline-block shrink-0">
                  Price
                </div>
                <div className="relative leading-[150%] text-right inline-block min-w-[50px] whitespace-nowrap">
                  ₹ 1735
                </div>
              </div>
              <div className="w-[339px] box-border flex flex-row items-start justify-between pt-2.5 pb-1.5 pr-5 pl-0 max-w-full gap-[20px] mt-[-9px] border-t-[1px] border-solid border-gainsboro-200 mq450:flex-wrap mq450:pl-5 mq450:box-border">
                <div className="w-44 relative leading-[150%] font-medium inline-block shrink-0">
                  Discount
                </div>
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-right">
                  <div className="relative leading-[150%] inline-block min-w-[45px]">
                    -₹735
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[339px] box-border flex flex-row items-start justify-between pt-2.5 pb-3 pr-[18px] pl-0 max-w-full gap-[20px] border-t-[1px] border-solid border-gainsboro-200 mq450:flex-wrap mq450:pl-[18px] mq450:box-border">
              <div className="w-44 relative leading-[150%] font-medium inline-block shrink-0">
                Delivery Charges
              </div>
              <div className="relative leading-[150%] text-right inline-block min-w-[37px] whitespace-nowrap">
                ₹100
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between pt-2.5 pb-1.5 pr-5 pl-0 gap-[20px] border-t-[1px] border-solid border-gainsboro-200 mq450:flex-wrap mq450:pl-5 mq450:box-border">
            <div className="w-[197px] relative leading-[150%] font-semibold inline-block shrink-0">
              Total Amount
            </div>
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-right">
              <div className="relative leading-[150%] inline-block min-w-[44px] whitespace-nowrap">
                ₹1100
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
