import { register } from 'redux/authOperation';
import css from '../RegisterForm/RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.RegisterForm} onSubmit={handleSubmit}>
      <div className={css.FormItem}>
        <label className={css.FormLabel} htmlFor="regName">
          UserName
        </label>
        <input
          className={css.FormInput}
          id="regName"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className={css.FormItem}>
        <label className={css.FormLabel} htmlFor="regEmail">
          Email
        </label>
        <input
          className={css.FormInput}
          id="regEmail"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className={css.FormItem}>
        <label className={css.FormLabel} htmlFor="regPassword">
          Password
        </label>
        <input
          className={css.FormInput}
          id="regPassword"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button className={css.FormButton} type="submit">
        Register
      </button>
    </form>
  );
};
