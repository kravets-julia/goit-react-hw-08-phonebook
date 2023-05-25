import { useDispatch } from 'react-redux';
import css from '../UserMenu/UserMenu.module.css';
import { logOut } from 'redux/authOperation';
import { useAuth } from 'redux/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.UserContainer}>
      <p className={css.UserText}>
        Welcome, <span className={css.UserName}>{user.name}</span>
      </p>
      <button
        className={css.LogoutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
};
