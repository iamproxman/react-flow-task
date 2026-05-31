// inputNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data, selected }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-login-circle-line"></i><span>Input</span></div>}
      categoryStyle="border-l-4 border-l-blue-500"
      outputHandles={[{ id: 'value' }]}
    >
      <label className="flex flex-col gap-1">
        <span>Name:</span>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="px-2 py-1 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span>Type:</span>
        <select
          value={inputType}
          onChange={handleTypeChange}
          className="px-2 py-1 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
}
