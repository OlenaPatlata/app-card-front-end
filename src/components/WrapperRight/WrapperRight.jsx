import s from './WrapperRight.module.scss';
import List from 'components/List';
import Button from 'components/Button';
import { listCards } from 'assets/const';
import useToggle from './../../hooks/useToggle';
import { useState } from 'react';
import ModalDelCard from 'components/Modals/ModalDelCard';

const WrapperRight = () => {
  const [delModal, setDelModal] = useToggle();
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
        onClick={e => {
          setDelModal(true);
        }}
      />
      {delModal && (
        <ModalDelCard
          open={delModal}
          onClose={() => {
            setDelModal(false);
          }}
        />
      )}
    </div>
  );
};

export default WrapperRight;
