// filterNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

export const FilterNode = ({ id, data, selected }) => {
  const [condition, setCondition] = useState(data?.condition || 'x > 10');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-filter-3-line"></i><span>Filter</span></div>}
      categoryStyle="border-l-4 border-l-orange-500"
      inputHandles={[{ id: 'input' }]}
      outputHandles={[{ id: 'filtered' }]}
    >
      <label className="flex flex-col gap-1">
        <span>Condition:</span>
        <input
          type="text"
          value={condition}
          onChange={handleConditionChange}
          className="px-2 py-1 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </label>
    </BaseNode>
  );
}
