import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { getContactsThunk } from 'redux/thunks';
import { FilterContacts } from './FilterContacts/FilterContacts';
import css from '../components/App.module.css';

export function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <div className={css.box__form}>
        <h1 className={css.title}>Phonebook</h1>
        <Form />
      </div>
      <h2 className={css.title__contacts}>Contacts</h2>
      <FilterContacts />

      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {items.length > 0 ? <ContactsList /> : <h3>No contacts</h3>}
    </div>
  );
}
