import { useState } from "react";
import Header from "./components/Header";
import Column from "./components/Column";
import { initialCards, columns } from "./data";
import "./App.css";

function App() {
  const [cards, setCards] = useState(initialCards);
  const [query, setQuery] = useState("");

  function addCard(newCard) {
    setCards((prev) => [...prev, { ...newCard, id: crypto.randomUUID() }]);
  }

  function deleteCard(id) {
    setCards((prev) => prev.filter((card) => card.id !== id));
  }

  const q = query.trim().toLowerCase();
  const visibleCards = q
    ? cards.filter((card) =>
        `${card.title} ${card.description ?? ""}`.toLowerCase().includes(q)
      )
    : cards;

  return (
    <div className="app">
      <Header cards={cards} query={query} onQueryChange={setQuery} />
      <main className="board">
        {columns.map((col) => (
          <Column 
            key={col.id}
            id={col.id}
            title={col.title}
            accent={col.accent}
            cards={visibleCards.filter((card) => card.status === col.id)}
            onAdd={addCard}
            onDelete={deleteCard}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
