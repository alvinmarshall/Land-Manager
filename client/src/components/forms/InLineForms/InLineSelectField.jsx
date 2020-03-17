import React from "react";
import PropTypes from "prop-types";

const InLineSelectField = ({
  label,
  name,
  options,
  labelColSize,
  inputColSize,
  register,
  errors,
  required
}) => {
  return (
    <div className="form-group row">
      <label htmlFor="" className={`col-sm-${labelColSize} col-form-label`}>
        {label}
      </label>
      <div className={`col-sm-${inputColSize}`}>
        <select name={name} className="form-control" ref={register(required)}>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.value}
            </option>
          ))}
        </select>
        <div className="text-danger">
          {errors[name] && errors[name].message}
        </div>
      </div>
    </div>
  );
};

InLineSelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  labelColSize: PropTypes.number,
  inputColSize: PropTypes.number
};

InLineSelectField.defaultProps = {
  label: "Example label",
  options: [],
  labelColSize: 3,
  inputColSize: 6
};

export default React.memo(InLineSelectField);
