import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formik Component Tutorial</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={
          Yup.object({
            firstName: Yup.string().max(15, 'Should have at least 15 characters').required('Required'),
            lastName: Yup.string().max(10, 'Should have at least 10 characters').required('Required'),
            email: Yup.string().email().required('Required'),
            terms: Yup.boolean().oneOf([true], 'Should to accept conditions'),
            jobType: Yup.string().notOneOf(['itjunior'], 'You can\'t choose this option')
          })
        }
      >
        {({ handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">FirstName</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="span" />
            <label htmlFor="lastName">LastName</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="email">E-mail Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="itsenior">IT Senior</option>
              <option value="itjunior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
