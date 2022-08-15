import s from './Field.module.scss';
import { memo, useCallback, useState } from 'react';

const Field = props => {
  const {
    fieldType,
    fieldName,
    onFieldChange,
    fieldValue,
    fieldPlaceholder,
    fieldSize,
    fieldTitle,
    fieldStyle,
    hasError,
  } = props;
  const [valueLocal, setValueLocal] = useState('');
  const onSetValue = e => {
    setValueLocal(e.target.value);
  };

  const onHandleChange = useCallback(
    e => {
      // const { value } = e.target;
      onFieldChange(fieldName, valueLocal);
      console.log(valueLocal);
    },
    [onFieldChange, valueLocal, fieldName]
  );

  return (
    <fieldset className={s[fieldSize]} style={fieldStyle}>
      <input
        autoComplete="off"
        type={fieldType}
        name={fieldName}
        id={fieldName}
        onBlur={onHandleChange}
        value={valueLocal}
        onChange={onSetValue}
        placeholder={fieldPlaceholder}
        title={fieldTitle}
      />
      {hasError && (
        <p
          className={s.error}
        >{`Please fill in correct value for "${fieldName}".`}</p>
      )}
    </fieldset>
  );
};

export default Field;
