import s from './ModalEditCash.module.scss';
import ModalWrapper from 'components/ModalWrapper';
import Select from 'components/Select';
import Button from 'components/Button';
import { useState } from 'react';
import Input from 'components/Input';
import { handleAmount } from 'assets/helpers/form';

const ModalEditCash = ({ open, onClose, elem }) => {
  const [fieldValue, setFieldValue] = useState({
    amount: elem?.amount || '',
  });
  const [fieldCurrecy, setFieldCurrecy] = useState({ ccy: elem?.ccy || '' });
  console.log(fieldValue);
  console.log(fieldCurrecy);
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <div className={s.inputWrapper}>
          <Input
            name="amount"
            size="medium"
            type="text"
            placeholder="0.00"
            setFieldValue={setFieldValue}
            init={elem ? handleAmount(String(elem.amount)) : ''}
            callback={handleAmount}
            title="Please input amount"
          />
          <Select setFieldCurrecy={setFieldCurrecy} elem={elem} />
        </div>
        <div className={s.buttonWrapper}>
          <Button onClick={onClose} text="Save" name="add" />
          <Button onClick={onClose} text="Cancel" name="cancelBtn" />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalEditCash;
