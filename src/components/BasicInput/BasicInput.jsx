import clsx from 'clsx';
import s from './BasicInput.module.scss';

export const BasicInput = ({ name, className,placeholder, ...props }) => {
  return (
    <input
      id={name}
      placeholder={placeholder}
      className={clsx(className, s.input)}
      type="text"
      name={name}
      {...props}
    />
  );
};
