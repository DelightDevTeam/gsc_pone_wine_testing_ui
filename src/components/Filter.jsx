import React, { useEffect, useState } from 'react';
import { Select } from 'antd';

const SearchInput = ({ placeholder, style, options, onFilterChange }) => {
  const [filteredOptions, setFilteredOptions] = useState(options); // Filtered options
  const [value, setValue] = useState(''); // Selected value

  const handleSearch = (searchTerm) => {
    // Filter options based on the search term
    const filtered = options.filter((option) =>
      option.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleChange = (selectedValue) => {
    setValue(selectedValue);
    if (onFilterChange) {
      onFilterChange(selectedValue);
    }
  };

  return (
    <Select
      showSearch
      value={value}
      placeholder={placeholder}
      style={style}
      filterOption={false} // Disable default filtering
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent="No matches found"
      options={filteredOptions.map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};

const Filter = ({ game_names, handleFilter }) => {
  // Convert `game_names` into the required options format
  const options = game_names.map((name) => ({
    value: name,
    text: name,
  }));

  return (
    <SearchInput
      placeholder="Search for a game"
      style={{ width: 200 }}
      options={options}
      onFilterChange={handleFilter} // Pass the selected value to parent
    />
  );
};

export default Filter;
