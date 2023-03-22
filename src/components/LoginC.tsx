import { useFormik } from "formik";
import { validation } from "../schemas/validation_schema";
import Lock from "../assets/img/lock-closed-outline.svg";
import Text from "../assets/img/document-text-outline.svg";
import Email from "../assets/img/mail-outline.svg";
const LoginC = () => {
  const onSubmit = (values: any, actions: any) => {
    actions.resetForm();
  };

  const { touched, handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: validation,
  });

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="form-container"
      >
        <h1 className="h1-login">Login</h1>
        <div className="name">
          <img src={Text} alt="not found" className="text" />
          <input
            value={values.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="email">
          <img src={Email} alt="not found" className="mail" />
          <input
            value={values.email}
            onChange={handleChange}
            className={errors.email && touched.email ? "input-error" : ""}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="password">
          <img src={Lock} alt="not found" className="lock" />
          <input
            value={values.password}
            onChange={handleChange}
            className={errors.password && touched.password ? "error" : ""}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="confirmPassword">
          <img src={Lock} alt="not found" className="lock" />
          <input
            value={values.confirmPassword}
            onChange={handleChange}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
            type="password"
            name="confirmPassword"
            id="password"
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
        <div className="caja">
          {errors.name && <p className="error">{errors.name}</p>}

          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}

          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}

          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginC;
