import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning",
  "😂": "Face with tears of joy",
  "🤫": "Shushing face",
  "😐": "Neutral face",
  "🤥": "Lying face",
  "🫡": "Saluting face",
  "😌": "Relieved face",
  "🥳": "Partying face",
  "😫": "Tired face",
  "🥱": "Yawning face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "We do not have this in the database. Try another emoji please.";
    }
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <img
          src={require("../images/react-logo-64.png")}
          className="header--img"
        />
        <h1 className="heading"> Emoji Interpreter </h1>
      </nav>

      <main>
        <input
          onChange={inputHandler}
          className="input--bar"
          placeholder="Enter an emoji here"
        />
        <div> {meaning} </div>

        <h2> Emojis we know! </h2>

        {emojisWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => clickHandler(emoji)}
              className="emojis"
            >
              {emoji}
            </span>
          );
        })}
      </main>
    </div>
  );
}
