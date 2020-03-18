import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InLineTextField from "../../forms/InLineForms/InLineTextField";
import InLineSelectField from "../../forms/InLineForms/InLineSelectField";
import InLineSelectFieldButton from "../../forms/InLineForms/InLineSelectFieldButton";
import TextField from "../../forms/Textfield/TextField";
import {
  LAND_TYPE_MODAL,
  LAND_DESCRIPTION_MODAL
} from "./reducer/landConstants";

const LandBasicForm = ({
  onCreateBasic,
  openModal,
  landTypeOptions,
  landDescriptionOptions,
  landStatusOptions
}) => {
  const { register, errors, handleSubmit, getValues, setValue } = useForm();
  const [coordinate, setCoordinate] = useState([]);

  const handleFormSubmit = payload => {
    if (coordinate.length === 0) {
      const resp = window.confirm(
        "Coordinates not added, Do you want to continue ?"
      );
      if (!resp) return;
    }
    const newCoordinate = coordinate.map(data => {
      const { lat, lng } = data;
      return { lat, lng };
    });
    delete payload.lat;
    delete payload.lng;
    payload.coordinate = newCoordinate;
    onCreateBasic(payload);
  };

  const handleMoreCoordinates = () => {
    const { lat, lng } = getValues({});
    if (!(lat.trim() && lng.trim())) {
      window.alert("Invalid coordinates");
      return;
    }
    setCoordinate([...coordinate, { id: coordinate.length + 1, lat, lng }]);
    setValue([{ lat: "" }, { lng: "" }]);
  };

  const handleRemoveCoordinates = () => {
    if (coordinate.length > 0) {
      const resp = window.confirm(
        "Do you want to remove the last coordinate ?"
      );
      if (!resp) return;
      const lastId = coordinate.length;
      const newData = coordinate.filter(item => item.id !== lastId);
      setCoordinate(newData);
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
        options={landTypeOptions}
        register={register}
        buttonCallback={() => {
          openModal(LAND_TYPE_MODAL);
        }}
        required={{ required: "add or select a type" }}
        errors={errors}
      />

      <InLineSelectFieldButton
        label="Description"
        name="description"
        options={landDescriptionOptions}
        register={register}
        errors={errors}
        required={{ required: "add or select a description" }}
        buttonCallback={() => {
          openModal(LAND_DESCRIPTION_MODAL);
        }}
      />

      <InLineSelectField
        label="Status"
        name="status"
        options={landStatusOptions}
        register={register}
        errors={errors}
        //required={{ required: "add or status a description" }}
      />

      <div className="form-group row">
        <label className="col-sm-3 col-form-label">CoOridinates (4)</label>
        <div className="col-sm-3">
          <TextField placeholder="latitude" name="lat" register={register} />
        </div>
        <div className="col-sm-3">
          <TextField placeholder="longitude" name="lng" register={register} />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-sm btn-primary mt-2"
            onClick={handleMoreCoordinates}
          >
            <i className="ni ni-fat-add">{coordinate.length}</i>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger mt-2"
            onClick={handleRemoveCoordinates}
          >
            <i className="ni ni-fat-delete"></i>
          </button>
        </div>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

LandBasicForm.propTypes = {
  onCreateBasic: PropTypes.func,
  openModal: PropTypes.func,
  landTypeOptions: PropTypes.array,
  landDescriptionOptions: PropTypes.array,
  landStatusOptions: PropTypes.array
};
export default React.memo(LandBasicForm);
