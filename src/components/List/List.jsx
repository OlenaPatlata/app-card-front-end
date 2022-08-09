import s from './List.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { type } from '@testing-library/user-event/dist/type';
import Item from 'components/Item';
import { listCards } from 'assets/const';

const List = ({ name, arr, onClick }) => {
  return (
    <ul className={s[name]} key={uuidv4()}>
      {listCards?.map(elem => {
        return (
          <Item
            elem={elem}
            key={uuidv4()}
            name={type}
            onClick={onClick}
            text="Delete"
          />
        );
      })}
    </ul>
  );
};

export default List;
