import { useEffect, useRef } from "react";

// Computed once when the app loads, e.g. "Thursday, November 19"
const today = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric",
});

function Header({ cards, query, onQueryChange }) {
  const searchRef = useRef(null);
  const total = cards.length;
  const inProgress = cards.filter((c) => c.status === "inprogress").length;
  const done = cards.filter((c) => c.status === "done").length;
  const progress = total ? Math.round((done / total) * 100) : 0;

  // Press "/" anywhere to jump to the search box
  useEffect(() => {
    function handleKey(e) {
      const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="header">
      <div className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <rect x="3" y="4" width="5" height="16" rx="1.5" fill="currentColor" />
              <rect x="10" y="4" width="5" height="10" rx="1.5" fill="currentColor" opacity=".75" />
              <rect x="17" y="4" width="4" height="6" rx="1.5" fill="currentColor" opacity=".5" />
            </svg>
          </div>
          <span className="brand-name">Thought Board</span>
        </div>

        <label className="search">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={searchRef}
            type="search"
            placeholder="Search tasks"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && onQueryChange("")}
          />
          <kbd>/</kbd>
        </label>
      </div>

      <div className="hero">
        <div>
          <p className="eyebrow">{today}</p>
          <h1>Thought Board</h1>
          <p className="subtitle">Plan, track and ship your tasks in one place.</p>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="stat-label">Total</span>
            <span className="stat-value">{total}</span>
          </div>
          <div className="stat">
            <span className="stat-label">In progress</span>
            <span className="stat-value">{inProgress}</span>
          </div>
          <div className="stat stat-progress">
            <div className="stat-row">
              <span className="stat-label">Completed</span>
              <span className="stat-value">{progress}%</span>
            </div>
            <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
