import { useEffect } from "react";

let userId = 123;

useEffect(() => {
  setInterval(() => {
    console.log(userId);
  }, 1000);
  return () => clearInterval(userId);
}, [userId]);
