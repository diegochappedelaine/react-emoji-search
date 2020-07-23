import React from "react";

const Search = ({ emojiLookingFor, setEmojiLookingFor }) => {
    const handleEmoji = (event) => {
        const value = event.target.value;
        setEmojiLookingFor(value);
    };
    return (
        <header>
            <h1>😃 Emoji Search 🥳</h1>
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
