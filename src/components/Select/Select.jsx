import { useState } from 'react';
import { currenсy } from 'assets/const';
import { useCloseByEsc } from 'hooks/useCloseByEsc';
import { useMouseClose } from 'hooks/useMouseClose';
import s from './Select.module.scss';

const Select = ({ setFieldCurrecy, elem, style }) => {
  const [isActive, setIsActive] = useState(false);
  const [filterCurrenсy, setFilterCurrenсy] = useState(elem?.ccy || '');

  // При клике по инпутy открывается/закрывается селект
  const handleClick = () => {
    setIsActive(!isActive);
    setFilterCurrenсy('');
  };
  // Забрасывает в локальный стейт слово введенное в инпут
  const onChangeFilter = e => {
    const { value } = e.target;
    setFilterCurrenсy(value);
  };
  // Функция для получения отфильтрованного списка валют для рендера в селекте (отбор по буквам / цифрам введенным в инпут)
  const getVisibleCurrenсy = currenсy => {
    if (!currenсy) {
      return [];
    }
    if (!filterCurrenсy) {
      return currenсy;
    }
    const normWord = filterCurrenсy.toLocaleLowerCase().trim();
    return currenсy.filter(
      ({ ccy, number, name }) =>
        ccy.toLocaleLowerCase().includes(normWord) ||
        name.toLocaleLowerCase().includes(normWord) ||
        String(number).includes(filterCurrenсy)
    );
  };
  // Результатом выполнения функции является список валют по буквам / цифрам введенным в инпут
  const сurrenсyFiltered = getVisibleCurrenсy(currenсy);

  // Для закрытия кликом по экрану и на Esc ввели функцию closeSelect, которая передается вместе с флагом как параметры в кастомные хуки useMouseClose (который вешает слушателя на document при открытом селекте и снимает его при закрытии селекта) и useCloseByEsc
  const closeSelect = () => {
    setIsActive(false);
    setFilterCurrenсy('');
  };
  const ulRef = useMouseClose(closeSelect, isActive);

  // При нажатии на клавишу ESС селект закрывается и инпут очищается
  useCloseByEsc(closeSelect, isActive);

  return (
    <div className={s.dropdown} ref={ulRef} style={style}>
      <div className={s.dropdown__wrapper} onClick={handleClick}>
        <input
          autoComplete="off"
          className={s.dropdown__input}
          type="text"
          name="filter"
          value={filterCurrenсy}
          onChange={onChangeFilter}
          placeholder="Choose currency"
        />
      </div>
      {isActive && (
        <ul className={s.dropdown__content}>
          {сurrenсyFiltered?.map(elem => (
            <li
              key={[elem.number]}
              onClick={e => {
                setFilterCurrenсy(elem.ccy);
                setIsActive(false);
                // setFieldCurrecy({ ccy: filterCurrenсy });
              }}
              className={s.dropdown__item}
            >
              {elem.ccy}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
