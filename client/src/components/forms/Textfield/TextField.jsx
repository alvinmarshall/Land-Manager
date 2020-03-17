import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const TextField = ({
  name,
  type,
  register,
  errors,
  required,
  placeholder,
  isFocus
}) => {
  const inputFocus = useRef(null);
  useEffect(() => {
    if (isFocus) {
      inputFocus.current.focus();
    }
  }, [isFocus]);
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={e => {
          register(e, required);
          inputFocus.current = e;
        }}
        className="form-control"
      />
      <div className="text-danger">
        {errors && errors[name] && errors[name].message}
      </div>
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.object,
  placeholder: PropTypes.string,
  isFocus: PropTypes.bool,
  register: PropTypes.func.isRequired
};

TextField.defaultProps = {
  type: "text",
  isFocus: false
};
export default React.memo(TextField);
