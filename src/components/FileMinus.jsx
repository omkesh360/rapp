import PropTypes from "prop-types";

const FileMinus = ({ className = "" }) => {
  return (
    <div
      className={`w-[100px] h-[100px] overflow-hidden leading-[normal] tracking-[normal] ${className}`}
    />
  );
};

FileMinus.propTypes = {
  className: PropTypes.string,
};

export default FileMinus;
