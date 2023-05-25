import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';
export const AuthNav = () => {
  return (
    <div className={css.NavBox}>
      <NavLink to="/register" className={css.NavLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.NavLink}>
        Log In
      </NavLink>
    </div>
  );
};
