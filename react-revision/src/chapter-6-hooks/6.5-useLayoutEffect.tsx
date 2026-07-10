import { useLayoutEffect, useRef } from "react";

export default function Heightget() {
  const heightRef = useRef<null>(null);
  useLayoutEffect(() => {
    const height = heightRef?.current?.getBoundingClientRect().height;
    console.log(height);
  }, []);
  return <div ref={heightRef}>Heightget</div>;
}
