import { useState } from "react";
import { Item } from "./Item";

export const ParkingList = ({
  items,
  onRemoveItems,
  onToggleItems,
  onClearItems,
}) => {
  const [sortby, setSortby] = useState("input");
  let newSortItem;

  if (sortby === "input") newSortItem = items;

  if (sortby === "decription")
    newSortItem = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));

  if (sortby === "packed")
    newSortItem = items
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));

  return (
    <div className="list">
      <ul>
        {newSortItem.map((list) => (
          <Item
            key={list.id}
            items={list}
            onRemoveItems={onRemoveItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value={"input"}>Sort by input order</option>
          <option value={"decription"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>

        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
};
