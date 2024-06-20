"use client";
import * as React from "react";

interface IFilterButtonGroupProps {}

const FilterButtonGroup: React.FunctionComponent<IFilterButtonGroupProps> = (
  props
) => {
  const [selected, setSelected] = React.useState<string>("all");

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="flex gap-2 p-2">
      <button
        onClick={() => handleSelect("all")}
        className={`rounded-full px-4 py-2 border ${
          selected === "all"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-gray-100 text-black border-gray-300 hover:bg-blue-100 hover:border-blue-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleSelect("normal")}
        className={`rounded-full px-4 py-2 border ${
          selected === "normal"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-gray-100 text-black border-gray-300 hover:bg-blue-100 hover:border-blue-200"
        }`}
      >
        Normal
      </button>
      <button
        onClick={() => handleSelect("critical")}
        className={`rounded-full px-4 py-2 border ${
          selected === "critical"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-gray-100 text-black border-gray-300 hover:bg-blue-100 hover:border-blue-200"
        }`}
      >
        Critical
      </button>
    </div>
  );
};

export default FilterButtonGroup;
