import { useState } from "react";

const ListManager = ({ initialItems = [], placeholder = "Ajouter un élément..." }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") return;
    setItems([...items, newItem.trim()]);
    setNewItem("");
  };
  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

return (
<div>
      <h2>Liste :</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item} <button onClick={() => handleDeleteItem(index)}>Supprimer</button></li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default ListManager;
