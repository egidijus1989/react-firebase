import { useState } from "react";

const formValidator = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeValidator = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    validate(e, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };
  console.log("validacija: ", values);
  return values, errors, handleChangeValidator;
};
export default formValidator;
