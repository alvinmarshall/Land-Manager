import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LAND_TYPE_MODAL } from "./reducer/landConstants";
import { useDispatch } from "react-redux"
import { modalOpenAction } from "../../modal/reducer/modalAction";

const CreateLandForm = ({
  onCreateLand,
  landTypeOptions,
  landStatusOptions,
  landDescriptionOptions
}) => {
  const inputFocus = useRef(null);
  const dispatch = useDispatch()
  const { handleSubmit, register, errors } = useForm();

  const handleOnSubmitForm = payload => {
    onCreateLand(payload);
  };

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-header text-primary">New Land</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleOnSubmitForm)}>
            <div className="form-group row">
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
                  ref={register({
                    required: "Latitude value required"
                  })}
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
                  ref={register({
                    required: "longitude value required"
                  })}
                />
                <div className="text-danger">
                  {errors.lng && errors.lng.message}
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Type</label>
              <div className="col-sm-6">
                <select className="form-control" name="type" ref={register}>
                  {landTypeOptions.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-2">
                <button
                  className="btn btn-sm btn-primary mt-2"
                >
                  Add <i className="ni ni-fat-add"></i>
                </button>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-6">
                <select className="form-control">
                  {landDescriptionOptions.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-2" onClick={() => dispatch(modalOpenAction(LAND_TYPE_MODAL))}>
                <button className="btn btn-sm btn-primary mt-2">
                  Add <i className="ni ni-fat-add"></i>
                </button>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Status</label>
              <div className="col-sm-6">
                <select className="form-control" name="status" ref={register}>
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
                  Create Land
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CreateLandForm);
