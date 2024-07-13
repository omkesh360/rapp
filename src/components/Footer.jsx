import BrandInfo from "./BrandInfo";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[19px] box-border max-w-full text-left text-11xl text-darkslateblue-500 font-small-text ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px]">
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
        <div className="w-[1235px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <BrandInfo />
          <div className="w-[601px] flex flex-row items-start justify-start [row-gap:20px] max-w-full text-base text-darkslategray-100 mq750:flex-wrap">
            <div className="w-[190px] flex flex-col items-start justify-start gap-[24px] min-w-[190px] mq750:flex-1">
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
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[267px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[31px] text-black mq450:flex-wrap mq450:gap-[15px]">
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[123px] z-[1]">
                  COMPANY INFO
                </div>
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[123px]">
                  QUICK LINKS
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[31px] mq450:gap-[15px]">
                <div className="flex-1 relative leading-[150%] font-medium whitespace-nowrap z-[1]">
                  About us
                </div>
                <div className="flex-1 relative leading-[150%] font-medium whitespace-nowrap">
                  Customer Service
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[31px] mq450:flex-wrap mq450:gap-[15px]">
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[123px] z-[1]">
                  Locations
                </div>
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[123px]">{`Legal & Privacy`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[31px] mq450:flex-wrap mq450:gap-[15px]">
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[123px] z-[1]">
                  Store
                </div>
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[123px]">
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

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
