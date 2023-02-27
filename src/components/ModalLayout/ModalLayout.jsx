import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  CloseButton,
  CloseIcon,
  ModalContainer,
  ModalLayoutBox,
} from './ModalLayout.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalLayout = ({ setShowModal, children, ...props }) => {
  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', onCloseByEscape);
    console.log();

    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
    };
  }, [setShowModal]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };
  return createPortal(
    <ModalLayoutBox
      initial={{ opacity: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      onClick={onBackdropClick}
    >
      <ModalContainer {...props}>
        <CloseButton whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setShowModal(false)}>
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalLayoutBox>,
    modalRoot
  );
};
