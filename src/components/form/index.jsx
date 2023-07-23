import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import close from "../../assets/images/close.png";
import "./form.css";
import useMobile from "../../customHooks/useMobile";

const initialValues = {
  assesment: "",
  purpose: "",
  description: "",
  skills: "",
  duration: "",
};

const validationSchema = Yup.object({
  assesment: Yup.string().required("Required"),
  purpose: Yup.string()
    .oneOf(["Purpose1", "Purpose2", "Other"], "Invalid description Type")
    .required("Required"),
  description: Yup.string()
    .oneOf(
      ["Description1", "Description2", "Other"],
      "Invalid description Type"
    )
    .required("Required"),
  skills: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
});

const FormData = ({ setAssesData, assesData,setIsForm }) => {
    const isMobile=useMobile();
  const HandleSubmit = ({ assesment }) => {
    setAssesData([{ assesment }, ...assesData]);
    setIsForm(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={HandleSubmit}
    >
      <Form>
        <h3 className="form-lebel">Name of assessment</h3>
        <Field
          name="assesment"
          className="form-input"
          placeholder="Type Here"
        />
        <h3 className="form-lebel">Purpose of the test is</h3>
        <Field name="purpose" as="select" className="form-input">
          <option value="Purpose1">Purpose1</option>
          <option value="Purpose2">Purpose2</option>
          <option value="Other">Other</option>
        </Field>
        <h3 className="form-lebel">Description</h3>
        <Field name="description" as="select" className="form-input">
          <option value="Description1">Description1</option>
          <option value="Description2">Description2</option>
          <option value="Other">Other</option>
        </Field>
        <h3 className="form-lebel">Skills</h3>
        <div className="form-input">
          <div className="flex form-skills-box">
            {[
              "UI/UX and Design",
              "No of Question",
              "Web Development",
              "UI/UX and Design",
              "Web Development",
            ].map((skill) => (
              <div className="flex form-skills">
                <p>{skill}</p>
                <img src={close} alt="close" />
              </div>
            ))}
          </div>
          <Field name="skills" className="form-input" placeholder="Type Here" />
        </div>
        <h3 className="form-lebel">Duration of assessment</h3>
        <Field name="duration" className="form-input" placeholder="HH:MM:SS" />
        <button className="button form-btn" type="submit">
          <h3>{isMobile?'Next':'Save'}</h3>
        </button>
      </Form>
    </Formik>
  );
};

export default FormData;
