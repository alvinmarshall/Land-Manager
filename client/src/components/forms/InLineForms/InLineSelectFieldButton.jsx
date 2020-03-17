import React from "react";
import PropTypes from "prop-types";

const InLineSelectFieldButton = ({
  label,
  name,
  options,
  labelColSize,
  inputColSize,
  register,
  errors,
  required,
  buttonIco,
  buttonLabel,
  buttonColor,
  buttonCallback
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
          {errors && errors[name] && errors[name].message}
        </div>
      </div>
      <div className="col-sm-3 mt-2">
        <button
          type="button"
          className={`btn btn-sm btn-${buttonColor}`}
          onClick={buttonCallback}
        >
          {buttonLabel}
          <i className={`${buttonIco}`}></i>
        </button>
      </div>
    </div>
  );
};

InLineSelectFieldButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  labelColSize: PropTypes.number,
  inputColSize: PropTypes.number,
  buttonIco: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonCallback: PropTypes.func
};

InLineSelectFieldButton.defaultProps = {
  label: "Example label",
  options: [],
  labelColSize: 3,
  inputColSize: 6,
  buttonIco: "ni ni-fat-add",
  buttonLabel: "",
  buttonColor: "primary"
};

export default React.memo(InLineSelectFieldButton);
