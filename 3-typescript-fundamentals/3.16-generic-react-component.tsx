type SelectProps<T> = {
  items: T[];
  getLabel: (item: T) => string;
  getValue: (item: T) => string;
  onChange: (item: T) => string;
};

export default function Select({
  items,
  getLabel,
  getValue,
  onChange,
}: SelectProps<T>) {
  return (
    <select
      onChange={(event: React.HTMLInputElement) => {
        var selectedItem = items.find(
          (item) => getValue(item) === event.target.value,
        );
        console.log("selectedItem", selectedItem);

        if (selectedItem) {
          onChange(selectedItem);
        } else {
        }
      }}
    >
      {items.map((item) => (
        <option key={getValue(item)} value={getValue(item)}>
          {getLabel(item)}
        </option>
      ))}
    </select>
  );
}
