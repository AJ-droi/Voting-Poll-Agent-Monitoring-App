import React from "react";

interface FilterProps {
  options: string[];
  selectedOption: string;
  onFilterChange: (option: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  options,
  selectedOption,
  onFilterChange,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 py-4">
      <label htmlFor="filter" className="text-sm font-medium text-gray-700">
        Filter by:
      </label>
      {options.map((option) => ( <select
        id="filter"
        value={selectedOption}
        onChange={(e) => onFilterChange(e.target.value)}
        className="rounded-md border px-3 py-1 text-sm w-[20%]"
        key={option}
      >
       
          <option  value={option}>
            {option}
          </option>
       
      </select> ))}
    </div>
  );
};

export default Filter;