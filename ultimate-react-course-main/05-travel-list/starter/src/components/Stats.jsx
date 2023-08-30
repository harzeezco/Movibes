export const Stats = ({ items }) => {
  const itemCount = items.length;
  const packedItems = items.filter((item) => item.isPacked).length;
  const packPercentage = Math.round((packedItems / itemCount) * 100);

  if (!itemCount) {
    return (
      <p className="stats">Start adding some items to your packing list 🐱‍🏍</p>
    );
  }

  return (
    <footer className="stats">
      <em>
        😎 You have {itemCount} items on your list, and you already packed{" "}
        {packedItems} ({packPercentage}%)
      </em>
    </footer>
  );
};
