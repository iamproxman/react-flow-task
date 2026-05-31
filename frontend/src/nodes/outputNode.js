// outputNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data, selected }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-logout-circle-line"></i><span>Output</span></div>}
      categoryStyle="border-l-4 border-l-green-500"
      inputHandles={[{ id: 'value' }]}
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
          value={outputType}
          onChange={handleTypeChange}
          className="px-2 py-1 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}
