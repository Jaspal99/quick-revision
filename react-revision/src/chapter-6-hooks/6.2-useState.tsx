import { useState } from "react";

const [value, setValue] = useState("");
setValue((val) => val + 1);
console.log(value);
