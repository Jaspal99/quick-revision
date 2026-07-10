import { useLayoutEffect, useRef } from "react";

export default function Heightget() {
  const heightRef = useRef<null>(null);
  return <div ref={heightRef}>Heightget</div>;
}
