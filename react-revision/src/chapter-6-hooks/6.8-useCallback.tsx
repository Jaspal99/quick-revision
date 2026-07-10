import { useCallback, useState } from "react";

const [selectedId, setSelectedId] = useState<string>('');

const handleSelect = useCallback((id: string) => {
  setSelectedId(id);
}, []);
