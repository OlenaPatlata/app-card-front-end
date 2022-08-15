import { memo, useState, useCallback } from 'react';
import update from 'immutability-helper';
import ModalWrapper from 'components/ModalWrapper';
import Form from 'components/Form';
import { shemaValidAddCard } from './shemaValidAddCard';
import { getBankInfo } from 'utils/apiNumber';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { getShowNumber } from 'assets/helpers/itemCard/itemCardFunc';
import s from './ModalAddCard.module.scss';

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
  // Create state for form values:
  const [values, setValues] = useState({
    number: 0,
    expireDate: '',
    cvv: 0,
    cardHolder: '',
    amount: 0,
    ccy: '',
  });
  // Create state for form errors:
  const [errors, setErrors] = useState({
    number: false,
    expireDate: false,
    cvv: false,
    cardHolder: false,
    amount: false,
    ccy: false,
  });
  // Create handler for input change event:
  const onFieldChange = useCallback((fieldName, value) => {
    setValues(prevValues =>
      update({ ...prevValues, [fieldName]: { $set: value } })
    );
  }, []);

  // Create handler for form submit event:
  const onSubmit = useCallback(
    async e => {
      e.preventDefault();
      const isFormValid = await shemaValidAddCard.isValid(values, {
        abortEarly: false,
      });
      if (isFormValid) {
        console.log('Form is legit');
        // const formData = new FormData(e.currentTarget);
        // formData.forEach((value, name) => {
        //   if (name === 'number') {
        //     arrBody[name] = Number(value);
        //   } else {
        //     arrBody[name] = value;
        //   }
        // });
        // const bankInfo = await getBankInfo(String(arrBody.number).slice(0, 6));
        // if (bankInfo?.valid === 'false') {
        //   toast.error(`Number ${arrBody.number} is invalid`);
        //   onClose();
        //   return;
        // }
        // arrBody.bank = bankInfo.bank || 'Bank';
        // arrBody.type = bankInfo?.type?.toLowerCase();
        // arrBody.paymentSystemType = bankInfo?.card?.toLowerCase();
        // toast.success(`The card has already added`);
        // onClose();
      } else {
        shemaValidAddCard.validate(values, { abortEarly: false }).catch(err => {
          const errors = err.inner.reduce((acc, error) => {
            return { ...acc, [error.path]: true };
          }, {});
          setErrors(prevErrors => update(prevErrors, { $set: errors }));
        });
      }
    },
    [values]
  );

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <Form
        onClose={onClose}
        onSubmit={onSubmit}
        values={values}
        errors={errors}
        onFieldChange={onFieldChange}
      />
    </ModalWrapper>
  );
};

export default ModalAddCard;
