
import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export const RegisterPage = () => {
  const { name, email, password, passwordConfirm, onChange, reset } = useForm(initialForm);
  // const {  } = form;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Password confirm"
          value={passwordConfirm}
          onChange={onChange}
        />
        <button
          type="submit"
        >
          Create
        </button>
        <button
          type="button"
          onClick={reset}
        >
          Reset
        </button>
      </form>
    </div>
  )
}
