"use client";
import Select from "react-select";
import React, { useState } from "react";

export default function Home() {
  const firstOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "orange", label: "Orange" },
  ];

  const secondOptions = [
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "babypink", label: "Baby Pink" },
  ];

  const thirdOptions = [
    { value: "skyBlue", label: "Sky Blue" },
    { value: "magenta", label: "Magenta" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
  ];
  const [dropdown1Values, setDropdown1Values] = useState<
    { value: string; label: string }[]
  >([]);
  const [dropdown2Values, setDropdown2Values] = useState<
    { value: string; label: string }[]
  >([]);
  const [dropdown3Values, setDropdown3Values] = useState<
    { value: string; label: string }[]
  >([]);
  const [chips, setChips] = useState<{ value: string; label: string }[]>([]);

  const handleDropdown1Change = (
    selectedValues: { value: string; label: string }[]
  ) => {
    setDropdown1Values(selectedValues);
    updateChips(selectedValues, dropdown2Values, dropdown3Values);
  };

  const handleDropdown2Change = (
    selectedValues: { value: string; label: string }[]
  ) => {
    setDropdown2Values(selectedValues);
    updateChips(dropdown1Values, selectedValues, dropdown3Values);
  };

  const handleDropdown3Change = (
    selectedValues: { value: string; label: string }[]
  ) => {
    setDropdown3Values(selectedValues);
    updateChips(dropdown1Values, dropdown2Values, selectedValues);
  };

  const updateChips = (
    dropdown1: { value: string; label: string }[],
    dropdown2: { value: string; label: string }[],
    dropdown3: { value: string; label: string }[]
  ) => {
    const updatedChips = [...dropdown1, ...dropdown2, ...dropdown3];
    setChips(updatedChips);
  };

  const handleChipRemove = (value: string) => {
    const updatedChips = chips.filter((chip) => chip.value !== value);
    setChips(updatedChips);

    // Remove value from dropdowns
    setDropdown1Values(dropdown1Values.filter((v) => v.value !== value));
    setDropdown2Values(dropdown2Values.filter((v) => v.value !== value));
    setDropdown3Values(dropdown3Values.filter((v) => v.value !== value));
  };

  const CheckboxOption = ({ innerProps, label, isSelected }: any) => (
    <div {...innerProps} style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" checked={isSelected} onChange={() => null} />
      <label style={{ marginLeft: "8px" }}>{label}</label>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <h3>Dropdown 1</h3>
          <Select
            options={firstOptions}
            isMulti
            value={dropdown1Values}
            onChange={(event: any) => handleDropdown1Change(event)}
            components={{
              Option: CheckboxOption,
            }}
          />
        </div>

        <div>
          <h3>Dropdown 2</h3>
          <Select
            options={secondOptions}
            isMulti
            value={dropdown2Values}
            onChange={(event: any) => handleDropdown2Change(event)}
            components={{
              Option: CheckboxOption,
            }}
          />
        </div>

        <div>
          <h3>Dropdown 3</h3>
          <Select
            options={thirdOptions}
            isMulti
            value={dropdown3Values}
            components={{
              Option: CheckboxOption,
            }}
            onChange={(event: any) => handleDropdown3Change(event)}
          />
        </div>

        <div>
          <h3>Selected Chips</h3>
          {chips.map((chip) => (
            <div
              data-te-chip-init
              data-te-ripple-init
              className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] border border-[#3b71ca] bg-[#eceff1] bg-[transparent] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:border-[#3b71ca] hover:!shadow-none dark:text-neutral-200"
              data-te-ripple-color="dark">
              {chip.label}
              <span
                data-te-chip-close
                onClick={() => handleChipRemove(chip.value)}
                className="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-3 w-3">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </div>))}
        </div>
      </div>
    </main>
  );
}
