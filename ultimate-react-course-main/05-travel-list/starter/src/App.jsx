import { useState } from "react";
import { ParkingList } from "./components/ParkingList";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { Stats } from "./components/Stats";

// const item = [
//   { id: 1, quantity: 2, description: "passports", packed: false },
//   { id: 2, quantity: 12, description: "Socks", packed: false },
// ];

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => setItems([...items, item]);

  const handleRemoveItems = (id) =>
    setItems(items.filter((item) => item.id !== id));

  const handleToggleItems = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };

  const handleClearItems = () => setItems([]);

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onRemoveItems={handleRemoveItems}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
