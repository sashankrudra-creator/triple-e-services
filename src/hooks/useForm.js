import { useState } from 'react';

// Tiny controlled-form helper with inline validation. Nothing is ever sent anywhere.
export default function useForm(initial, validate) {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState({});
  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));
  const touchAll = () => setTouched(Object.keys(initial).reduce((a, k) => ({ ...a, [k]: true }), {}));
  const reset = (next = initial) => {
    setValues(next);
    setTouched({});
  };
  const setField = (name, value) => setValues((v) => ({ ...v, [name]: value }));
  const fieldError = (name) => (touched[name] ? errors[name] : undefined);

  return { values, errors, isValid, onChange, onBlur, touchAll, reset, setField, fieldError };
}
