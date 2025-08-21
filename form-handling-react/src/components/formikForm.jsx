import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("User registered:", data);
      alert("Formik Registration successful!");
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="space-y-4 p-4 border rounded-md w-80 mx-auto mt-6">
        <h2 className="text-xl font-bold">Formik Form</h2>

        <div>
          <label className="block">Username:</label>
          <Field type="text" name="username" className="border p-2 w-full" />
          <ErrorMessage name="username" component="p" className="text-red-500" />
        </div>

        <div>
          <label className="block">Email:</label>
          <Field type="email" name="email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="p" className="text-red-500" />
        </div>

        <div>
          <label className="block">Password:</label>
          <Field type="password" name="password" className="border p-2 w-full" />
          <ErrorMessage name="password" component="p" className="text-red-500" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
