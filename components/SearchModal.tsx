"use client";

import { useUI } from "@/context/UIContext";

export default function SearchModal() {
  const { isSearchOpen, setSearchOpen } = useUI();

  const handleClose = () => {
    setSearchOpen(false);
  };

  return (
    <div className={`header-search-form-wrapper ${isSearchOpen ? "open" : ""}`}>
      <div
        className="tx-search-close tx-close"
        onClick={handleClose}
        style={{ cursor: "pointer" }}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="header-search-container">
        <form
          role="search"
          className="search-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            className="search-field"
            placeholder="Search …"
            name="s"
            autoFocus={isSearchOpen}
          />
          <button type="submit" className="search-submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
