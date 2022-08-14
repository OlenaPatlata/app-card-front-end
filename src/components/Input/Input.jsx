import s from './Input.module.scss';
import { useState } from 'react';

const Input = ({
  setFieldValue,
  name,
  type,
  placeholder,
  init = '',
  callback,
  size,
  title,
}) => {
  const [filterCurrenсy, setFilterCurrenсy] = useState(init);
  const onChangeFilter = e => {
    const { value } = e.target;
    // setFieldValue({ [name]: callback(value) });
    setFilterCurrenсy(value);
  };
  return (
    <div className={s[size]}>
      <input
        autoComplete="off"
        name={name}
        type={type}
        placeholder={placeholder}
        value={filterCurrenсy}
        onChange={onChangeFilter}
        onBlur={e => setFilterCurrenсy(callback(e.target.value))}
        required
        title={title}
      />
    </div>
  );
};

export default Input;
