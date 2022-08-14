import s from './ModalAddCard.module.scss';
import ModalWrapper from 'components/ModalWrapper';
import Select from 'components/Select';
import Button from 'components/Button';
import Title from 'components/Title';
import { useState } from 'react';
import { shemaValidAddCard } from './shemaValidAddCard';
import Input from 'components/Input';
import { handleAmount } from 'assets/helpers/form';
import { getShowNumber } from 'assets/helpers/itemCard/itemCardFunc';

const ModalAddCard = ({ open, onClose }) => {
  const [fieldCurrecy, setFieldCurrecy] = useState('');
  const [amountValue, setAmountValue] = useState(0);
  // const [numbertValue, setNumberValue] = useState(0);
  const [expireDateValue, setExpireDateValue] = useState(0);
  const [cvvValue, setCvvValue] = useState(0);
  const [placeholderValue, setPlaceholderValue] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, name) => {
      console.log(name);
      console.log(value);
    });

    onClose();
  };

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <form onSubmit={onHandleSubmit} id="1">
          <Title title="Додавання картки" name="titleBig" />
          <Input
            name="number"
            type="text"
            size="big"
            placeholder="1234 1234 1234 1234"
            // setFieldValue={setNumberValue}
            callback={getShowNumber}
          />
          <div className={s.inputWrapper}>
            <Input
              name="expireDate"
              type="text"
              size="smoll"
              placeholder="12/25"
              // setFieldValue={setExpireDateValue}
              callback={e => console.log(e)}
            />
            <Input
              name="CVV"
              type="text"
              size="smoll"
              placeholder="927"
              // setFieldValue={setCvvValue}
              callback={e => console.log(e)}
            />
          </div>
          <Input
            name="cardHolder"
            type="text"
            size="big"
            placeholder="Надія Смолянінова"
            // setFieldValue={setPlaceholderValue}
            callback={e => console.log(e)}
            required={false}
          />
          <div className={s.inputWrapper}>
            <Input
              name="amount"
              type="text"
              size="smoll"
              placeholder="0.00"
              // setFieldValue={setAmountValue}
              callback={handleAmount}
            />
            <Select
              // setFieldCurrecy={setFieldCurrecy}
              style={{ width: '50%' }}
            />
          </div>
          <div className={s.buttonWrapper}>
            <Button type="submit" text="Save" name="add" />
            <Button onClick={onClose} text="Cancel" name="cancelBtn" />
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddCard;
