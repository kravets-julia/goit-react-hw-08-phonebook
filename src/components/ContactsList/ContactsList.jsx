import { ContactsListitem } from 'components/ContactsListitem/ContactsListitem';
import css from '../../components/ContactsList/ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contactsSelector';
import { fetchDeleteContact } from 'redux/thunk';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <div className={css.contactsList__box}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <ContactsListitem name={contact.name} number={contact.number} />
            <button
              onClick={() => dispatch(fetchDeleteContact(contact.id))}
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
