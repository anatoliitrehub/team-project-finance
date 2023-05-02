import { BasicInput } from 'components/BasicInput/BasicInput';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import s from './ModalAddIncome.module.scss';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/Cashflow/cashflowOperations';

export const ModalAddIncome = ({ show, onClose }) => {
  const dispatch = useDispatch();
  // const addIncome = value => {
  //   dispatch(addTransaction({ type: 'income', sum: Number(value) }));
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.input.value;
    dispatch(addTransaction({ type: 'income', sum: Number(input) }))
    form.reset();

    // addIncome(input);
    onClose();
  };

  return (
    <Modal show={show} showCloseBtn={true} onClose={onClose}>
      <form action="" onSubmit={handleSubmit}>
        <BasicInput name="input" placeholder="Enter income" />
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
