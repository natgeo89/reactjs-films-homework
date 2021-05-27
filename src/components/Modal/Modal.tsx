import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.scss';

interface ModalProps {
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onCancel }) => {
  const modal = (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <button className={styles.close} type="button" onClick={onCancel}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.querySelector('body'));
};

export default Modal;
