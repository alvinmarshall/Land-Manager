import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InLineTextField from "../../forms/InLineForms/InLineTextField";
import InLineSelectField from "../../forms/InLineForms/InLineSelectField";
import InLineSelectFieldButton from "../../forms/InLineForms/InLineSelectFieldButton";
import TextField from "../../forms/Textfield/TextField";

const data = [{ value: "Government reserve" }, { value: "Market" }];
const LandBasicForm = () => {
  const { register, errors, handleSubmit, getValues, reset } = useForm();
  const [coordinate, setCoordinate] = useState([]);
  const handleFormSubmit = payload => {
    console.log("payload", payload);
  };

  const handleMoreCoordinates = evt => {
    const { lat, lng } = getValues({});
    if (lat.trim().length === 0 || lng.trim().length === 0) {
      window.alert("invalid coordinates provided");
    }
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InLineTextField
        label="Name"
        placeholder="enter name"
        name="name"
        register={register}
        errors={errors}
        required={{ required: "name is required" }}
        isFocus
      />

      <InLineTextField
        label="Location"
        placeholder="enter location"
        name="location"
        register={register}
        errors={errors}
        required={{ required: "location is required" }}
      />

      <InLineTextField
        label="Town"
        placeholder="enter town"
        name="town"
        register={register}
        errors={errors}
        required={{ required: "town is required" }}
      />

      <InLineSelectFieldButton
        label="Type"
        name="type"
        options={data}
        register={register}
        buttonCallback={() => {
          console.log("hi button");
        }}
        errors={errors}
      />

      <InLineSelectFieldButton
        label="Description"
        name="description"
        options={data}
        register={register}
        errors={errors}
        buttonCallback={() => {
          console.log("hi button");
        }}
      />

      <InLineSelectField
        label="Status"
        name="status"
        options={data}
        register={register}
        errors={errors}
      />

      <div className="form-group row">
        <label className="col-sm-3 col-form-label">CoOridinates</label>
        <div className="col-sm-3">
          <TextField
            placeholder="latitude"
            name="lat"
            register={register}
            required={{ required: "latitude is required" }}
            errors={errors}
          />
        </div>
        <div className="col-sm-3">
          <TextField
            placeholder="longitude"
            name="lng"
            register={register}
            required={{ required: "longitude is required" }}
            errors={errors}
          />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-sm btn-primary mt-2"
            onClick={handleMoreCoordinates}
          >
            <i className="ni ni-fat-add"></i>
          </button>
        </div>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default React.memo(LandBasicForm);
