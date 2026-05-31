// llmNode.js
import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data, selected }) => {
  return (
    <BaseNode
      id={id}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-brain-line"></i><span>LLM</span></div>}
      categoryStyle="border-l-4 border-l-purple-500"
      inputHandles={[
        { id: 'system', top: `${100 / 3}%` },
        { id: 'prompt', top: `${200 / 3}%` }
      ]}
      outputHandles={[
        { id: 'response' }
      ]}
    >
      <div className="py-2">
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
