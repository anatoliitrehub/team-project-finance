import React from 'react';
import Select from 'react-select';
import './DynamicsSelect.module.scss';

const options = [
  { value: 'january', label: 'January 2023' },
  { value: 'february', label: 'February 2023' },
  { value: 'march', label: 'March 2023' },
  { value: 'april', label: 'April 2023' },
  { value: 'may', label: 'May 2023' },
  { value: 'june', label: 'June 2023' },
  { value: 'july', label: 'July 2023' },
  { value: 'august', label: 'August 2023' },
  { value: 'september', label: 'September 2023' },
  { value: 'october', label: 'October 2023' },
  { value: 'november', label: 'November 2023' },
  { value: 'december', label: 'December 2023' },
];

const customStyles = {
  option: (provided, state) => ({
    backgroudColor: state.isSelected ? 'blue' : 'white',
  }),
};

const DynamicsSelect = () => (
  <>
    <Select
      classNamePrefix="react-select"
      styles={customStyles}
      options={options}
    />
  </>
);

export default DynamicsSelect;
