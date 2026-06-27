import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return <input value={value} onChange={handleChange} />;
}
