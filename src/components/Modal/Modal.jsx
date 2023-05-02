import PropTypes from 'prop-types';
import s from './Modal.module.scss';
import { useEffect } from 'react';
import clsx from 'clsx';
import icons from '../../assets/icons/sprite.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  show,
  showCloseBtn = true,
  onClose,
  className,
  children,
}) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    show && (
      <div className={s.backdrop} onClick={onClose}>
        <div
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className={clsx(className, s.popup)}>
            {showCloseBtn && (
              <button className={s.btnClose} onClick={onClose}>
                <svg className={s.iconClose}>
                  <use href={`${icons}#icon-close`}></use>
                </svg>
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    ),
    modalRoot
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  showCloseBtn: PropTypes.bool,
  onClose: PropTypes.func,
};
