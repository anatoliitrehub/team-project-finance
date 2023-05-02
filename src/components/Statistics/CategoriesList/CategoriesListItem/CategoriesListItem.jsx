import s from './CategoriesListItem.module.css';
const CategoriesListItem = ({ category, amount, percentage }) => {
  return (
    <>
      <li className={s.main}>
        <ul className={s.li}>
          <li>{category}</li>
          <li>- {amount} UAH</li>
        </ul>

        <div className={s.persent}>
          <p>{percentage}</p>
        </div>
      </li>
    </>
  );
};

export default CategoriesListItem;
