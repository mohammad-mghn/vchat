"use client";

import { useFormik } from "formik";
import React, { useState } from "react";

import GetInTouchInput from "./input";
import Button from "../elements/button";

type formType = {
  name: string;
  body: string;
  email: string;
};

const GetInTouchForm = () => {
  const [emailSent, setEmailSent] = useState(false);

  const validateForm = ({ email, name, body }: formType) => {
    const errors: Partial<formType> = {};

    if (!email) errors.email = "Please fill email field";
    if (!name) errors.name = "Please choose a name for yourself";
    if (!body) errors.body = "Please fill body field for your E-mail";

    return errors;
  };

  const submitHandler = ({ email, name, body }: formType) => {
    setEmailSent(true);

    console.log({ email, name, body });
  };

  const formik: any = useFormik({
    initialValues: {
      body: "",
      name: "",
      email: "",
    },
    validate: validateForm,
    validateOnChange: false,
    onSubmit: (values: formType) => {
      const submitValues = {
        body: values.body,
        name: values.name,
        email: values.email,
      };

      submitHandler(submitValues);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-5 lg:mt-10 w-full lg:max-w-[60rem] md:grid grid-cols-3 grid-rows-3 gap-4 space-y-4 md:space-y-0"
    >
      <GetInTouchInput
        value={formik.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
        type="email"
        label="email"
        placeholder="example@email.com"
      />
      <GetInTouchInput
        value={formik.name}
        error={formik.errors.name}
        onChange={formik.handleChange}
        type="name"
        label="name"
        placeholder="Full name"
      />
      <GetInTouchInput
        value={formik.body}
        error={formik.errors.body}
        onChange={formik.handleChange}
        textArea
        type="body"
        label="body"
        placeholder="Write your message..."
        parentClassName="col-start-2 col-end-4 row-start-1 row-end-5 h-60"
      />

      <Button
        type={"submit"}
        className={`!mt-12 relative md:!mt-4 h-14 w-full ${
          emailSent && "!bg-green"
        } overflow-hidden transition-colors !duration-1000`}
      >
        <span
          className={`absolute w-full top-1/2 ${
            emailSent ? "left-[200%]" : "left-1/2"
          } !-translate-x-1/2 !-translate-y-1/2 transition-all duration-500 delay-200 ease-in`}
        >
          Get in Touch
        </span>
        <span
          className={`absolute top-1/2 ${
            emailSent ? "right-1/2" : "right-[200%]"
          } !translate-x-1/2 !-translate-y-1/2 transition-all duration-500 ease-out`}
        >
          Sent
        </span>
      </Button>
    </form>
  );
};

export default GetInTouchForm;
