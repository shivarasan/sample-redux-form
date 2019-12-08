import React from "react";
import Input from "./Input";
import { reduxForm, Field } from "redux-form";

const renderInput = ({ input, meta }) => (
  <Input {...input} type='text' errorMessage={meta.touched && meta.error} />
);

const onSubmit = values => alert(JSON.stringify(values));

const required = input => {
  if (!input || input === "") {
    return "This field is required";
  }

  return undefined;
};

const allowedNames = input => {
  if (input === "forbidden name") {
    return '"forbidden name" is not a valid customer id';
  }

  return undefined;
};

const ReduxForm = ({ handleSubmit, valid }) => (
  <div>
    <h2>Redux Form</h2>
    <form onSubmit={handleSubmit}>
      <Field
        name='customer-id'
        component={renderInput}
        validate={[required, allowedNames]}
      />
      <button type='submit'>Submit</button>
    </form>
  </div>
);

export default reduxForm({
  form: "my-customer-registration-form",
  onSubmit
})(ReduxForm);
