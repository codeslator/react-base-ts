import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CheckboxInput, SelectInput, TextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstractionPage = () => {
  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>
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
            <TextInput name="firstName" label="First Name" type="text" />
            <TextInput name="lastName" label="Last Name" type="text" />
            <TextInput name="email" label="E-mail" type="email" />

            <SelectInput name="jobType" label="Job Type">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="itsenior">IT Senior</option>
              <option value="itjunior">IT Junior</option>
            </SelectInput>

            <CheckboxInput name="terms" label="Terms & Conditions" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
