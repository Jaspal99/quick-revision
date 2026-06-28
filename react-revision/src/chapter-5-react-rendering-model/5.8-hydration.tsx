import { useEffect, useState } from "react";

export default function SafeClientView() {
  const [value, setValue] = useState<string | null>("");

  useEffect(() => {
    setValue(window.localStorage.getItem("theme"));
  }, []);

  return <p>{value || "Loading..."}</p>;
}
