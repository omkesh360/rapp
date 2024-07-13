import PropTypes from "prop-types";

const BrandInfo = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[83px] text-left text-11xl text-darkslateblue-500 font-small-text ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-0.5">
        <h2 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lg mq450:leading-[27px] mq1050:text-5xl mq1050:leading-[36px]">
          RAPPAREL
        </h2>
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
  );
};

BrandInfo.propTypes = {
  className: PropTypes.string,
};

export default BrandInfo;
