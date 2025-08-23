import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values); // Mock API call
      }}
    >
      {() => (
        <Form className="p-4 border rounded-md">
          <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>

          <div>
            <Field
              name="username"
              placeholder="Username"
              className="block border p-2 mb-2 w-full"
            />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>

          <div>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="block border p-2 mb-2 w-full"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="block border p-2 mb-2 w-full"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;