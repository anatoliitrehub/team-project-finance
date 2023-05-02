import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Input from '../Input/Input';
import s from './ModalEditTransaction.module.scss';
import { useState } from 'react';
import { SelectWithLabel } from 'components/SelectWithLabel/SelectWithLabel';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesWithIcons } from 'redux/Cashflow/cashflowSelectors';

import { updateTransaction } from 'redux/Statistics/StatisticsOperations';

export const ModalEditTransaction = ({
  show,
  onClose,
  categoryName,
  commentName,
  sumName,
  id,
}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(commentName);
  const [sum, setSum] = useState(sumName);

  const handleSubmit = () => {
    dispatch(
      updateTransaction({
        id: id,
        data: { comment, sum, category: 'other' },
      })
    );
    onClose();
  };

  const [selectedCategory, setSelectedCategory] = useState({
    title: categoryName,
  });

  const categories = useSelector(selectCategoriesWithIcons);

  // const categories = useSelector(selectCategoriesWithIcons);
  // const [selectedCategory, setSelectedCategory] = useState(() => {
  //   return categories.find(category => category.name === categoryName);
  // });

  // const [comment, setComment] = useState(commentName);
  // const [sum, setSum] = useState(sumName);
  // const dispatch = useDispatch();

  // const handleSubmit = (values, { setSubmitting, setFieldError }) => {
  //   setSubmitting(false);
  //   dispatch(
  //     addTransaction({
  //       ...values,
  //       category: selectedCategory.name,
  //       type: 'expense',
  //     })
  //   );
  // };

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };
  return (
    <Modal
      show={show}
      showCloseBtn={true}
      onClose={onClose}
      className={s.popup}
    >
      <form>
        <div className={s.inputWrapper}>
          <SelectWithLabel
            name="category"
            value={selectedCategory}
            options={categories}
            label="Per category"
            onChange={handleCategoryChange}
          />

          <Input
            label="Expense comment"
            value={comment}
            name="comment"
            onChange={e => {
              setComment(e.target.value);
            }}
          />
          <Input
            label="Sum"
            value={Number(sum).toFixed(2)}
            name="sum"
            onChange={e => {
              setSum(e.target.value);
            }}
          />
        </div>
        <Button variant="primary" className={s.btnBox} onClick={handleSubmit}>
          Edit
        </Button>
      </form>
    </Modal>
  );
};
