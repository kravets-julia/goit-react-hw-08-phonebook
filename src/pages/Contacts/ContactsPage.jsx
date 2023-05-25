import css from '../Contacts/ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';
import { fetchAllContacts } from 'redux/thunk';


export default function ContactsPage() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <div className={css.box__form}>
        <h1 className={css.title}>Phonebook</h1>
        <Form />
      </div>
      <h2 className={css.title__contacts}>Contacts</h2>
      <FilterContacts />

      {isLoading && <Loader />}
      {error && <h3>{error}</h3>}
      {items.length > 0 ? <ContactsList /> : <h3>No contacts</h3>}
    </div>
  );
}
