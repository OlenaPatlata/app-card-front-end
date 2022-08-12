import s from './ModalDelCard.module.scss';
import ModalWrapper from 'components/ModalWrapper';
import Button from 'components/Button';
import { useState } from 'react';

const ModalDelCard = ({ open, onClose }) => {
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <div className={s.textWrapper}>
          Are you sure you want to delete this card?
        </div>
        <div className={s.buttonWrapper}>
          <Button onClick={onClose} text="Cancel" name="cancelBtn" />
          <Button onClick={onClose} text="Delete" name="deleteBtn" />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalDelCard;
