import React, { useRef, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LAND_TYPE_MODAL } from "./reducer/landConstants";

const CreateLandForm = ({
  onCreateLand,
  landTypeOptions,
  landStatusOptions,
  landDescriptionOptions,
  openModal,
  location
}) => {
  const inputFocus = useRef(null);
  const [cooridnates, setCoOridates] = useState([]);
  const { handleSubmit, register, errors, getValues, setValue } = useForm();
  const { state } = location;

  const [field, setField] = useState({
    _id: "",
    name: "",
    location: "",
    town: "",
    coOrdinates: {
      lat: "",
      lng: ""
    },
    type: "Other",
    description: "Other",
    status: "Not Allocated"
  });

  const handleOnSubmitForm = (payload, e) => {
    payload.coOrdinates = cooridnates
    onCreateLand(payload);

    if (!payload._id) {
      e.target.reset();
    }
  };

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  useEffect(() => {
    if (state) {
      const { currentLand } = state;
      setField(currentLand);
    }
  }, [state]);

  const handleMoreCordinates = evt => {
    const { lat, lng } = getValues();
    if (!(lat.trim() && lng.trim())) {
      window.alert("Invalid coordinates");
      return;
    }

    setCoOridates([...cooridnates, { lat, lng }]);
    setValue([{ lat: "" }, { lng: "" }]);
  };

  return (
    <div>
      <div className="card">
        <div className="card-header text-primary">
          {state ? "Edit Land" : "New Land"}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleOnSubmitForm)}>
            <div className="form-group row">
              <input
                type="hidden"
                name="_id"
                value={field._id}
                ref={register()}
              />
              <label className="col-sm-2 col-form-label"> Name</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="land name"
                  name="name"
                  ref={e => {
                    register(e, { required: "land name is required" });
                    inputFocus.current = e;
                  }}
                  defaultValue={field.name}
                />
                <div className="text-danger">
                  {errors.name && errors.name.message}
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Location</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="location"
                  name="location"
                  ref={register({
                    required: "location is required"
                  })}
                  defaultValue={field.location}
                />
                <div className="text-danger">
                  {errors.location && errors.location.message}
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Town</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="town"
                  name="town"
                  ref={register({
                    required: "town is required"
                  })}
                  defaultValue={field.town}
                />
                <div className="text-danger">
                  {errors.town && errors.town.message}
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Co-ordinates</label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="latitude"
                  name="lat"
                  ref={register()}
                  defaultValue={field.coOrdinates.lat}
                />
                <div className="text-danger">
                  {errors.lat && errors.lat.message}
                </div>
              </div>

              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="longitude"
                  name="lng"
                  ref={register()}
                  defaultValue={field.coOrdinates.lng}
                />
                <div className="text-danger">
                  {errors.lng && errors.lng.message}
                </div>
              </div>

              <div className="col-sm-2">
                <button
                  type="button"
                  className="btn btn-sm btn-primary mt-2"
                  onClick={handleMoreCordinates}
                >
                  Add {` ${cooridnates.length}`}{" "}
                  <i className="ni ni-fat-add"></i>
                </button>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Type</label>
              <div className="col-sm-6">
                <select className="form-control" name="type" ref={register()}>
                  <option value={field.type}>{field.type}</option>
                  {landTypeOptions.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-2">
                <button
                  type="button"
                  className="btn btn-sm btn-primary mt-2"
                  onClick={() => openModal(LAND_TYPE_MODAL)}
                >
                  Add <i className="ni ni-fat-add"></i>
                </button>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-6">
                <select
                  className="form-control"
                  name="description"
                  ref={register()}
                >
                  <option value={field.description}>{field.description}</option>
                  {landDescriptionOptions.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-2">
                <button className="btn btn-sm btn-primary mt-2">
                  Add <i className="ni ni-fat-add"></i>
                </button>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Status</label>
              <div className="col-sm-6">
                <select className="form-control" name="status" ref={register}>
                  <option value={field.status}>{field.status}</option>
                  {landStatusOptions.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <button type="submit" className="btn btn-primary">
                  {state ? "Update" : "Create Land"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(withRouter(CreateLandForm));
