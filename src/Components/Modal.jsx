import React from 'react';
import './Modal.css';

function Modal({open, children, onClose}) {
  const isOpen = open ? 'isOpen' : '';
  
  const onClickButton = () => {
    onClose();
  }

  return (
    <>
      <aside onClick={onClickButton} className={`modal__shell ${isOpen}`}></aside>
      <div className={`modal__wrapper ${isOpen}`}>
        <div className="modal__content">
          <button className="modal__close" onClick={onClickButton}>&#215;</button>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal;
