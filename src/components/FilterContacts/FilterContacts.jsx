import { useDispatch, useSelector } from 'react-redux';
import css from '../../components/FilterContacts/FilterContacts.module.css';
import { getFilter } from 'redux/filterSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(getFilter(e.currentTarget.value));
  };
  return (
    <label className={css.label}>
      Find contacts by name <br />
      <input
        type="text"
        value={valueFilter}
        onChange={changeFilter}
        placeholder="Enter a name to search for"
        className={css.input}
      />
    </label>
  );
};
