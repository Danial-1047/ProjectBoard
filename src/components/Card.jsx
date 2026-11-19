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
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      {card.description && <p className="card-desc">{card.description}</p>}
    </div>
  );
}

export default Card;
