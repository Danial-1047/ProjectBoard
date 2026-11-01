import { useState } from "react";

function AddCardForm({ status, onAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function reset() {
    setTitle("");
    setDescription("");
    setIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), description: description.trim(), status });
    reset();
  }

  if (!isOpen) {
    return (
      <button className="add-btn" onClick={() => setIsOpen(true)}>
        + Add a card
      </button>
    );
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        autoFocus
        placeholder="Card title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="form-actions">
        <button type="submit" className="primary">Add</button>
        <button type="button" onClick={reset}>Cancel</button>
      </div>
    </form>
  );
}

export default AddCardForm;
