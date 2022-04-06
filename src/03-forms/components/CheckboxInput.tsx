import { ErrorMessage, useField } from "formik"

interface Props {
  name: string;
  label?: string;
  [x: string]: any; // Comodin
}

export const CheckboxInput = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label>
        <input
          type="checkbox"
          {...field}
          {...props}
        />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
