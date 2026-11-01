function Card({ card, onDelete }) {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">{card.title}</p>
        <button
          className="delete-btn"
          onClick={() => onDelete(card.id)}
          aria-label="Delete card"
        >
          ×
        </button>
      </div>
      {card.description && <p className="card-desc">{card.description}</p>}
    </div>
  );
}

export default Card;
