import { memo, useCallback } from 'react';

const Field = memo(props => {
  const {
    fieldName,
    onFieldChange,
    labelText,
    fieldType,
    fieldValue,
    hasError,
  } = props;
  const onFieldHandleChange = useCallback(
    event => {
      props.onFieldChange(fieldName, event.target.value);
    },
    [onFieldChange, fieldName]
  );

  return (
    <fieldset>
      <label htmlFor={fieldName}>{labelText}</label>

      <input
        type={fieldType}
        name={fieldName}
        id={fieldName}
        onChange={onFieldHandleChange}
        value={fieldValue}
      />

      {hasError && <p>{`Please fill in correct value for "${labelText}".`}</p>}
    </fieldset>
  );
});

export default Field;
