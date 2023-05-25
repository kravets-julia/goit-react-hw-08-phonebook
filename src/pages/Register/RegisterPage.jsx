import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from '../Register/RegisterPage.module.css';

export default function Register() {
  return (
    <div className={css.RegisterContainer}>
      <h2 className={css.RegisterTitle}>Registration</h2>
      <RegisterForm />
    </div>
  );
}
