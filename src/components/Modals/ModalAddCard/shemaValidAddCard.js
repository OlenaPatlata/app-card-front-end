import * as yup from "yup";

export const shemaValidAddCard = yup.object().shape({
  number: yup.number().positive().integer().min(16).max(16).required(),
  expireDate: yup.date().min(new Date()).required(),
  cvv: yup.number().positive().min(3).max(3).required(),
  cardHolder: yup.string().default(''),
  amount: yup.number().positive().required(),
  ccy: yup.string().required(),
}).required();