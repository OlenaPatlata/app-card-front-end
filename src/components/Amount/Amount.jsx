import s from './Amount.module.scss';
import { useState } from 'react';
import { handleAmount } from 'assets/helpers/form';

const Amount = ({ setFieldValue, elem }) => {
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
