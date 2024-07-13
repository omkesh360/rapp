import { Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[310px] relative text-center text-lg text-gray-100 font-small-text mq450:h-auto mq450:min-h-[310] ${className}`}
    >
      <img
        className="absolute top-[172.5px] left-[890px] w-[435.6px] h-[30.9px]"
        loading="lazy"
        alt=""
        src="/product-name.svg"
      />
      <div className="absolute top-[227.4px] left-[890px] leading-[20px] font-semibold text-left inline-block w-[453.9px]">
        Category : Men’s Shirts
      </div>
      <div className="absolute top-[277.3px] left-[890px] w-[102.3px] h-[15.2px]">
        <img
          className="absolute top-[3.9px] left-[92.7px] w-[9.6px] h-[11.3px]"
          alt=""
          src="/stars.svg"
        />
        <img
          className="absolute top-[4.1px] left-[82.4px] w-[8.6px] h-[10.9px]"
          alt=""
          src="/vector-11.svg"
        />
        <img
          className="absolute top-[0px] left-[77.7px] w-[2.4px] h-[15px]"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="absolute top-[0.2px] left-[64.8px] w-[10.5px] h-[15px]"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="absolute top-[1.5px] left-[51.4px] w-[5.9px] h-[13.7px]"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="absolute top-[3.9px] left-[40.7px] w-[9.2px] h-[11.3px]"
          alt=""
          src="/vector-5.svg"
        />
        <img
          className="absolute top-[3.9px] left-[29px] w-[9.6px] h-[11.3px]"
          alt=""
          src="/vector-6.svg"
        />
        <img
          className="absolute top-[0.4px] left-[24.8px] w-[1.7px] h-[14.5px]"
          alt=""
          src="/vector-7.svg"
        />
        <img
          className="absolute top-[3.9px] left-[12.6px] w-[9.6px] h-[11.3px]"
          alt=""
          src="/vector-8.svg"
        />
        <img
          className="absolute top-[0.2px] left-[0px] w-[10.5px] h-[15px]"
          alt=""
          src="/vector-9.svg"
        />
      </div>
      <div className="absolute top-[271.4px] left-[1223px] [text-decoration:underline] font-outfit text-darkslateblue-400 inline-block min-w-[115px]">
        See Size Chart
      </div>
      <img
        className="absolute top-[164px] left-[77.1px] rounded-xl w-[107.8px] h-[146px] overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src="/image4@2x.png"
      />
      <header className="absolute top-[0px] left-[0px] bg-style box-border w-[1478px] overflow-hidden flex flex-row items-end justify-start pt-[52px] px-[61px] pb-[55px] gap-[32px] z-[1] text-left text-16xl text-darkslateblue-500 font-small-text border-[1px] border-solid border-black">
        <h1 className="m-0 relative text-inherit leading-[53px] font-bold font-inherit">
          RAPPAREL
        </h1>
        <div className="w-[650px] flex flex-col items-start justify-end pt-0 pb-1.5 pr-[11px] pl-0 box-border max-w-full">
          <div className="self-stretch rounded-sm bg-style box-border flex flex-row items-start justify-start py-1.5 px-3 gap-[12px] max-w-full border-[1px] border-solid border-gainsboro-200">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/search.svg"
            />
            <input
              className="w-[calc(100%_-_48px)] [border:none] [outline:none] font-small-text text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-gray-100 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-[calc(100%_-_36px)] p-0"
              placeholder="Search products..."
              type="text"
            />
          </div>
        </div>
        <div className="w-[408px] flex flex-row flex-wrap items-end justify-start gap-[54px] max-w-full">
          <div className="w-[162px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
            <Select className="self-stretch font-small-text font-medium text-6xl text-darkslategray-200" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-between min-w-[125px] gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
              <img
                className="w-[42px] h-[35px] relative"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
            <img
              className="h-[52px] w-[52px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/bagplus.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <img
                className="w-[42px] h-[38px] relative"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="absolute top-[124px] left-[224px] w-20 h-20 text-3xl text-style">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red w-full h-full z-[2]" />
        <h3 className="m-0 absolute top-[21px] left-[11px] text-inherit leading-[33px] font-medium font-inherit flex items-center justify-center w-[58px] h-[33px] z-[3] mq450:text-lg mq450:leading-[25px]">
          Sale!
        </h3>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
