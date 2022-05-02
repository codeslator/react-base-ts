import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import dynamicForm from '../data/dynamicForm.json';
import { TextInput } from '../components/TextInput';
import { SelectInput } from '../components';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of dynamicForm) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is required');
    }
    if (rule.type === 'minLenght') {
      schema = schema.min((rule as any).value || 2, `Min of ${(rule as any).value || 2} characters`);
    }
    if (rule.type === 'email') {
      schema = schema.email();
    }
  }

  requiredFields[input.name] = schema;
};

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {dynamicForm.map(({ type, name, placeholder, label, options }) => {
              if (type === 'text' || type === 'password' || type === 'email') {
                return <TextInput
                  type={type}
                  key={name}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              }
              else if (type === 'select') {
                return (
                  <SelectInput
                    key={name}
                    name={name}
                    label={label}
                  >
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>{label}</option>
                    ))}
                  </SelectInput>
                )
              }
              throw new Error(`Tipo '${type}' no soportado`)
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
