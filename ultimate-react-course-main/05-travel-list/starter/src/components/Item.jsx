export const Item = ({ items, onRemoveItems, onToggleItems }) => {
  const { quantity, desc, isPacked, id } = items;

  return (
    <li>
      <input
        type="checkbox"
        value={isPacked}
        onChange={() => onToggleItems(id)}
      />
      <span style={isPacked ? { textDecoration: "line-through" } : {}}>
        {quantity} {desc}
      </span>
      <button onClick={() => onRemoveItems(id)}>x</button>
    </li>
  );
};
