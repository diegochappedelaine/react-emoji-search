import React, { useState } from "react";
import "./App.css";
import Emoji from "./components/emoji-list.json";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
    const [emojiLookingFor, setEmojiLookingFor] = useState("");
    return (
        <div className="body">
            <Search
                emojiLookingFor={emojiLookingFor}
                setEmojiLookingFor={setEmojiLookingFor}
            />
            <main>
                {Emoji.map((emoji, index) => {
                    let notCaseSensitive = new RegExp(emojiLookingFor, "i");
                    // console.log(notCaseSensitive === emoji.title);
                    if (notCaseSensitive.test(emoji.keywords)) {
                        return (
                            <Line title={emoji.title} symbol={emoji.symbol} />
                        );
                    } else if (!emojiLookingFor) {
                        return (
                            <Line title={emoji.title} symbol={emoji.symbol} />
                        );
                    }
                })}
            </main>
            <Footer />
        </div>
    );
}

export default App;
