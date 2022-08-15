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
import { v4 as uuidv4 } from 'uuid';
import { getBankInfo } from 'utils/apiNumber';
import { toast } from 'react-toastify';

const ModalAddCard = ({ open, onClose }) => {
  // const [fieldCurrecy, setFieldCurrecy] = useState('');
  // const [amountValue, setAmountValue] = useState(0);
  // // const [numbertValue, setNumberValue] = useState(0);
  // const [expireDateValue, setExpireDateValue] = useState(0);
  // const [cvvValue, setCvvValue] = useState(0);
  // const [placeholderValue, setPlaceholderValue] = useState('');
  const arrBody = {
    bank: '',
    type: '',
    paymentSystemType: '',
    number: '',
    expireDate: '',
    amount: 0,
    ccy: '',
    cardHolder: '',
    CVV: 0,
  };

  // bank: '';
  // bin: '535432';
  // card: 'MASTERCARD';
  // country: 'UNITED STATES';
  // countrycode: 'US';
  // level: '';
  // phone: '';
  // type: 'DEBIT';
  // valid: 'true';
  // website: '';

  const onHandleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, name) => {
      if (name === 'number') {
        arrBody[name] = Number(value);
      } else {
        arrBody[name] = value;
      }
    });
    try {
      const bankInfo = await getBankInfo(String(arrBody.number).slice(0, 6));
      if (bankInfo?.valid === 'false') {
        toast.error(`Number ${arrBody.number} is invalid`);
        return;
      }
      arrBody.bank = bankInfo.bank || 'Bank';
      arrBody.type = bankInfo?.type?.toLowerCase();
      arrBody.paymentSystemType = bankInfo?.card?.toLowerCase();
      toast.success(`The card has already added`);
      onClose();
    } catch (error) {
      console.log(error);
      onClose();
    }
  };

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <form onSubmit={onHandleSubmit} id="1" name="formAddCard">
          <Title title="Додавання картки" name="titleBig" />
          <Input
            key={uuidv4()}
            name="number"
            type="number"
            size="big"
            placeholder="1234 1234 1234 1234"
            // setFieldValue={setNumberValue}
            callback={e => console.log(e)}
            // callback={getShowNumber}
            title="Inter card number, 16 figures"
          />
          <div className={s.inputWrapper}>
            <Input
              key={uuidv4()}
              name="expireDate"
              type="text"
              size="smoll"
              placeholder="12/25"
              // setFieldValue={setExpireDateValue}
              callback={e => console.log(e)}
              style={{ marginRight: '15px' }}
            />
            <Input
              key={uuidv4()}
              name="CVV"
              type="number"
              size="smoll"
              placeholder="927"
              // setFieldValue={setCvvValue}
              callback={e => console.log(e)}
            />
          </div>
          <Input
            key={uuidv4()}
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
              key={uuidv4()}
              name="amount"
              type="text"
              size="smoll"
              placeholder="0.00"
              // setFieldValue={setAmountValue}
              callback={handleAmount}
            />
            <Select
              // setFieldCurrecy={setFieldCurrecy}
              size="true"
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
