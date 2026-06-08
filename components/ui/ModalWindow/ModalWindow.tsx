'use client';

import { ReactNode, useEffect } from 'react';
import css from './ModalWindow.module.scss';
import { createPortal } from 'react-dom';

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalWindow = ({ isOpen, onClose, children }: ModalWindowProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.close} onClick={onClose}>
          x
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
};

export default ModalWindow;
