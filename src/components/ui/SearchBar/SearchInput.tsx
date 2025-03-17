export default function SearchInput() {
  return (
    <div className="search">
      <input
        className="search__input"
        id="search"
        type="text"
        placeholder="Введите название события..."
      />
      <label htmlFor="search" className="search__input-wrapper">
        <img
          src="../src/css/icons/search-icon.svg"
          alt="search-icon"
          className="search__input-icon"
          loading="lazy"
        />
      </label>
    </div>
  );
}
