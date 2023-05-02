import Modal from 'components/Modal/Modal';
import s from './ModalCongratulation.module.scss';

const ModalCongratulation = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose} className={s.popup}>
      <h2 className={s.title}>Hooray! Congratulations!</h2>
      <p className={s.text}>
        You did it! We are so proud of you and wish you all the best as you
        embark on this exciting new chapter of your life.
      </p>
    </Modal>
  );
};

export default ModalCongratulation;
