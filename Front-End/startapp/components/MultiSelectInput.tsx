"use client"

import React from 'react';
import Select from 'react-select';
import { customStyles } from './selectStyles'

const MultiSelectInput = () => {
  const options = [
    { value: 'opcion1', label: 'Opción 1' },
    { value: 'opcion2', label: 'Opción 2' },
    { value: 'opcion3', label: 'Opción 3' },
  ];
  
  const MultiInput = () => {
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
        />
      </div>
    );
  };
  return (
    <div className="mx-4 my-4 bg-gray-800 rounded-md text-gray-200 text-sm">
      <MultiInput/>
    </div>
  );
};

export default MultiSelectInput