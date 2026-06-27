import { useRef } from "react";

export default function UploadForm() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = () => {
    const file = fileRef.current?.files?.[0];
    if (file) {
      console.log(file);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" ref={fileRef} />
      <button type="submit">Upload</button>
    </form>
  );
}
