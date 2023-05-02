import { BasicInput } from 'components/BasicInput/BasicInput';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import s from './ModalAddBalance.module.scss';
import { useDispatch } from 'react-redux';
import { getBalanceUser } from 'redux/Auth/authOperations';

export const ModalAddBalance = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const addBalance = value => {
    dispatch(getBalanceUser(Number(value)));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.input.value;
    form.reset();
    addBalance(input);
    onClose();
  };

  return (
    <Modal show={show} showCloseBtn={true} onClose={onClose}>
      <form action="" onSubmit={handleSubmit}>
        <BasicInput name="input" placeholder="Enter balance" />
        <div className={s.btnBox}>
          <Button variant="primary" type="submit">
            Add
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};
