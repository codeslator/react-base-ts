import * as yup from 'yup';

export const REGISTER_VALIDATION = yup.object({
  name: yup.string().min(2).max(15).required(),
  email: yup.string().email().min(6).required(),
  password: yup.string().max(15).required(),
  passwordConfirm: yup.string().max(15).oneOf([yup.ref('password')], 'Password must match').required(),
});