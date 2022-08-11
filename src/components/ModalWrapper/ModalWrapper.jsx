import { createPortal } from 'react-dom';
import Overlay from 'components/Overlay';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useCloseByEsc } from './../../hooks/useCloseByEsc';
import s from './ModalWrapper.module.scss';

const ModalWrapper = ({ size = 'small', open, onClose, children }) => {
  const modalRef = useRef(document.getElementById('modalRoot'));
  useCloseByEsc(onClose, open);

  return (
    open &&
    createPortal(
      <Overlay onClick={onClose}>
        <div className={`${s.modal} ${size === 'large' && s.large}`}>
          {children}
        </div>
      </Overlay>,
      modalRef.current
    )
  );
};
ModalWrapper.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWrapper;
