import s from './ExpensesListItem.module.css';
import icons from '../../../../assets/icons/sprite.svg';
import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
import { usePopup } from 'hooks/usePopup';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/Statistics/StatisticsOperations';

const ExpensesListItem = ({
  category,
  comment,
  sum,
  date,
  id,
  update,
  setUpdate,
}) => {
  const { show, showPopup, closePopup } = usePopup();
  const dispatch = useDispatch();

  const onDeleteTransactionHandler = useCallback(
    id => {
      dispatch(deleteTransaction(id));
    },
    [dispatch]
  );

  return (
    <>
      <li className={s.list}>
        <ul className={s.colum}>
          <li>
            <ul>
              <li
                style={{
                  color: 'rgba(243, 243, 243, 0.3)',
                  fontSize: '12px',
                  lineHeight: '14px',
                }}
              >
                {date}
              </li>
              <li>{comment}</li>
            </ul>
          </li>
          <li>{sum} UAH</li>
        </ul>
        <ul className={s.colum}>
          <li className={s.categorie} style={{}}>
            {category}
          </li>
          <li>
            <ul className={s.colum_icons}>
              <li>
                <div onClick={showPopup}>
                  <svg className={s.icon}>
                    <use href={`${icons}#icon-pen`}></use>
                  </svg>
                  <ModalEditTransaction
                    show={show}
                    onClose={closePopup}
                    categoryName={category}
                    commentName={comment}
                    sumName={sum}
                    id={id}
                    update={update}
                    setUpdate={setUpdate}
                  />
                </div>
              </li>
              <li className={s.iconPos}>
                <div onClick={() => onDeleteTransactionHandler(id)}>
                  <svg className={s.icon}>
                    <use href={`${icons}#icon-trash`}></use>
                  </svg>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
};

export default ExpensesListItem;
