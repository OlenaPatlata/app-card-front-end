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
          <input
            className={s.money}
            defaultValue=""
            {...register('number', { required: true })}
          />
          <div className={s.inputWrapper}>
            <input
              defaultValue=""
              {...register('expireDate', { required: true })}
            />
            <input defaultValue="" {...register('CVV', { required: true })} />
          </div>
          <input defaultValue="" {...register('cardHolder')} />
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
