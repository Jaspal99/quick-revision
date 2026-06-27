export default function Status({
  isLoading,
  error,
}: {
  isLoading: boolean;
  error?: string;
}) {
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR!!!!</h1>;
  return <h1>completed win</h1>;
}
