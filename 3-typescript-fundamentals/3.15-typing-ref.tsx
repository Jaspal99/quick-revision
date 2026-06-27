import { useRef } from "react";
export default function Demo() {
  const inputRef = useRef<React.HTMLInputElement | null>();
  return (
    <div>
      <button
        variant="primary"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        button
      </button>
      <input ref={inputRef} />
    </div>
  );
}
