import s from './ModalEditCash.module.scss';
import ModalWrapper from 'components/ModalWrapper';
import Amount from 'components/Amount';
import Select from 'components/Select';
import Button from 'components/Button';
import { useState } from 'react';

const ModalEditCash = ({ open, onClose, elem }) => {
  const [fieldValue, setFieldValue] = useState({ amount: elem.amount });
  const [fieldCurrecy, setFieldCurrecy] = useState({ ccy: elem.ccy });
  console.log(fieldValue);
  console.log(fieldCurrecy);
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <div className={s.inputWrapper}>
          <Amount setFieldValue={setFieldValue} elem={elem} />
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
