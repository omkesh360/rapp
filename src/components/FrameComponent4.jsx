import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[39px] pr-[23px] pl-[9px] box-border max-w-full ${className}`}
    >
      <header className="flex-1 flex flex-row items-end justify-start gap-[32px] max-w-full text-left text-16xl text-darkslateblue-500 font-small-text mq750:gap-[16px]">
        <h1 className="m-0 relative text-inherit leading-[53px] font-bold font-inherit whitespace-nowrap">
          RAPPAREL
        </h1>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 pb-1.5 pr-[11px] pl-0 box-border max-w-full">
          <div className="self-stretch rounded-sm bg-style box-border flex flex-row items-start justify-start py-1.5 px-3 gap-[12px] max-w-full border-[1px] border-solid border-gainsboro-200">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/search.svg"
            />
            <input
              className="w-[calc(100%_-_48px)] [border:none] [outline:none] font-small-text text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-gray-100 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full p-0"
              placeholder="Search products..."
              type="text"
            />
          </div>
        </div>
        <div className="w-[408px] flex flex-row items-end justify-start gap-[54px] max-w-full text-6xl text-darkslategray-200 mq450:gap-[27px]">
          <div className="w-[162px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[28px] capitalize font-medium">
                Categories
              </div>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-5 h-2.5 relative object-contain z-[1]"
                  alt=""
                  src="/category-icon.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
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
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
