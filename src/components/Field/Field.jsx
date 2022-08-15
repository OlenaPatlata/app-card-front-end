import s from './Field.module.scss';
import { memo, useCallback } from 'react';

const Field = memo(props => {
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
  const onHandleChange = useCallback(
    e => {
      const { value } = e.target;
      onFieldChange(fieldName, value);
    },
    [onFieldChange, fieldName]
  );
  return (
    <fieldset className={s[fieldSize]} style={fieldStyle}>
      <input
        autoComplete="off"
        type={fieldType}
        name={fieldName}
        id={fieldName}
        onChange={onHandleChange}
        value={fieldValue}
        placeholder={fieldPlaceholder}
        required
        title={fieldTitle}
      />
      {hasError && (
        <p
          className={s.error}
        >{`Please fill in correct value for "${fieldName}".`}</p>
      )}
    </fieldset>
  );
});

export default Field;
