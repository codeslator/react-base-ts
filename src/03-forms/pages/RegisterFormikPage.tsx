
import { Formik } from 'formik';
import '../styles/styles.css';
import { REGISTER_VALIDATION } from '../validations/register';

const initialForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={initialForm}
        onSubmit={(values) => console.log(values)}
        validationSchema={REGISTER_VALIDATION}
      >
        {({ handleSubmit, values, handleChange, handleReset, handleBlur, errors, touched }) => (

          <form noValidate onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (<span>{errors.name}</span>)}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (<span>{errors.email}</span>)}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (<span>{errors.password}</span>)}
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Password confirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm && (<span>{errors.passwordConfirm}</span>)}

            <button
              type="submit"
            >
              Create
            </button>
            <button
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
