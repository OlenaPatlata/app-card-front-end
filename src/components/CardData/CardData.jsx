import s from './CardData.module.scss';
import WrapperLeft from 'components/WrapperLeft';
import WrapperRight from './../WrapperRight/WrapperRight';

const CardData = () => {
  return (
    <div className={s.wrapper}>
      <WrapperLeft />
      <WrapperRight />
    </div>
  );
};

export default CardData;
