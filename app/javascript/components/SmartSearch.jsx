import React from "react";
import ReactSelect from "react-select";

const customizeSearch = () => ({
  components: {
    DropdownIndicator: () => <i className="icn-logo material-icons">search</i>
  },
  customStyles: {
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      transition: "all .2s ease"
    })
  }
});

const EmptyOptions = ({ inputValue }) => (
  <div>{inputValue ? "No Results Found" : "Type to Search"} </div>
);

const SmartSearch = ({
  label,
  placeholder,
  value,
  options,
  className,
  onChange,
  classNamePrefix
}) => {
  const handleChange = selected => {
    onChange(selected);
  };

  return (
    <>
      {label && <label>{label}</label>}
      <ReactSelect
        menuContainerStyle={{ 'zIndex': 999 }}
        {...customizeSearch()}
        classNamePrefix={classNamePrefix}
        placeholder={placeholder}
        noOptionsMessage={EmptyOptions}
        options={[]}
        value={value}
        options={options}
        className={className}
        onChange={handleChange}
        isSearchable
        isClearable
      />
    </>
  );
};

export default SmartSearch;
