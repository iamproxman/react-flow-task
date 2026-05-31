// transformNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

export const TransformNode = ({ id, data, selected }) => {
  const [operation, setOperation] = useState(data?.operation || 'uppercase');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-loop-right-line"></i><span>Transform</span></div>}
      categoryStyle="border-l-4 border-l-indigo-500"
      inputHandles={[{ id: 'input' }]}
      outputHandles={[{ id: 'output' }]}
    >
      <label className="flex flex-col gap-1">
        <span>Operation:</span>
        <select
          value={operation}
          onChange={handleOperationChange}
          className="px-2 py-1 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
        </select>
      </label>
    </BaseNode>
  );
}
