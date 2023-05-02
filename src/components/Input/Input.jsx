import style from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({
  id,
  label,
  value,
  placeholder,
  name,
  onChange,
  classNameWrapp = `${style.wrapp}`,
  classNameInput = `${style.input}`,
  classNameLabel = `${style.label}`,
}) => {
  return (
    <div className={classNameWrapp}>
      <input
        id={id}
        className={classNameInput}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label className={classNameLabel} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classNameWrapp: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameLabel: PropTypes.string,
};

export default Input;
