import UserCard from "./4.3-components";
import Status from "./4.7-conditional-rendering";
import List from "./4.8-list-and-keys";
export default function RenderingList({
  parentLoading,
}: {
  parentLoading: boolean;
}) {
  const loading = parentLoading ?? true;
  return (
    <div>
      <UserCard name="John Doe" role="Software Engineer" />

      <Status isLoading={loading} />
      <List
        list={
          loading
            ? []
            : [
                { id: "john-doe", name: "John Doe" },
                { id: "jane-doe", name: "Jane Doe" },
              ]
        }
      />
    </div>
  );
}
