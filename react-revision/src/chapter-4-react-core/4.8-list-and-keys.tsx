export default function List({ list }: { list: { id: string; name: string }[] }) {
  return (
    <div>
      {list.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
