// apiNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

export const APINode = ({ id, data, selected }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-global-line"></i><span>API Node</span></div>}
      categoryStyle="border-l-4 border-l-cyan-500"
      inputHandles={[{ id: 'request' }]}
      outputHandles={[{ id: 'response' }]}
    >
      <label className="flex flex-col gap-1">
        <span>Endpoint URL:</span>
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          className="px-2 py-1 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </label>
    </BaseNode>
  );
}
