import Card1 from "./Card1";
import Card from "./Card";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[17px] pr-0 pl-px box-border max-w-full text-left text-9xl text-black font-small-text ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[73px] max-w-full mq750:gap-[36px] mq450:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pr-0 pl-[21px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-end justify-start gap-[17px] max-w-full">
            <div className="w-[1263px] flex flex-col items-start justify-start gap-[26px] max-w-full">
              <div className="w-[308px] flex flex-row items-start justify-start py-0 px-1 box-border">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[32px] mq450:gap-[16px]">
                  <div className="relative tracking-[-0.02em] leading-[31px] font-semibold inline-block min-w-[110px] mq450:text-3xl mq450:leading-[25px]">
                    Reviews
                  </div>
                  <input
                    className="w-full [border:none] [outline:none] font-semibold font-small-text text-9xl bg-[transparent] h-[31px] flex-1 relative tracking-[-0.02em] leading-[110%] text-silver text-left inline-block min-w-[103px] p-0 mq450:text-3xl mq450:leading-[25px]"
                    placeholder=" Description"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-500" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
              <div className="w-[521px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[521px] max-w-full lg:flex-1 mq750:min-w-full">
                <div className="self-stretch bg-style flex flex-row items-start justify-start pt-4 pb-[28.2px] pr-[41px] pl-4 box-border gap-[16px] max-w-full mq750:flex-wrap">
                  <img
                    className="h-12 w-12 relative rounded-981xl overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[16px] min-w-[260px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-center pt-0 px-0 pb-0">
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[230px] pl-0 gap-[4px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                        <img
                          className="h-3 w-[57px] relative"
                          alt=""
                          src="/charles.svg"
                        />
                        <img
                          className="h-[15.3px] w-[108.2px] relative"
                          loading="lazy"
                          alt=""
                          src="/in-group-name.svg"
                        />
                      </div>
                      <img
                        className="w-[68.7px] h-[15.3px] relative"
                        loading="lazy"
                        alt=""
                        src="/2-hrs-ago.svg"
                      />
                    </div>
                    <img
                      className="w-[355px] relative max-h-full max-w-full"
                      loading="lazy"
                      alt=""
                      src="/body-text-for-a-post-since-its-a-social-app-sometimes-its-a-hot-take-and-sometimes-its-a-question.svg"
                    />
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[172px] pl-0 gap-[16px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/heart.svg"
                        />
                        <img
                          className="h-[12.3px] w-[47.2px] relative"
                          alt=""
                          src="/6-likes.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[86px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/messagesquare.svg"
                        />
                        <img
                          className="h-3 w-[100.6px] relative"
                          loading="lazy"
                          alt=""
                          src="/18-comments.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[514px] flex flex-col items-end justify-start gap-[16px] min-w-[514px] max-w-full lg:flex-1 mq750:min-w-full">
                <div className="self-stretch bg-style flex flex-row items-start justify-start pt-4 pb-[9px] pr-[34px] pl-4 box-border gap-[16px] max-w-full mq750:flex-wrap">
                  <img
                    className="h-12 w-12 relative rounded-981xl overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center py-[13.6px] px-0 box-border gap-[16px] min-w-[260px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-center pt-0 px-0 pb-0">
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[230px] pl-0 gap-[4px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                        <img
                          className="h-3 w-[57px] relative"
                          alt=""
                          src="/charles.svg"
                        />
                        <img
                          className="h-[15.3px] w-[108.2px] relative"
                          alt=""
                          src="/in-group-name.svg"
                        />
                      </div>
                      <img
                        className="w-[68.7px] h-[15.3px] relative"
                        alt=""
                        src="/2-hrs-ago.svg"
                      />
                    </div>
                    <img
                      className="w-[355px] relative max-h-full max-w-full"
                      alt=""
                      src="/body-text-for-a-post-since-its-a-social-app-sometimes-its-a-hot-take-and-sometimes-its-a-question-1.svg"
                    />
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[172px] pl-0 gap-[16px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/heart.svg"
                        />
                        <img
                          className="h-[12.3px] w-[47.2px] relative"
                          alt=""
                          src="/6-likes.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[86px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/messagesquare.svg"
                        />
                        <img
                          className="h-3 w-[100.6px] relative"
                          alt=""
                          src="/18-comments.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 px-1.5">
                  <button className="cursor-pointer [border:none] py-[11px] px-[55px] bg-plum-100 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslateblue-200">
                    <div className="relative text-base tracking-[-0.02em] leading-[18px] font-semibold font-small-text text-style text-justify inline-block min-w-[85px]">
                      Show More
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[501px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-13xl font-poppins">
          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq1050:text-7xl">
            From the same showroom
          </h1>
        </div>
        <div className="w-[1296px] overflow-x-auto flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[32px] max-w-full text-xl mq750:gap-[16px]">
          <Card1
            tShirtForMen="T-shirt for men"
            categoryForMen="Category : for men"
          />
          <Card1
            tShirtForMen="Trouser for women"
            categoryForMen="Category : for women"
          />
          <Card />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
