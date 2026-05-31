import { useState, useEffect } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './baseNode';
import { AutoResizeTextarea } from './autoResizeTextarea';

const variableRegex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;

export const TextNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeInternals = useUpdateNodeInternals();

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // //react flow updateNodeInternals
  // const [handlesState, setHandlesState] = useState([]);
  // useEffect(() => {
  //   const extracted = [...currText.matchAll(variableRegex)].map(m => m[1]);
  //   setHandlesState([...new Set(extracted)]);
  // }, [currText]);

  const matches = [...currText.matchAll(variableRegex)];
  const variables = [...new Set(matches.map(m => m[1]))];

  const inputHandles = variables.map((v, index) => ({
    id: v,
    label: v,
    top: `${((index + 1) * 100) / (variables.length + 1)}%`
  }));

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables.length, id, updateNodeInternals]);

  const dynamicWidth = Math.max(240, Math.min(400, currText.length * 8));

  return (
    <BaseNode
      id={id}
      width={dynamicWidth}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-text"></i><span>Text</span></div>}
      categoryStyle="border-l-4 border-l-slate-400"
      inputHandles={inputHandles}
      outputHandles={[{ id: 'output' }]}
    >
      <label className="flex flex-col gap-1 w-full h-full">
        <span>Text:</span>
        <AutoResizeTextarea value={currText} onChange={handleTextChange} />
      </label>
    </BaseNode>
  );
}
