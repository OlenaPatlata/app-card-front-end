import s from './Item.module.scss';
import Button from 'components/Button';

const Item = ({ type, onClick, text }) => {
  return (
    <li className={s[type]}>
      <Button onClick={onClick} text={text} />
    </li>
  );
};

export default Item;
