import s from './Field.module.scss';
import { useCallback } from 'react';

const Field = props => {
  const {
    fieldType,
    fieldName,
    fieldValue,
    fieldPlaceholder,
    fieldSize,
    // fieldTitle,
    fieldStyle,
    hasError,
    autocomplete,
    onFieldChange,
    xAutocompletetype,
    pattern,
  } = props;

  const onFieldHandleChange = useCallback(
    event => {
      onFieldChange(fieldName, event.target.value);
    },
    [onFieldChange, fieldName]
  );

  return (
    <fieldset className={s[fieldSize]} style={fieldStyle}>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type={fieldType}
        name={fieldName}
        id={fieldName}
        autoComplete={autocomplete}
        x-autocompletetype={xAutocompletetype}
        // onBlur={onHandleChange}
        value={fieldValue}
        onChange={onFieldHandleChange}
        placeholder={fieldPlaceholder}
        pattern={pattern}
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
