"use client";
import React, { useState } from 'react';

interface Checkbox {
  id: string;
  label: string;
}

interface Chip {
  id: string;
  label: string;
}

const App: React.FC = () => {
  const allCheckboxes: { [key: string]: Checkbox[] } = {
    div1: [
      { id: 'red', label: 'Red' },
      { id: 'orange', label: 'Orange' },
      { id: 'blue', label: 'Blue' },
      { id: 'green', label: 'Green' },
    ],
    div2: [
      { id: 'pink', label: 'Pink' },
      { id: 'white', label: 'White' },
      { id: 'black', label: 'Black' },
      { id: 'purple', label: 'Purple' },
    ],
    div3: [
      { id: 'magenta', label: 'Magenta' },
      { id: 'grey', label: 'Grey' },
      { id: 'yellow', label: 'Yellow' },
    ],
  };

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<{ [key: string]: string[] }>({
    div1: [],
    div2: [],
    div3: [],
  });

  const handleCheckboxChange = (div: string, checkboxId: string) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [div]: prev[div].includes(checkboxId)
        ? prev[div].filter((id) => id !== checkboxId)
        : [...prev[div], checkboxId],
    }));
  };

  const handleChipRemove = (div: string, chipId: string) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [div]: prev[div].filter((id) => id !== chipId),
    }));
  };
console.log(selectedCheckboxes)
  return (
    <div>
      {Object.keys(allCheckboxes).map((div) => (
        <div key={div}>
          <h3>{div}</h3>
          {allCheckboxes[div].map((checkbox) => (
            <div key={checkbox.id}>
              <input
                type="checkbox"
                id={checkbox.id}
                checked={selectedCheckboxes[div].includes(checkbox.id)}
                onChange={() => handleCheckboxChange(div, checkbox.id)}
              />
              <label htmlFor={checkbox.id}>{checkbox.label}</label>
            </div>
          ))}
        </div>
      ))}

      <div>
        {Object.keys(selectedCheckboxes).map((div) => (
          <div key={div}>
            {selectedCheckboxes[div].map((checkboxId) => (
              <div key={checkboxId} className="chip">
                {allCheckboxes[div].find((checkbox) => checkbox.id === checkboxId)?.label}
                <button onClick={() => handleChipRemove(div, checkboxId)}>X</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
