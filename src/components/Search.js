import React from "react";

const Search = ({ emojiLookingFor, setEmojiLookingFor }) => {
  const handleEmoji = (event) => {
    const value = event.target.value;
    setEmojiLookingFor(value);
  };
  return (
    <header className="container">
      <button onClick={() => setEmojiLookingFor("")}>
        <h1>
          <span role="img" aria-label="smile">
            😃
          </span>
          <span> Emoji Search </span>
          <span role="img" aria-label="smile">
            😃
          </span>
        </h1>
      </button>

      <input
        type="text"
        name="Emoji Search"
        value={emojiLookingFor}
        onChange={handleEmoji}
        placeholder="what emoji are you looking for ?"
      />
    </header>
  );
};

export default Search;
