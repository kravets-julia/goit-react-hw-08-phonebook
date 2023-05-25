import { useDispatch } from 'react-redux';
import css from '../LoginForm/LoginForm.module.css';
import { logIn } from 'redux/authOperation';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.box}>
      <form className={css.Form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.FormItem}>
          <label className={css.FormLabel} htmlFor="logEmail">
            Email
          </label>
          <input
            className={css.FormInput}
            id="logEmail"
            type="email"
            name="email"
          />
        </div>
        <div className={css.FormItem}>
          <label className={css.FormLabel} htmlFor="logPassword">
            Password
          </label>
          <input
            className={css.FormInput}
            id="logPassword"
            type="password"
            name="password"
          />
        </div>
        <button className={css.FormButton} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
