import { Formik, useField, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { CustomTextInput } from "./CustomeTextInput";
import { CustomTextArea } from "./CustomTextArea";
import { CustomSelect } from "./CustomSelect";
import { DatePick } from "./DatePick";

function App() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          startDate: "",
          endDate: "",
          description: "",
          summary: "",
          url: "",
          status: "",
          subjectCategory: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(15, "Must be 15 characters or less")
            .required("required"),
          startDate: Yup.date().required("Start date is required"),
          endDate: Yup.date()
            .required("End date is required")
            .min(new Date(), "End Date must be later than today"),
          description: Yup.string()
            .min(10, "Must be at least 10 characters")
            .max(200, "Must be 200 characters or less")
            .required("required"),
          summary: Yup.string()
            .min(10, "Must be at least 10 characters")
            .max(200, "Must be 200 characters or less")
            .required("required"),
          url: Yup.string()
            .url("Error: Format URL as 'https://wwww.example.com'")
            .required("required"),
          status: Yup.string().required("required"),
          subjectCategory: Yup.string().required("required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <>
            <Form>
              <h1>Mission Basics</h1>
              <CustomTextInput
                useField={useField}
                name="name"
                type="text"
                placeholder="Name"
              />
              <div className="dates">
                <DatePick
                  styleClass="start-date"
                  name="startDate"
                  formLabel="Start Date"
                  useField={useField}
                  field={Field}
                  datePicker={DatePicker}
                />
                <DatePick
                  styleClass="end-date"
                  name="endDate"
                  formLabel="Target End Date"
                  useField={useField}
                  field={Field}
                  datePicker={DatePicker}
                />
              </div>
              <CustomSelect useField={useField} name="status">
                <option value="">Status</option>
                <option value="Brainstorming">Brainstorming</option>
                <option value="Planning">Planning</option>
                <option value="Development">Development</option>
                <option value="Review">Review</option>
                <option value="Revision">Revision</option>
                <option value="Testing">Testing</option>
                <option value="Production">Production</option>
                <option value="Completed">Completedr</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Upgrading">Upgrading</option>
                <option value="Other">Other</option>
              </CustomSelect>
              <CustomSelect useField={useField} name="subjectCategory">
                <option value="">Subject Category</option>
                <option value="Basic Utility">Basic Utility</option>
                <option value="Fluid Lines">Fluid Lines</option>
                <option value="Ground Operations">Ground Operations</option>
                <option value="Precision Measuring">Precision Measuring</option>
                <option value="Weights and Balance">Weights and Balance</option>
                <option value="Tools">Tools</option>
                <option value="Safety Protocols">Safety Protocols</option>
                <option value="Other">Other</option>
              </CustomSelect>
              <CustomTextArea
                useField={useField}
                name="description"
                type="text"
                placeholder="Short Description (2-3 sentences)"
              />
              <CustomTextArea
                useField={useField}
                name="summary"
                type="text"
                placeholder="Summary (abstract of mission purposes)"
              />
              <CustomTextInput
                useField={useField}
                name="url"
                type="text"
                placeholder="Project Management URL"
              />
              <button type="submit">
                {props.isSubmitting ? "loading..." : "Submit"}
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}

export default App;
