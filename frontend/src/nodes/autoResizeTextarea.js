import { useEffect, useRef } from 'react';

export const AutoResizeTextarea = ({ value, onChange, minHeight = 60, className = '' }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      className={`nodrag px-2 py-1 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-indigo-500 w-full resize-none overflow-hidden ${className}`}
      style={{ minHeight: `${minHeight}px` }}
    />
  );
};
