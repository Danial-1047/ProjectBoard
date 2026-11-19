import Card from "./Card";
import AddCardForm from "./AddCardForm";

function Column({ id, title, accent, cards, onAdd, onDelete }) {
  return (
    // --accent is a CSS variable, so the column and its cards can share the colour
    <section className="column" data-status={id} style={{ "--accent": accent }}>
      <h2 className="column-header">
        <span className="dot" />
        <span className="column-title">{title}</span>
        <span className="count">{cards.length}</span>
      </h2>

      <div className="card-list">
        {cards.length === 0 && <p className="empty">No tasks here</p>}
        {cards.map((card) => (
          <Card key={card.id} card={card} onDelete={onDelete} />
        ))}
      </div>

      <AddCardForm status={id} onAdd={onAdd} />
    </section>
  );
}

export default Column;
