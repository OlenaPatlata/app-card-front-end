import s from './WrapperRight.module.scss';
import List from 'components/List';
import Button from 'components/Button';
import { listCards } from 'assets/const';

const WrapperRight = () => {
  const openModal = () => {
    console.log('openModal');
  };
  return (
    <div className={s.wrapperRight}>
      <div className={s.buttonWrapper}>
        <Button onClick={openModal} text="Додати картку" name="add" />
        <Button onClick={openModal} text="Додати готівку" name="add" />
      </div>
      <List
        name="itemCard"
        text="Delete"
        arr={listCards}
        onClick={() => {
          console.log('delete card');
        }}
      />
    </div>
  );
};

export default WrapperRight;
