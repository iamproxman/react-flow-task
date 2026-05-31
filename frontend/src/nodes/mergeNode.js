// mergeNode.js
import { BaseNode } from './baseNode';

export const MergeNode = ({ id, data, selected }) => {
  return (
    <BaseNode
      id={id}
      selected={selected}
      title={<div className="flex items-center gap-2"><i className="ri-git-merge-line"></i><span>Merge</span></div>}
      categoryStyle="border-l-4 border-l-pink-500"
      inputHandles={[
        { id: 'input1', top: '33%' },
        { id: 'input2', top: '66%' }
      ]}
      outputHandles={[
        { id: 'merged' }
      ]}
    >
      <div className="py-2">
        <span>Merges two inputs into an array.</span>
      </div>
    </BaseNode>
  );
}
