import React, { useState } from "react";
import "./App.css";
import Emoji from "./components/emoji-list.json";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck);

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
