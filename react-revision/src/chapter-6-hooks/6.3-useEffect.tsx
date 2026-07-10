import { useEffect } from "react";
let count = 0;
useEffect(() => {
  document.title = `Count ${count}`;
}, [count]);

useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);
  return () => clearInterval(id);
}, []);
