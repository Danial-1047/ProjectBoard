import { useState } from "react";
import Column from "./components/Column";
import { initialCards, columns } from "./data";
import "./App.css";

function App() {
  const [cards, setCards] = useState(initialCards);

  function addCard(newCard) {
    setCards((prev) => [...prev, { ...newCard, id: crypto.randomUUID() }]);
  }

  function deleteCard(id) {
    setCards((prev) => prev.filter((card) => card.id !== id));
  }

  return (
    <div className="board">
      {columns.map((col) => (
        <Column
          key={col.id}
          id={col.id}
          title={col.title}
          cards={cards.filter((card) => card.status === col.id)}
          onAdd={addCard}
          onDelete={deleteCard}
        />
      ))}
    </div>
  );
}

export default App;
