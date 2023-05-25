import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';
import { useAuth } from 'redux/authSelectors';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.HeaderNav}>
      <NavLink to="/" className={css.NavLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.NavLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
