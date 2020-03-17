import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const InLineTextField = ({
  label,
  placeholder,
  name,
  register,
  errors,
  required,
  labelColSize,
  inputColSize,
  isFocus,
  readOnly,
  type
}) => {
  const inputFocus = useRef(null);

  useEffect(() => {
    if (isFocus) {
      inputFocus.current.focus();
    }
  }, [isFocus]);

  return (
    <div className="form-group row">
      <label className={`col-sm-${labelColSize} col-form-label`}>{label}</label>
      <div className={`col-sm-${inputColSize}`}>
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          readOnly={readOnly}
          ref={e => {
            register(e, required);
            inputFocus.current = e;
          }}
        />
        <div className="text-danger">
          {errors && errors[name] && errors[name].message}
        </div>
      </div>
    </div>
  );
};

InLineTextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  required: PropTypes.object,
  labelColSize: PropTypes.number,
  inputColSize: PropTypes.number,
  isFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  type: PropTypes.string
};

InLineTextField.defaultProps = {
  labelColSize: 3,
  inputColSize: 6,
  isFocus: false,
  readOnly: false,
  type: "text"
};

export default React.memo(InLineTextField);
