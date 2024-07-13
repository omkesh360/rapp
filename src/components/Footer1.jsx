import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[25px] pl-[26px] box-border max-w-full text-left text-16xl text-darkslateblue-500 font-small-text ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[42px] max-w-full mq750:gap-[21px]">
        <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gainsboro-100" />
        </div>
        <div className="w-[1256px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
              <h1 className="m-0 relative text-inherit leading-[53px] font-bold font-inherit mq450:text-2xl mq450:leading-[31px] mq1050:text-9xl mq1050:leading-[42px]">
                RAPPAREL
              </h1>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-2 text-sm text-gray-100">
              <div className="flex flex-row items-end justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                  <div className="w-[17px] h-[38px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-[17px] h-[13px]"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute top-[23px] left-[0px] w-[17px] h-[15px] overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/telephonefill.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                    <div className="relative leading-[150%] font-medium whitespace-nowrap">
                      support@rapparel.com
                    </div>
                  </div>
                  <div className="relative leading-[150%] font-medium">
                    0240 XXXXX XXXXX
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                loading="lazy"
                alt=""
                src="/buttons--icon@2x.png"
              />
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                alt=""
                src="/buttons--icon-1@2x.png"
              />
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                alt=""
                src="/buttons--icon-2@2x.png"
              />
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                alt=""
                src="/buttons--icon-3@2x.png"
              />
            </div>
          </div>
          <div className="w-[601px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border max-w-full text-base text-darkslategray-100">
            <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
              <div className="w-[190px] flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative leading-[150%] font-medium text-black">
                  SHOP
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Men
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Women
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Kids
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] min-w-[144px]">
                <div className="w-[190px] relative leading-[150%] font-medium text-black flex items-center">
                  COMPANY INFO
                </div>
                <div className="w-[190px] relative leading-[150%] font-medium flex items-center">
                  About us
                </div>
                <div className="w-[190px] relative leading-[150%] font-medium flex items-center">
                  Locations
                </div>
                <div className="w-[190px] relative leading-[150%] font-medium flex items-center">
                  Store
                </div>
              </div>
              <div className="w-[190px] flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative leading-[150%] font-medium text-black">
                  QUICK LINKS
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Customer Service
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">{`Legal & Privacy`}</div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
