/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState, useCallback, useReducer } from 'react';
import update from 'immutability-helper';
import ModalWrapper from 'components/ModalWrapper';
import Form from 'components/Form';
// import { shemaValidAddCard } from './shemaValidAddCard';
import { getBankInfo } from 'utils/apiNumber';
import { toast } from 'react-toastify';
import * as yup from 'yup';
// import { getShowNumber } from 'assets/helpers/itemCard/itemCardFunc';
// import s from './ModalAddCard.module.scss';

const shemaValidAddCard = yup.object().shape({
  number: yup.string().min(16).required(),
  expireDate: yup.string().required(),
  cvv: yup.string().min(3).required(),
  cardHolder: yup.string().default(''),
  amount: yup.number().positive().required(),
  ccy: yup.string().min(3).required(),
});

const CONST__TYPE = {
  NUMBER: 'number',
  EXPIREDATE: 'expireDate',
  CVV: 'cvv',
  CARDHOLDER: 'cardHolder',
  AMOUNT: 'amount',
  CCY: 'ccy',
  RESET: 'reset',
};
const initialState = {
  number: '',
  expireDate: '',
  cvv: '',
  cardHolder: '',
  amount: '',
  ccy: '',
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONST__TYPE.NUMBER:
      return { ...state, number: payload };
    case CONST__TYPE.EXPIREDATE:
      return { ...state, expireDate: payload };
    case CONST__TYPE.CVV:
      return { ...state, cvv: payload };
    case CONST__TYPE.CARDHOLDER:
      return { ...state, cardHolder: payload };
    case CONST__TYPE.AMOUNT:
      return { ...state, amount: payload };
    case CONST__TYPE.CCY:
      return { ...state, ccy: payload };
    case CONST__TYPE.RESET:
      return initialState;
    default:
      return state;
  }
};

const ModalAddCard = memo(({ open, onClose }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
  // const [values, setValues] = useState({
  //   number: '',
  //   expireDate: '',
  //   cvv: '',
  //   cardHolder: '',
  //   amount: '',
  //   ccy: '',
  // });
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
    dispatch({ type: fieldName, payload: value });
  }, []);

  // Create handler for form submit event:
  const onSubmit = useCallback(
    async e => {
      e.preventDefault();
      // console.log(111111);
      // console.log(state);
      const isFormValid = await shemaValidAddCard.isValid(state, {
        abortEarly: false,
      });
      // console.log(isFormValid);
      if (isFormValid) {
        console.log('Form is legit');
        const formData = new FormData(e.currentTarget);
        formData.forEach((value, name) => {
          if (name === 'number') {
            arrBody[name] = Number(value);
          } else {
            arrBody[name] = value;
          }
        });
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
      } else {
        shemaValidAddCard.validate(state, { abortEarly: false }).catch(err => {
          const errors = err.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: true,
            };
          }, {});

          setErrors(prevErrors =>
            update(prevErrors, {
              $set: errors,
            })
          );
        });
      }
    },
    [state]
  );

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <Form
        onClose={onClose}
        onSubmit={onSubmit}
        values={state}
        errors={errors}
        onFieldChange={onFieldChange}
      />
    </ModalWrapper>
  );
});

export default ModalAddCard;

// <form>
//   <label for="cc-num">Credit Card Number</label>
//   <input type="text" id="cc-num" autocomplete="cc-number" x-autocompletetype="cc-number" pattern="\d*">

//   <label for="cc-exp-month">Expiration Month</label>
//   <input type="number" id="cc-exp-month" name="cc-exp-month" autocomplete="cc-exp-month" x-autocompletetype="cc-exp-month">

//   <label for="cc-exp-year">Expiration Year</label>
//   <input type="number" id="cc-exp-year" name="cc-exp-year" autocomplete="cc-exp-year" x-autocompletetype="cc-exp-year">

//   <label for="cvv2">CVV</label>
//   <input type="text" id="cvv2" name="cvv2" autocomplete="cc-csc">

// </form>
