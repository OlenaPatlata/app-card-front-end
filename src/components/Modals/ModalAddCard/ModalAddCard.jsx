import s from './ModalAddCard.module.scss';
import ModalWrapper from 'components/ModalWrapper';
import Amount from 'components/Amount';
import Select from 'components/Select';
import Button from 'components/Button';
import Title from 'components/Title';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { shemaValidAddCard } from './shemaValidAddCard';

const ModalAddCard = ({
  open,
  onClose,
  elem = { amount: '0', ccy: 'UAN' },
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    onClose();
  };

  const [fieldValue, setFieldValue] = useState({ amount: elem.amount });
  const [fieldCurrecy, setFieldCurrecy] = useState({ ccy: elem.ccy });
  console.log(fieldValue);
  console.log(fieldCurrecy);
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title title="Додавання картки" name="titleBig" />
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="" {...register('example', { required: true })} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('exampleRequired', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <div className={s.inputWrapper}>
            <Amount setFieldValue={setFieldValue} elem={elem} />
            <Select setFieldCurrecy={setFieldCurrecy} elem={elem} />
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
