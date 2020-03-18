import React from "react";
import PropTypes from "prop-types"
import { useForm } from "react-hook-form";
import TextField from "./Textfield/TextField";

const SingleInputForm = ({
  toggle,
  name,
  label,
  type,
  required,
  onFormSubmit
}) => {
  const { register, errors, handleSubmit } = useForm();
  const handleFormSubmit = payload => {
    onFormSubmit(payload);
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="form-group">
        <label>{label}</label>
        <TextField
          name={name}
          type={type}
          placeholder={`enter ${label} here`}
          errors={errors}
          required={required}
          register={register}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add
      </button>
      <button onClick={toggle} className="btn btn-danger">
        Close
      </button>
    </form>
  );
};

SingleInputForm.propTypes = {
    type:PropTypes.string,
    toggle:PropTypes.func,
    label:PropTypes.string,
    name:PropTypes.string,
    required:PropTypes.object,
    onFormSubmit:PropTypes.func
}

SingleInputForm.defaultProps = {
    type:"text",
    label:"Example label"
}
export default SingleInputForm;
