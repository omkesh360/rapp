import PropTypes from "prop-types";

const DetailsContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[21px] box-border max-w-full text-left text-sm text-black font-small-text ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[6.5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="h-[148.6px] w-[107.8px] flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0 box-border">
            <img
              className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className="w-[459px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch rounded-xl bg-whitesmoke overflow-x-auto flex flex-row items-start justify-between py-2 pr-[34px] pl-2 gap-[20px]">
              <div className="rounded-lg bg-linen-100 flex flex-row items-center justify-center py-2 px-4">
                <img className="h-3 w-[19.7px] relative" alt="" src="/xs.svg" />
              </div>
              <div className="rounded-lg bg-linen-100 flex flex-row items-center justify-center py-2 px-4">
                <img className="h-3 w-[8.7px] relative" alt="" src="/s.svg" />
              </div>
              <div className="rounded-lg bg-linen-100 flex flex-row items-center justify-center py-2 px-4">
                <img
                  className="h-[11.6px] w-[11.8px] relative"
                  alt=""
                  src="/m.svg"
                />
              </div>
              <div className="rounded-lg bg-linen-100 flex flex-row items-center justify-center py-2 px-4">
                <img
                  className="h-[11.6px] w-[7px] relative"
                  alt=""
                  src="/l.svg"
                />
              </div>
              <div className="rounded-lg bg-linen-100 flex flex-row items-center justify-center py-2 px-4">
                <img
                  className="h-[11.6px] w-[18.5px] relative"
                  alt=""
                  src="/xl.svg"
                />
              </div>
              <div className="rounded-lg bg-linen-100 flex flex-row items-center justify-center py-2 px-4">
                <img
                  className="h-[11.6px] w-[29.2px] relative"
                  alt=""
                  src="/xxl.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[14px]">
              <div className="rounded-3xs overflow-hidden flex flex-row items-start justify-start p-2">
                <div className="rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px]">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[22px]">
                    4.6
                  </div>
                  <img
                    className="h-[19px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/starfill.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.6px] px-0 pb-0">
                <img
                  className="w-[33px] h-7 relative"
                  alt=""
                  src="/vector-111.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.6px] px-0 pb-0">
                <img
                  className="w-[27px] h-7 relative"
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
            </div>
            <div className="w-[167px] flex flex-row items-start justify-start gap-[12.1px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                <img
                  className="self-stretch h-[15px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/-subheading.svg"
                />
              </div>
              <div className="h-5 w-5 relative rounded-[50%] bg-gray-300" />
              <div className="h-5 w-5 relative rounded-[50%] bg-dimgray" />
              <div className="h-5 w-5 relative rounded-[50%] bg-navy" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-3xl text-red">
          <img
            className="h-[628px] w-[642.8px] absolute !m-[0] top-[-325px] left-[114.7px] rounded-xl overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="h-[303px] w-[107.8px] flex flex-col items-start justify-start gap-[11px]">
              <img
                className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-3@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className="w-[459px] flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="w-[316px] h-[30px] relative">
                  <div className="absolute top-[0px] left-[196px] rounded-lg bg-mistyrose flex flex-row items-start justify-start pt-[11.1px] pb-[11px] pr-2 pl-3 whitespace-nowrap">
                    <div className="h-[30px] w-[120px] relative rounded-lg bg-mistyrose hidden" />
                    <b className="h-[7.9px] relative tracking-[-0.02em] flex items-center min-w-[100px] z-[1]">
                      50% OFF
                    </b>
                  </div>
                  <div className="absolute top-[11.2px] left-[0px] w-[238px] h-[7.9px] text-gray-100">
                    <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] font-medium flex items-center w-full h-full z-[2] mq450:text-lg">
                      <span className="w-full">
                        <span className="whitespace-pre-wrap">{`Rs. 1200    `}</span>
                        <span className="text-black">Rs. 600</span>
                      </span>
                    </div>
                    <img
                      className="absolute top-[3.1px] left-[0px] w-[91px] h-[3.3px] object-contain z-[3]"
                      alt=""
                      src="/line-4.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14.5px] text-justify text-base text-silver">
                  <blockquote className="m-0 self-stretch relative tracking-[-0.02em] leading-[110%] font-semibold">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </blockquote>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq450:flex-wrap mq450:gap-[16px]">
                    <button className="cursor-pointer [border:none] py-3.5 px-6 bg-plum-100 w-[199px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center justify-center box-border">
                      <img
                        className="h-[11.8px] w-[84.9px] relative"
                        alt=""
                        src="/add-to-cart.svg"
                      />
                    </button>
                    <button className="cursor-pointer py-3 px-6 bg-darkslateblue-500 flex-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg box-border flex flex-row items-center justify-center min-w-[148px] border-[1px] border-solid border-yellowgreen">
                      <img
                        className="h-[14.9px] w-[66.1px] relative"
                        alt=""
                        src="/buy-now.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailsContent.propTypes = {
  className: PropTypes.string,
};

export default DetailsContent;
