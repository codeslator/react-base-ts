import { useField, ErrorMessage } from 'formik';

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  [x: string]: any; // Comodin
}

export const SelectInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
