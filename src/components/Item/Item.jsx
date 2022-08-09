import s from './Item.module.scss';
import Button from 'components/Button';

const Item = ({ name, onClick, text, elem }) => {
  return (
    <li className={s.itemCard}>
      <div className={s.cardWrapper}>
        <div className={s.cardContent}>
          <div className={s.topWrapper}>
            <div className={s.cardType}>{elem.typeCard}</div>
            <div className={s.cardNumber}>
              <div>{elem.cardNumber}</div>
              <div className={s.cardDate}>{elem.expireDate}</div>
            </div>
          </div>
          <div className={s.bottomWrapper}>
            <div className={s.cardAmount}>
              {elem.amount}&nbsp;{elem.ccy}
            </div>
            <div className={s.cardLogo}></div>
          </div>
        </div>
      </div>
      <Button onClick={onClick} text={text} name="deleteBtn" />
    </li>
  );
};

export default Item;
