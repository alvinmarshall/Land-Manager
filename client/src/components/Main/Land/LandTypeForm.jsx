import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createLandTypeAction } from "./reducer/landAction";

const LandTypeForm = ({ toggle }) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const handleFormSubmit = (payload, evt) => {
    dispatch(createLandTypeAction(payload));
    evt.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="form-group">
        <label>Name</label>
        <input
          name="value"
          ref={register({ required: "provide a type" })}
          type="text"
          className="form-control"
          placeholder="enter name here"
        />
        <div className="text-danger"> {errors.type && errors.type.message}</div>
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

export default LandTypeForm;
