import s from './WrapperLeft.module.scss';
import List from 'components/List';
import { listCards, user } from 'assets/const';
import Title from 'components/Title';
import { getBalanceArr } from 'assets/helpers/wrapperLeft/wrapperLeftFunc';

const WrapperLeft = () => {
  const balanceArr = getBalanceArr(listCards, user?.cash);
  return (
    <div className={s.wrapperLeft}>
      <div className={s.partWrapper}>
        <Title title="Баланс" name="titleSmall" />
        <List title="Баланс" name="itemText" arr={balanceArr} />
      </div>
      <div className={s.partWrapper}>
        <Title title="Готівка" name="titleSmall" />
        <List
          title="Готівка"
          name="itemText"
          arr={
            user?.cash.length > 0
              ? user?.cash
              : [
                  {
                    amount: 0,
                    ccy: 'UAN',
                  },
                ]
          }
          text="Edit"
          onClick={() => {
            console.log('edit');
          }}
        />
      </div>
      <div className={s.partWrapper}>
        <Title title="Мої картки" name="titleSmall" />
        <List
          title="Мої картки"
          name="itemText"
          arr={listCards}
          text="Edit"
          onClick={() => {
            console.log(1111);
          }}
        />
      </div>
    </div>
  );
};

export default WrapperLeft;
