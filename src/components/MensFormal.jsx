import ProductDetails1 from "./ProductDetails1";
import ProductDetails from "./ProductDetails";
import ProductNameContainer from "./ProductNameContainer";
import ProductLink from "./ProductLink";
import CasualShirtInfo from "./CasualShirtInfo";
import BrandInfo from "./BrandInfo";
import PropTypes from "prop-types";

const MensFormal = ({ className = "" }) => {
  return (
    <div
      className={`w-[1401px] bg-style max-w-full overflow-hidden flex flex-col items-end justify-start pt-[54px] px-9 pb-[133px] box-border relative gap-[65px] leading-[normal] tracking-[normal] text-center text-xs text-style font-small-text mq750:gap-[32px] mq450:gap-[16px] ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5px] pr-4 pl-[22px] box-border max-w-full text-left text-3xl text-gray-100 font-small-text">
        <div className="flex-1 flex flex-col items-end justify-start gap-[31px] max-w-full mq750:gap-[15px]">
          <header className="self-stretch h-[154px] relative max-w-full text-left text-base text-style font-small-text">
            <div className="absolute top-[7px] left-[217.2px] w-[747.8px] flex flex-col items-start justify-start gap-[63px] max-w-full">
              <div className="w-[574px] rounded-sm bg-style box-border flex flex-row items-start justify-start py-1.5 px-3 gap-[12px] max-w-full border-[1px] border-solid border-gainsboro-200">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/search1.svg"
                />
                <div className="flex-1 relative leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                  Search products...
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-center text-21xl text-darkslategray-200">
                <h1 className="m-0 flex-1 relative text-inherit leading-[110%] font-semibold font-inherit inline-block whitespace-nowrap max-w-full">
                  Men’s Formal
                </h1>
              </div>
            </div>
            <h1 className="m-0 absolute top-[0px] left-[0px] text-16xl leading-[53px] font-bold font-inherit text-darkslateblue-500 flex items-center w-[217px]">
              RAPPAREL
            </h1>
            <div className="absolute top-[1px] left-[899px] w-[392px] flex flex-row items-end justify-start gap-[38px] text-6xl">
              <div className="w-[162px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <h3 className="m-0 flex-1 relative text-inherit leading-[28px] capitalize font-medium font-inherit">
                    Categories
                  </h3>
                  <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                    <img
                      className="w-5 h-2.5 relative object-contain z-[1]"
                      alt=""
                      src="/vector.svg"
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
                    src="/group1.svg"
                  />
                </div>
                <img
                  className="h-[52px] w-[52px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/bagplus1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <img
                    className="w-[42px] h-[38px] relative"
                    loading="lazy"
                    alt=""
                    src="/group-11.svg"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="w-[1068px] flex flex-row items-start justify-end py-0 px-[27px] box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[20.5px] max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start relative min-w-[244px] max-w-full text-black">
                <div className="h-[200px] w-[317px] !m-[0] absolute bottom-[90px] left-[0px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[148px] px-0 pb-0 box-border gap-[195px] bg-[url('/public/image8@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <div className="h-[52px] flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border">
                    <img
                      className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/pluscircle-fill.svg"
                    />
                  </div>
                  <div className="h-[132px] w-[170px] flex flex-row items-end justify-start gap-[20px] shrink-0">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                      <img
                        className="self-stretch h-[52px] relative max-w-full overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/group-238.svg"
                      />
                    </div>
                    <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border">
                      <img
                        className="h-[10.4px] w-[27.6px] relative"
                        alt=""
                        src="/buy.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[269px] max-w-full mq450:gap-[134px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[148px] px-0 pb-0 box-border gap-[195px] bg-[url('/public/image9@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:gap-[97px]">
                        <div className="h-[52px] flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border">
                          <img
                            className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/pluscircle-fill.svg"
                          />
                        </div>
                        <div className="h-[132px] w-[170px] flex flex-row items-end justify-start gap-[20px] shrink-0">
                          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                            <img
                              className="self-stretch h-[52px] relative max-w-full overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/group-238.svg"
                            />
                          </div>
                          <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border">
                            <img
                              className="h-[10.4px] w-[27.6px] relative"
                              loading="lazy"
                              alt=""
                              src="/buy.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[3.5px]">
                          <h3 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit whitespace-nowrap mq450:text-lg mq450:leading-[19px]">{` Whitesmoke Shirt  `}</h3>
                          <div className="flex flex-row items-start justify-start py-0 px-1.5 text-sm text-gray-100">
                            <div className="relative leading-[16px] font-semibold">
                              Category : Men’s Wear
                            </div>
                          </div>
                          <div className="w-[84px] flex flex-row items-start justify-start py-0 px-1.5 box-border text-base text-mediumpurple-200">
                            <b className="flex-1 relative leading-[19px]">
                              Rs. 600
                            </b>
                          </div>
                        </div>
                        <div className="h-[23px] rounded-3xs overflow-hidden flex flex-row items-start justify-start text-xs">
                          <div className="mt-[-5px] ml-[-4px] rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px] shrink-0">
                            <div className="relative leading-[17px] font-medium inline-block min-w-[19px]">
                              4.6
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <img
                                className="w-2.5 h-[11px] relative overflow-hidden shrink-0"
                                alt=""
                                src="/starfill1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ProductDetails1 casualWearShirt="Casual wear Shirt " />
                </div>
                <div className="h-[47px] w-[47px] absolute !m-[0] right-[-37px] bottom-[266px] text-center text-xs text-style">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red w-full h-full z-[1]" />
                  <div className="absolute top-[13px] left-[6.7px] leading-[140%] font-medium flex items-center justify-center w-[35.4px] h-[20.4px] z-[2]">
                    Sale!
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[48px] min-w-[244px] max-w-full mq450:gap-[24px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                  <ProductDetails />
                </div>
                <div className="w-[317px] flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[148px] px-0 pb-0 box-border gap-[49px] bg-[url('/public/image11@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:h-auto mq450:gap-[24px]">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 px-0">
                      <img
                        className="h-[52px] w-[84px] relative"
                        loading="lazy"
                        alt=""
                        src="/group-238.svg"
                      />
                    </div>
                    <div className="w-[406px] flex flex-row items-start justify-between max-w-[129%] shrink-0 gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <img
                          className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/pluscircle-fill.svg"
                        />
                      </div>
                      <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border">
                        <img
                          className="h-[10.4px] w-[27.6px] relative"
                          loading="lazy"
                          alt=""
                          src="/buy.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[44px] mq450:flex-wrap mq450:gap-[22px]">
                    <div className="flex flex-col items-start justify-start gap-[3.5px]">
                      <h3 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit text-black mq450:text-lg mq450:leading-[19px]">{`Round neck T- Shirt `}</h3>
                      <div className="relative text-sm leading-[16px] font-semibold">
                        Category : Men’s Wear
                      </div>
                      <div className="w-[158px] flex flex-row items-start justify-start gap-[10px] text-base">
                        <div className="flex flex-row items-start justify-start relative">
                          <div className="relative leading-[19px] font-semibold inline-block min-w-[76px]">
                            Rs. 1200
                          </div>
                          <img
                            className="h-0.5 w-[70.5px] absolute !m-[0] right-[-0.5px] bottom-[7px] z-[1]"
                            alt=""
                            src="/line-41.svg"
                          />
                        </div>
                        <b className="flex-1 relative leading-[19px] text-mediumpurple-200">
                          Rs. 600
                        </b>
                      </div>
                    </div>
                    <div className="h-[23px] rounded-3xs overflow-hidden flex flex-row items-start justify-start text-xs text-black">
                      <div className="mt-[-5px] ml-[-4px] rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px] shrink-0">
                        <div className="relative leading-[17px] font-medium inline-block min-w-[19px]">
                          4.6
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <img
                            className="w-2.5 h-[11px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/starfill1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[243px] max-w-full text-xl mq450:gap-[21px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-3">
                  <div className="flex-1 bg-style flex flex-row items-start justify-start pt-[9px] pb-2 pr-[19px] pl-6 gap-[40px] border-[1px] border-solid border-gainsboro-300 mq450:gap-[20px]">
                    <div className="h-[47px] w-[301px] relative bg-style box-border hidden border-[1px] border-solid border-gainsboro-300" />
                    <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
                      <div className="relative leading-[110%] font-semibold z-[1] mq450:text-base mq450:leading-[18px]">
                        <span>Sort by</span>
                        <span className="text-black">{` : Popularity `}</span>
                      </div>
                    </div>
                    <img
                      className="h-[26.4px] w-[22.2px] relative min-h-[26px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pr-0 pl-[5px] text-xs text-black">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[24px]">
                    <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[148px] px-0 pb-0 box-border gap-[192px] bg-[url('/public/image12@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:gap-[96px]">
                      <div className="h-[52px] flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border">
                        <img
                          className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/pluscircle-fill.svg"
                        />
                      </div>
                      <div className="h-[132px] w-[163px] flex flex-row items-end justify-start gap-[23px] shrink-0">
                        <div className="self-stretch w-[84px] flex flex-col items-start justify-start shrink-0">
                          <img
                            className="self-stretch h-[52px] relative max-w-full overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/group-238.svg"
                          />
                        </div>
                        <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border shrink-0">
                          <img
                            className="h-[10.4px] w-[27.6px] relative"
                            alt=""
                            src="/buy.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <ProductNameContainer blackPantForMen="Black pant for men" />
                      <div className="h-[23px] rounded-3xs overflow-hidden flex flex-row items-start justify-start">
                        <div className="mt-[-5px] ml-[-4px] rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px] shrink-0">
                          <div className="relative leading-[17px] font-medium inline-block min-w-[19px]">
                            4.6
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <img
                              className="w-2.5 h-[11px] relative overflow-hidden shrink-0"
                              alt=""
                              src="/starfill1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ProductLink roundNeckTShirt="Round neck T-shirt" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1116px] flex flex-row items-start justify-end py-0 px-[53px] box-border max-w-full text-left text-xs text-black font-small-text mq1125:pl-[26px] mq1125:pr-[26px] mq1125:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[36px] max-w-full mq750:gap-[18px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[28px] max-w-full mq1025:flex-wrap">
              <ProductDetails
                propFlex="unset"
                propWidth="317px"
                propMinWidth="317px"
              />
              <div className="flex-1 flex flex-row items-start justify-start gap-[26px] min-w-[430px] max-w-full mq750:flex-wrap mq750:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[23px] min-w-[207px]">
                  <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[199px] px-0 pb-0 box-border relative gap-[299px] bg-[url('/public/image8@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:gap-[149px]">
                    <div className="h-[-49px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <img
                        className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/pluscircle-fill.svg"
                      />
                    </div>
                    <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border shrink-0">
                      <img
                        className="h-[10.4px] w-[27.6px] relative"
                        loading="lazy"
                        alt=""
                        src="/buy.svg"
                      />
                    </div>
                    <img
                      className="h-[52px] w-[84px] absolute !m-[0] right-[7px] bottom-[1px]"
                      loading="lazy"
                      alt=""
                      src="/group-238.svg"
                    />
                  </div>
                  <ProductDetails1
                    casualWearShirt="Blue Shirt for Men"
                    propWidth="unset"
                    propGap="50px"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[207px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                    <div className="h-[200px] w-[317px] rounded-lg overflow-hidden shrink-0 flex flex-col items-end justify-end pt-[148px] px-0 pb-0 box-border gap-[49px] bg-[url('/public/image13@3x.png')] bg-cover bg-no-repeat bg-[top] mq750:flex-1 mq450:h-auto mq450:gap-[24px]">
                      <img
                        className="w-[84px] h-[52px] relative shrink-0"
                        loading="lazy"
                        alt=""
                        src="/group-238.svg"
                      />
                      <div className="mr-[-89px] w-[406px] flex flex-row items-start justify-between max-w-[129%] shrink-0 gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <img
                            className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/pluscircle-fill.svg"
                          />
                        </div>
                        <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border">
                          <img
                            className="h-[10.4px] w-[27.6px] relative"
                            alt=""
                            src="/buy.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[38px] mq450:flex-wrap mq450:gap-[19px]">
                    <ProductNameContainer
                      blackPantForMen="Green shirt for men"
                      propWidth="unset"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="h-[23px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-start justify-start">
                        <div className="mt-[-5px] ml-[-4px] rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px] shrink-0">
                          <div className="relative leading-[17px] font-medium inline-block min-w-[19px]">
                            4.6
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <img
                              className="w-2.5 h-[11px] relative overflow-hidden shrink-0"
                              alt=""
                              src="/starfill1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[28px] max-w-full text-center text-style mq1025:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start gap-[21px] max-w-full mq750:flex-wrap mq750:min-w-full">
              <div className="flex-1 flex flex-col items-start justify-start relative gap-[24px] min-w-[211px] max-w-full">
                <div className="w-[317px] h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[148px] px-0 pb-0 box-border gap-[195px] bg-[url('/public/image14@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:gap-[97px]">
                  <div className="h-[52px] flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border">
                    <img
                      className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/pluscircle-fill.svg"
                    />
                  </div>
                  <div className="h-[132px] w-[170px] flex flex-row items-end justify-start gap-[20px] shrink-0">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                      <img
                        className="self-stretch h-[52px] relative max-w-full overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/group-238.svg"
                      />
                    </div>
                    <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border">
                      <img
                        className="h-[10.4px] w-[27.6px] relative"
                        alt=""
                        src="/buy.svg"
                      />
                    </div>
                  </div>
                </div>
                <CasualShirtInfo casualWearShirt="Casual wear Shirt " />
                <div className="w-[47px] h-[47px] absolute !m-[0] top-[-24px] right-[-40px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red w-full h-full z-[1]" />
                  <div className="absolute top-[13px] left-[6.7px] leading-[140%] font-medium flex items-center justify-center w-[35.4px] h-[20.4px] z-[2]">
                    Sale!
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[206px] text-left text-3xl text-gray-100">
                <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[199px] px-0 pb-0 box-border relative gap-[299px] bg-[url('/public/image15@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:gap-[149px]">
                  <div className="h-[-49px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/pluscircle-fill.svg"
                    />
                  </div>
                  <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border shrink-0">
                    <img
                      className="h-[10.4px] w-[27.6px] relative"
                      loading="lazy"
                      alt=""
                      src="/buy.svg"
                    />
                  </div>
                  <img
                    className="h-[52px] w-[84px] absolute !m-[0] right-[7px] bottom-[1px]"
                    loading="lazy"
                    alt=""
                    src="/group-238.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start gap-[44px] mq450:flex-wrap mq450:gap-[22px]">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <h3 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit text-black mq450:text-lg mq450:leading-[19px]">
                      Black Pant for Men
                    </h3>
                    <div className="relative text-sm leading-[110%] font-semibold">
                      Category : Men’s Wear
                    </div>
                    <div className="w-[158px] flex flex-row items-start justify-start gap-[10px] text-base">
                      <div className="flex flex-row items-start justify-start relative">
                        <div className="relative leading-[19px] font-semibold inline-block min-w-[76px]">
                          Rs. 1200
                        </div>
                        <img
                          className="h-0.5 w-[70.5px] absolute !m-[0] right-[-0.5px] bottom-[7px] z-[1]"
                          alt=""
                          src="/line-41.svg"
                        />
                      </div>
                      <b className="flex-1 relative leading-[19px] text-mediumpurple-200">
                        Rs. 600
                      </b>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-xs text-black">
                    <div className="h-[23px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-start justify-start">
                      <div className="mt-[-5px] ml-[-4px] rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px] shrink-0">
                        <div className="relative leading-[17px] font-medium inline-block min-w-[19px]">
                          4.6
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <img
                            className="w-2.5 h-[11px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/starfill1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductLink
              roundNeckTShirt="Black short for men"
              propMinWidth="317px"
            />
          </div>
        </div>
      </section>
      <section className="w-[1087px] flex flex-row items-start justify-end py-0 px-10 box-border max-w-full text-left text-3xl text-gray-100 font-small-text">
        <div className="flex-1 grid flex-row items-start justify-start gap-[28px] max-w-full grid-cols-[repeat(3,_minmax(238px,_1fr))] mq750:grid-cols-[minmax(238px,_1fr)] mq1025:justify-center mq1025:grid-cols-[repeat(2,_minmax(238px,_412px))]">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-col items-start justify-end pt-36 px-0 pb-1 box-border gap-[53px] bg-[url('/public/image17@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:h-auto mq450:gap-[26px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-0">
                <img
                  className="h-[52px] w-[84px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-238.svg"
                />
              </div>
              <div className="w-[406px] flex flex-row items-start justify-between max-w-[129%] shrink-0 gap-[20px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/pluscircle-fill.svg"
                  />
                </div>
                <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border">
                  <img
                    className="h-[10.4px] w-[27.6px] relative"
                    loading="lazy"
                    alt=""
                    src="/buy.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[3.5px]">
                <h3 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit text-black mq450:text-lg mq450:leading-[19px]">{`Casual wear shirt `}</h3>
                <div className="relative text-sm leading-[16px] font-semibold">
                  Category : Men’s Wear
                </div>
                <div className="w-[158px] flex flex-row items-start justify-start gap-[10px] text-base">
                  <div className="flex flex-row items-start justify-start relative">
                    <div className="relative leading-[19px] font-semibold inline-block min-w-[76px]">
                      Rs. 1200
                    </div>
                    <img
                      className="h-0.5 w-[70.5px] absolute !m-[0] right-[-0.5px] bottom-[7px] z-[1]"
                      alt=""
                      src="/line-41.svg"
                    />
                  </div>
                  <b className="flex-1 relative leading-[19px] text-mediumpurple-200">
                    Rs. 550
                  </b>
                </div>
              </div>
              <div className="h-[23px] rounded-3xs overflow-hidden flex flex-row items-start justify-start text-xs text-black">
                <div className="mt-[-5px] ml-[-4px] rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px] shrink-0">
                  <div className="relative leading-[17px] font-medium inline-block min-w-[19px]">
                    4.6
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-2.5 h-[11px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/starfill1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] text-black">
            <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[199px] px-0 pb-0 box-border relative gap-[299px] bg-[url('/public/image12@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:gap-[149px]">
              <div className="h-[-49px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <img
                  className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/pluscircle-fill.svg"
                />
              </div>
              <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border shrink-0">
                <img
                  className="h-[10.4px] w-[27.6px] relative"
                  loading="lazy"
                  alt=""
                  src="/buy.svg"
                />
              </div>
              <img
                className="h-[52px] w-[84px] absolute !m-[0] right-[7px] bottom-[1px]"
                loading="lazy"
                alt=""
                src="/group-238.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[3.5px]">
                <h3 className="m-0 relative text-inherit leading-[110%] font-semibold font-inherit mq450:text-lg mq450:leading-[19px]">
                  Black Pant for Men
                </h3>
                <div className="relative text-sm leading-[16px] font-semibold text-gray-100">
                  Category : Men’s Wear
                </div>
                <b className="w-[72px] relative text-base leading-[19px] inline-block text-mediumpurple-200">
                  Rs. 600
                </b>
              </div>
              <div className="h-[23px] rounded-3xs overflow-hidden flex flex-row items-start justify-start text-xs">
                <div className="mt-[-5px] ml-[-4px] rounded-lg bg-lightgreen flex flex-row items-start justify-start py-2 px-4 gap-[8px] shrink-0">
                  <div className="relative leading-[17px] font-medium inline-block min-w-[19px]">
                    4.6
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-2.5 h-[11px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/starfill1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-col items-end justify-end pt-[148px] px-0 pb-0 box-border gap-[49px] bg-[url('/public/image9@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:h-auto mq450:gap-[24px]">
              <img
                className="w-[84px] h-[52px] relative shrink-0"
                loading="lazy"
                alt=""
                src="/group-238.svg"
              />
              <div className="mr-[-76px] w-[393px] flex flex-row items-start justify-between max-w-[124%] shrink-0 gap-[20px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-[41px] h-[31px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/pluscircle-fill.svg"
                  />
                </div>
                <div className="h-[31px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-darkslateblue-400 flex flex-row items-center justify-center py-3.5 px-[19px] box-border shrink-0">
                  <img
                    className="h-[10.4px] w-[27.6px] relative"
                    loading="lazy"
                    alt=""
                    src="/buy.svg"
                  />
                </div>
              </div>
            </div>
            <CasualShirtInfo
              casualWearShirt="White shirt for men"
              propAlignSelf="unset"
              propGap="42px"
            />
          </div>
        </div>
      </section>
      <footer className="w-[1280px] flex flex-col items-start justify-start gap-[46px] max-w-full text-left text-base text-darkslategray-100 font-small-text mq750:gap-[23px]">
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
        <div className="w-[1212px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1025:flex-wrap">
          <BrandInfo />
          <div className="w-[601px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq750:flex-wrap">
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
      </footer>
      <div className="w-[47px] h-[47px] absolute !m-[0] bottom-[681px] left-[302px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red w-full h-full z-[1]" />
        <div className="absolute top-[13px] left-[6.7px] leading-[140%] font-medium flex items-center justify-center w-[35.4px] h-[20.4px] z-[2]">
          Sale!
        </div>
      </div>
      <div className="w-[47px] h-[47px] absolute !m-[0] top-[1003px] right-[379px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red w-full h-full z-[1]" />
        <div className="absolute top-[13px] left-[6.7px] leading-[140%] font-medium flex items-center justify-center w-[35.4px] h-[20.4px] z-[2]">
          Sale!
        </div>
      </div>
      <div className="w-[47px] h-[47px] absolute !m-[0] top-[300px] right-[357px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red w-full h-full z-[1]" />
        <div className="absolute top-[13px] left-[6.7px] leading-[140%] font-medium flex items-center justify-center w-[35.4px] h-[20.4px] z-[2]">
          Sale!
        </div>
      </div>
    </div>
  );
};

MensFormal.propTypes = {
  className: PropTypes.string,
};

export default MensFormal;
