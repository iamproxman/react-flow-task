// databaseNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';
import { AutoResizeTextarea } from './autoResizeTextarea';

export const DatabaseNode = ({ id, data, selected }) => {
  const [query, setQuery] = useState(data?.query || 'SELECT * FROM users');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-database-2-line"></i><span>Database</span></div>}
      categoryStyle="border-l-4 border-l-amber-500"
      inputHandles={[{ id: 'trigger' }]}
      outputHandles={[{ id: 'results' }]}
    >
      <label className="flex flex-col gap-1 h-full">
        <span>SQL Query:</span>
        <AutoResizeTextarea value={query} onChange={handleQueryChange} minHeight={40} />
      </label>
    </BaseNode>
  );
}
