import { useState } from "react";

export const Form = ({ onAddItems }) => {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!desc) return;

    const newData = { id: Date.now(), desc, quantity, isPacked: false };
    onAddItems(newData);

    setQuantity("");
    setDesc("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>

      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
};
