import s from './List.module.scss';
import { v4 as uuidv4 } from 'uuid';

import ItemCard from 'components/ItemCard';
import ItemText from 'components/ItemText';

const List = ({ name, arr, onClick, text, title }) => {
  return (
    <ul className={s[name]} key={uuidv4()}>
      {arr?.map(elem => {
        if (name === 'itemText') {
          return (
            <ItemText
              elem={elem}
              key={uuidv4()}
              name={name}
              onClick={onClick}
              text={text}
              title={title}
            />
          );
        }
        return (
          <ItemCard
            elem={elem}
            key={uuidv4()}
            name={name}
            onClick={onClick}
            text={text}
          />
        );
      })}
    </ul>
  );
};

export default List;
