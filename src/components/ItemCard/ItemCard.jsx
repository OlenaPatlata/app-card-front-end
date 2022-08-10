import s from './ItemCard.module.scss';
import Button from 'components/Button';
import Media from 'react-media';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const ItemCard = ({ name, onClick, text, elem }) => {
  return (
    <li className={s[name]}>
      <div className={s.cardWrapper}>
        <div className={s.cardContent}>
          <div className={s.lineWrapper}>
            <div className={s.cardNameBanc}>{elem.bank}</div>
            <div className={s.cardLogo}></div>
          </div>
          <div className={s.lineWrapper}>
            <div className={s.cardAmount}>
              {elem.amount}&nbsp;{elem.ccy}
            </div>
            <div className={s.cardType}>{elem.typeCard}</div>
          </div>
          <div className={s.lineWrapper}>
            <div className={s.cardNumber}>{elem.cardNumber}</div>
            <button type="button" onClick={onClick} className={s.cardBtnCopy}>
              copy
            </button>
          </div>
          <div className={s.lineWrapper}>
            <div className={s.cardDate}>{elem.expireDate}</div>
          </div>
        </div>
      </div>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <Button
                onClick={onClick}
                text={text}
                name="deleteBtn"
                icon={true}
              >
                <MdOutlineDeleteOutline />
              </Button>
            )}
            {matches.medium && (
              <Button
                onClick={onClick}
                text={text}
                name="deleteBtn"
                icon={false}
              />
            )}
          </>
        )}
      </Media>
    </li>
  );
};

export default ItemCard;
