import s from './WrapperLeft.module.scss';
import List from 'components/List';
const WrapperLeft = () => {
  return (
    <div className={s.wrapperLeft}>
      <div className={s.titleWrapper}>
        <h2>title</h2>
      </div>

      <List
        name="listSmoll"
        onClick={() => {
          console.log(1111);
        }}
      />
    </div>
  );
};

export default WrapperLeft;
