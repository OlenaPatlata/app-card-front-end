import s from './WrapperRight.module.scss';
import List from 'components/List';
import Button from 'components/Button';
const WrapperRight = () => {
  const openModal = () => {
    console.log('openModal');
  };
  return (
    <div className={s.wrapperRight}>
      <div className={s.buttonWrapper}>
        <Button onClick={openModal} text="Додати картку" />
        <Button onClick={openModal} text="Додати готівку" />
      </div>

      <List
        name="listBig"
        onClick={() => {
          console.log(1111);
        }}
      />
    </div>
  );
};

export default WrapperRight;
