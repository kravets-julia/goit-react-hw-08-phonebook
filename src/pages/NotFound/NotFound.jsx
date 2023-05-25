import { Link } from 'react-router-dom';
import css from '../NotFound/NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css.NotFound}>
      <span className={css.NotFoundText}>404</span>
      <p className={css.NotFoundText}>Sorry, we couldn't find this page</p>
      <Link to={'/'}>To main page</Link>
    </div>
  );
};
