import { ContactsListitem } from 'components/ContactsListitem/ContactsListitem';
import css from '../../components/ContactsList/ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from 'redux/thunks';
import { getFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <div className={css.contactsList__box}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <ContactsListitem name={contact.name} number={contact.phone} />
            <button
              onClick={() => dispatch(deleteContactsThunk(contact.id))}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
