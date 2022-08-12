import s from './ModalDelCard.module.scss';
import ModalWrapper from 'components/ModalWrapper';
import Button from 'components/Button';
// import { useState } from 'react';
import Media from 'react-media';

const ModalDelCard = ({ open, onClose }) => {
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <div className={s.textWrapper}>
          <span className={s.text}>
            Are you sure you want to delete this card?
          </span>
        </div>
        <div className={s.buttonWrapper}>
          <Button onClick={onClose} text="Cancel" name="cancelBtn" />

          <Media
            queries={{
              small: '(max-width: 767px)',
              medium: '(min-width: 768px)',
            }}
          >
            {matches => (
              <>
                {matches.small && (
                  <Button
                    onClick={onClose}
                    text="Delete"
                    name="deleteBtn"
                    style={{ marginTop: '15px' }}
                  />
                )}
                {matches.medium && (
                  <Button
                    onClick={onClose}
                    text="Delete"
                    name="deleteBtn"
                    style={{
                      width: '50%',
                      marginLeft: '15px',
                      marginTop: '0px',
                    }}
                  />
                )}
              </>
            )}
          </Media>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalDelCard;
