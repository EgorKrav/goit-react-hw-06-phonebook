import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';
import a from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={a}>
      <input
        type='text'
        name='filter'
        value={filter}
        onChange={onChangeFilter}
        placeholder='Find contacts by name'
      />
    </label>
  );
};

export default Filter;
