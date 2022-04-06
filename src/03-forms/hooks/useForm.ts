import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initialForm: T) => {
  const [form, setForm] = useState(initialForm);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } =  target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reset = () => {
    setForm({ ...initialForm });
  }

  return {
    form,
    ...form,
    onChange,
    reset,
  }
}
