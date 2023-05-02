import Select, { components } from 'react-select';
import s from './SelectWithLabel.module.scss';

export const SelectWithLabel = ({ label, ...props }) => {
  const ValueContainer = ({ children, ...props }) => (
    <div>
      <p className={s.label}>{label}</p>
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    </div>
  );

  const customOptionLabel = data => (
    <div className={s.optionWrapper}>
      {data.icon && (
        <svg className={s.svg}>
          <use href={data.icon}></use>
        </svg>
      )}
      <span>{data.title}</span>
    </div>
  );

  return (
    <Select
      components={{ ValueContainer }}
      formatOptionLabel={customOptionLabel}
      isSearchable={false}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: 'rgba(37, 44, 65, 0.5)',
          border: 'none',
          borderRadius: '16px',
          height: '74px',
          cursor: 'pointer',
        }),
        valueContainer: (baseStyles, state) => ({
          ...baseStyles,
          paddingLeft: '18px',
        }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          margin: '0',
          color: '#f3f3f3',
        }),
        indicatorsContainer: (baseStyles, state) => ({
          ...baseStyles,
          paddingRight: '10px',
        }),
        indicatorSeparator: (baseStyles, state) => ({
          display: 'none',
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: '#f3f3f3',
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? '#B7D7FC' : '#f3f3f3',
          color: '#242424',
        }),
      }}
      {...props}
    />
  );
};
