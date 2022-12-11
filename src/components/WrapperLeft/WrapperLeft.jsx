import s from './WrapperLeft.module.scss';
import List from 'components/List';
import { listCards, user } from 'assets/const';
import Title from 'components/Title';
import { getBalanceArr } from 'assets/helpers/wrapperLeft/wrapperLeftFunc';
import useToggle from './../../hooks/useToggle';

import { useState } from 'react';
import ModalEditCash from 'components/Modals/ModalEditCash';

const WrapperLeft = () => {
  const balanceArr = getBalanceArr(listCards, user?.cash);
  const [editModal, setEditModal] = useToggle();
  const [elem, setElem] = useState({ amount: 0, ccy: '' });

  return (
    <div className={s.wrapperLeft}>
      <div className={s.partWrapper}>
        <Title title="Balance" name="titleSmall" />
        <List title="Balance" name="itemText" arr={balanceArr} />
      </div>
      <div className={s.partWrapper}>
        <Title title="Cash" name="titleSmall" />
        <List
          title="Cash"
          name="itemText"
          setElem={setElem}
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
          onClick={e => {
            setEditModal(true);
          }}
        />
      </div>
      <div className={s.partWrapper}>
        <Title title="My carts" name="titleSmall" />
        <List
          title="My carts"
          name="itemText"
          arr={listCards}
          text="Edit"
          setElem={setElem}
          onClick={e => {
            setEditModal(true);
          }}
        />
      </div>
      {editModal && (
        <ModalEditCash
          elem={elem}
          open={editModal}
          onClose={() => {
            setEditModal(false);
          }}
        />
      )}
    </div>
  );
};

export default WrapperLeft;
