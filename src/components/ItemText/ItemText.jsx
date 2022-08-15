import s from './ItemText.module.scss';
import Button from 'components/Button';
import Media from 'react-media';
import { GrEdit } from 'react-icons/gr';
import { v4 as uuidv4 } from 'uuid';
import { handleAmount } from 'assets/helpers/form';

const ItemText = ({ name, onClick, text, elem, title, setElem }) => {
  const handleId = e => {
    setElem(elem);
  };
  return (
    <li className={s[name]} id={uuidv4()} onClick={handleId}>
      <div className={s.textWrapper}>
        <div className={s.empty}>-</div>
        {title === 'Мої картки' && (
          <div className={s.cardNameBanc}>{elem?.bank}</div>
        )}
        <div className={s.cardAmount}>
          {handleAmount(String(elem.amount))}&nbsp;{elem.ccy}
        </div>
      </div>

      {title !== 'Баланс' && (
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
                  name="editBtn"
                  icon={true}
                >
                  <GrEdit />
                </Button>
              )}
              {matches.medium && (
                <Button
                  onClick={onClick}
                  text={text}
                  name="editBtn"
                  icon={false}
                />
              )}
            </>
          )}
        </Media>
      )}
    </li>
  );
};

export default ItemText;
