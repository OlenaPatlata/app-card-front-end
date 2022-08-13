import * as yup from "yup";

export const shemaValidAddCard = yup.object().shape({
  number: yup.number().min(16).max(16).required(),
  expireDate: yup.date().required(),
  cvv: yup.number().min(3).max(3).required(),
  cardHolder: yup.string(),
  amount: yup.number().required(),
  ccy: yup.string().required(),
}).required();