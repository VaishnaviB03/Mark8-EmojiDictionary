import React, { useState } from "react";
import "./styles.css";

var emojipedia = {
  "🥺": "PLeading Face",
  "😘": "Kissing Emoji",
  "😞": "Sad Face",
  "😂": "Laughing Face ",
  "🧡": "Heart",
  "😴": "Sleepy",
  "👍": "Thumb's Up",
  "🤗": "Hugging Face",
  "😉": "Winking face",
  "✌": "Victory Hand"
};

var input = Object.keys(emojipedia);

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");

  function inputEmoji(event) {
    var userInput = event.target.value;
    var meaning = emojipedia[userInput];

    if (meaning === undefined) {
      meaning = "Emoji Not Found";
    }
    setEmojiMeaning(meaning);
  }

  function clickEventHandler(emoji) {
    var meaning = emojipedia[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know The Emoji</h1>
      <input onChange={inputEmoji}></input>
      <h2>{emojiMeaning}</h2>
      <h3>Emoji You Know</h3>
      {input.map(function (emoji) {
        return (
          <span
            onClick={() => clickEventHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
    </div>
  );
}
