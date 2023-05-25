import { LoginForm } from 'components/LoginForm/LoginForm';
import css from '../Login/LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.LoginContainer}>
      <h2 className={css.LoginTitle}>Login</h2>
      <LoginForm />
    </div>
  );
}
