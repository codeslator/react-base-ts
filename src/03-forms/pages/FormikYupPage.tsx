import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Should have at least 15 characters').required('Required'),
      lastName: Yup.string().max(10, 'Should have at least 10 characters').required('Required'),
      email: Yup.string().email().required('Required'),
    })
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
