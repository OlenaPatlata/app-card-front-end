import s from './ModalAddCard.module.scss';
import ModalWrapper from 'components/ModalWrapper';

import { useState, useCallback } from 'react';
import { shemaValidAddCard } from './shemaValidAddCard';

import { getShowNumber } from 'assets/helpers/itemCard/itemCardFunc';

import { getBankInfo } from 'utils/apiNumber';
import { toast } from 'react-toastify';
import Form from 'components/Form';
import update from 'immutability-helper';

const ModalAddCard = ({ open, onClose }) => {
  const arrBody = {
    bank: '',
    type: '',
    paymentSystemType: '',
    number: '',
    expireDate: '',
    amount: 0,
    ccy: '',
    cardHolder: '',
    cvv: 0,
  };

  const [values, setValues] = useState({
    number: '',
    expireDate: '',
    cvv: 0,
    cardHolder: '',
    amount: 0,
    ccy: '',
  });
  const [errors, setErrors] = useState({
    number: false,
    expireDate: false,
    cvv: false,
    cardHolder: false,
    amount: false,
    ccy: false,
  });

  const onFieldChange = useCallback((fieldName, value) => {
    setValues(prevValues =>
      update(prevValues, { [fieldName]: { $set: value } })
    );
  }, []);

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
        onClose();
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
      <Form
        onClose={onClose}
        onHandleSubmit={onHandleSubmit}
        values={values}
        errors={errors}
        onFieldChange={onFieldChange}
      />
    </ModalWrapper>
  );
};

export default ModalAddCard;
