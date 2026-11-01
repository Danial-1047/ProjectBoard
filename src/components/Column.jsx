import Card from "./Card";
import AddCardForm from "./AddCardForm";

function Column({ id, title, cards, onAdd, onDelete }) {
  return (
    <div className="column">
      <h2>
        {title} <span className="count">{cards.length}</span>
      </h2>
      {cards.map((card) => (
        <Card key={card.id} card={card} onDelete={onDelete} />
      ))}
      <AddCardForm status={id} onAdd={onAdd} />
    </div>
  );
}

export default Column;
