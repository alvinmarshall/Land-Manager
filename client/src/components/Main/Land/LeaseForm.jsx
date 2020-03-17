import React from "react";
import { useForm } from "react-hook-form";
import InLineTextField from "../../forms/InLineForms/InLineTextField";
import InLineSelectFieldButton from "../../forms/InLineForms/InLineSelectFieldButton";

const LeaseForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const handleFormSubmit = payload => {
    if (payload._id.trim().length === 0) {
      window.alert("create basic info before adding this entry");
    }
    console.log("payload", payload);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input ref={register()} type="hidden" name="_id" />
      <InLineTextField
        label="Allottee Name"
        placeholder="enter allottee name"
        name="allotte_name"
        register={register}
        errors={errors}
        required={{ required: "allottee is required" }}
      />
      <InLineTextField
        label="Address"
        placeholder="enter address"
        name="address"
        register={register}
        errors={errors}
        required={{ required: "address is required" }}
      />
      <InLineTextField
        label="Nationality"
        placeholder="enter nationality"
        name="nationality"
        register={register}
        errors={errors}
        required={{ required: "nationality is required" }}
      />
      <InLineTextField
        label="Plot No"
        placeholder="enter plot number"
        name="plot_no"
        register={register}
        errors={errors}
        required={{ required: "plot number is required" }}
      />
      <InLineSelectFieldButton
        label="Use of land"
        name="land_use"
        register={register}
      />
      <InLineTextField
        label="Amount Paid"
        placeholder="enter amount paid"
        name="amount_paid"
        register={register}
        errors={errors}
        required={{ required: "amount is required" }}
      />
      <InLineTextField
        label="Plot Size"
        placeholder="enter plot size"
        name="plot_size"
        register={register}
        errors={errors}
        required={{ required: "plot size is required" }}
      />
      <InLineTextField
        label="Date"
        name="date"
        register={register}
        readOnly
        type="date"
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default LeaseForm;