// baseNode.js
import { Handle, Position } from 'reactflow';
import { NodeResizer } from '@reactflow/node-resizer';
import '@reactflow/node-resizer/dist/style.css';

export const BaseNode = ({
  id,
  selected,
  title,
  children,
  inputHandles = [],
  outputHandles = [],
  width = 240,
  height = 120
}) => {
  return (
    <>
      <NodeResizer
        color="#6366f1"
        isVisible={selected}
        minWidth={width}
        minHeight={height}
      />
      <div
        className="base-node relative bg-slate-800 border border-slate-700 rounded-lg flex flex-col text-white shadow-lg"
        style={{ width: '100%', height: '100%', minWidth: width, minHeight: height }}
      >
        {inputHandles.map((handle, index) => {
          const topPos = handle.top || `${((index + 1) * 100) / (inputHandles.length + 1)}%`;
          return (
            <div key={`input-${handle.id}`}>
              <Handle
                type="target"
                position={Position.Left}
                id={`${id}-${handle.id}`}
                style={{ top: topPos }}
                className="w-3 h-3 bg-indigo-500 border-2 border-slate-800"
              />
              {handle.label && (
                <span 
                  className="absolute text-[10px] text-slate-400 font-medium tracking-wider whitespace-nowrap" 
                  style={{ 
                    right: '100%', 
                    marginRight: '12px',
                    top: topPos,
                    transform: 'translateY(-50%)' 
                  }}
                >
                  {handle.label}
                </span>
              )}
            </div>
          );
        })}

        <div className="bg-slate-900 rounded-t-lg px-3 py-2 text-sm font-semibold border-b border-slate-700">
          {title}
        </div>

        <div className="p-3 flex flex-col flex-grow gap-3 text-sm h-full w-full">
          {children}
        </div>

        {outputHandles.map((handle, index) => (
          <Handle
            key={`output-${handle.id}`}
            type="source"
            position={Position.Right}
            id={`${id}-${handle.id}`}
            style={{ top: handle.top || `${((index + 1) * 100) / (outputHandles.length + 1)}%` }}
            className="w-3 h-3 bg-indigo-500 border-2 border-slate-800"
          />
        ))}
      </div>
    </>
  );
};
