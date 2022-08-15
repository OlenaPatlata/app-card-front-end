import { memo } from 'react';
import Select from 'components/Select';
import Button from 'components/Button';
import Title from 'components/Title';
import Field from 'components/Field';
import { handleAmount } from 'assets/helpers/form';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.scss';

const Form = memo(
  ({ onClose, onHandleSubmit, values, errors, onFieldChange }) => {
    return (
      <form
        className={s.wrapper}
        onSubmit={onHandleSubmit}
        name="formAddCard"
        noValidate
      >
        <Title title="Додавання картки" name="titleBig" />
        <Field
          key={uuidv4()}
          fieldType="number"
          fieldName="number"
          fieldValue={values.number}
          hasError={errors.number}
          onFieldChange={onFieldChange}
          fieldSize="big"
          fieldPlaceholder="1234 1234 1234 1234"
          fieldTitle="Inter card number, 16 figures"
        />
        <div className={s.fieldWrapper}>
          <Field
            key={uuidv4()}
            fieldType="text"
            fieldName="expireDate"
            fieldValue={values.expireDate}
            hasError={errors.expireDate}
            onFieldChange={onFieldChange}
            fieldSize="smoll"
            fieldPlaceholder="12/25"
            fieldStyle={{ marginRight: '15px' }}
          />
          <Field
            key={uuidv4()}
            fieldType="number"
            fieldName="cvv"
            fieldValue={values.cvv}
            hasError={errors.cvv}
            onFieldChange={onFieldChange}
            fieldSize="smoll"
            fieldPlaceholder="927"
          />
        </div>
        <Field
          key={uuidv4()}
          fieldType="text"
          fieldName="cardHolder"
          fieldValue={values.cardHolder}
          hasError={errors.cardHolder}
          onFieldChange={onFieldChange}
          fieldSize="big"
          fieldPlaceholder="Надія Смолянінова"
          required={false}
        />
        <div className={s.fieldWrapper}>
          <Field
            key={uuidv4()}
            fieldType="text"
            fieldName="amount"
            fieldValue={values.amount}
            hasError={errors.amount}
            onFieldChange={onFieldChange}
            fieldSize="smoll"
            fieldPlaceholder="0.00"
            callback={handleAmount}
          />
          <Select
            size="true"
            fieldValue={values.ccy}
            onFieldChange={onFieldChange}
          />
        </div>
        <div className={s.buttonWrapper}>
          <Button type="submit" text="Save" name="add" />
          <Button onClick={onClose} text="Cancel" name="cancelBtn" />
        </div>
      </form>
    );
  }
);

export default Form;