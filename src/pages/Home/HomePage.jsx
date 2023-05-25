import css from '../Home/HomePage.module.css';

export default function Home() {
  return (
    <div className={css.HomeContainer}>
      <p className={css.HomeText}>
        This application allows you to add, delete, and search for contacts by
        name. To access the functionality, register or sign in with your
        account.
      </p>
    </div>
  );
}
