type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function UserView({ state }: { state: RequestState<{ name: string }> }) {
  if (state.status === "success") return <p>{state.data.name}</p>;
  if (state.status === "error") return <p>{state.error}</p>;
  return <p>{state.status}</p>;
}
