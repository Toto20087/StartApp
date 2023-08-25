"use client"

import React from 'react';
import Select from 'react-select';
import { customStyles } from './selectStyles';

const MultiSelectInput = () => {
  const options = [
    { value: 'opcion1', label: 'Opción 1' },
    { value: 'opcion2', label: 'Opción 2' },
    { value: 'opcion3', label: 'Opción 3' },
  ];
  
  const Input = () => {
    const [selectedOptions, setSelectedOptions] = React.useState([]);
  
    const handleSelectChange = (selectedValues) => {
      setSelectedOptions(selectedValues);
    };
  
    return (
      <div className="w-64">
        <Select
          isMulti
          options={options}
          value={selectedOptions}
          onChange={handleSelectChange}
          styles={customStyles}
          className='text-gray-200 '
        />
      </div>
    );
  };
  return (
    <div className="flex justify-center w-64 h-10 rounded bg-gray-800 text-gray-200 text-sm">
      <Input/>
    </div>
  );
};

export default MultiSelectInput