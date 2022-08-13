import s from './ItemCard.module.scss';
import Button from 'components/Button';
import Media from 'react-media';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useState } from 'react';
import {
  getHideNumber,
  getShowNumber,
} from 'assets/helpers/itemCard/itemCardFunc';
import { toast } from 'react-toastify';

const ItemCard = ({ name, onClick, text, elem }) => {
  const [show, setShow] = useState(false);
  const onShowNumber = () => setShow(!show);
  const hideNumber = getHideNumber(elem.number);
  const showNumber = getShowNumber(elem.number);

  const copyHandler = async () => {
    await navigator.clipboard.writeText(showNumber);
    toast.success(`Number ${showNumber} copied`);
  };
  return (
    <li className={s[name]}>
      <div className={s.cardWrapper}>
        <div className={s.cardContent}>
          <div className={s.lineWrapper}>
            <div className={s.cardNameBanc}>{elem.bank}</div>
            {elem.paymentSystemType === 'MasterCard' && (
              <div className={s.cardLogoMC}></div>
            )}
            {elem.paymentSystemType === 'VISA' && (
              <div className={s.cardLogoVisa}></div>
            )}
            {elem.paymentSystemType !== 'VISA' &&
              elem.paymentSystemType !== 'MasterCard' && (
                <div className={s.cardLogoText}>{elem.paymentSystemType}</div>
              )}
          </div>
          <div className={s.lineWrapper}>
            <div className={s.cardAmount}>
              {elem.amount}&nbsp;{elem.ccy}
            </div>
            <div className={s.cardType}>{elem.type}</div>
          </div>
          <div className={s.lineWrapper}>
            <button
              className={s.cardNumber}
              type="button"
              onClick={onShowNumber}
            >
              {show ? showNumber : hideNumber}
            </button>
            <button
              type="button"
              onClick={copyHandler}
              className={s.cardBtnCopy}
            >
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
