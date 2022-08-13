import s from './Amount.module.scss';
import { useState } from 'react';

const Amount = ({ setFieldValue, elem }) => {
  const handleAmount = value => {
    if (!value || Number.isNaN(Number(value))) return value;
    const length = value.length;
    const dot = value.indexOf('.');
    if (dot < 0) {
      return value.concat('.00');
    }
    if (dot < length - 3) {
      return value.slice(0, dot + 3);
    }

    if (dot > length - 3) {
      return value.padEnd(dot + 3, '0');
    }
    return value;
  };
  const [filterCurrenсy, setFilterCurrenсy] = useState(
    handleAmount(String(elem.amount))
  );
  const onChangeFilter = e => {
    const { value } = e.target;
    setFieldValue({ amount: handleAmount(value) });
    setFilterCurrenсy(value);
  };
  return (
    <div className={s.moneyWrapper}>
      <input
        autoComplete="off"
        name="amount"
        type="text"
        placeholder="0.00"
        className={s.money}
        value={filterCurrenсy}
        onChange={onChangeFilter}
        onBlur={e => setFilterCurrenсy(handleAmount(e.target.value))}
      />
    </div>
  );
};

export default Amount;
