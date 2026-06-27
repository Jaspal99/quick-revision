import RenderingList from "./4.12-lifting-state-up";

export default function propsDrilling() {
  let loading = true;
  return <RenderingList parentLoading={loading} />;
}
