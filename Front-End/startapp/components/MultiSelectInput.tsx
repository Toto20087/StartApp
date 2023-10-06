"use client"

import React from 'react';
import Select from 'react-select';
import customStyles from './selectCustomStyles';

const MultiSelectInput = () => {
  const options = [
    { value: 'opcion1', label: 'Back-End dev' },
    { value: 'opcion2', label: 'Front-End dev' },
    { value: 'opcion3', label: 'Software dev' },
  ];

  const MultiInput = () => {
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  
    const handleSelectChange = (selectedValues : string[]) => {
      setSelectedOptions(selectedValues);
    };
  
    return (
      <div className="w-96 h-12">
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
    <section>
      <div className='mt-4'>
        <h6 className="text-xs font-semibold tracking-widest font-bebas" >WHAT DO YOU DO?</h6>
      </div>
      <div className="bg-gray-800 rounded-md text-gray-200 text-sm w-96 h-12 mb-2 my-1">
        <MultiInput/>
      </div>
    </section>
  );
};

export default MultiSelectInput