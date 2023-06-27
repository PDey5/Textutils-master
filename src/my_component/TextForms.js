import { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  const handleOnClick_1 = () => {
    // console.log("Onclick is invoked");

    setText(
      document.getElementById("exampleFormControlTextarea1").value.toUpperCase()
    );
  };
  const handleOnClick_2 = () => {
    // console.log("Onclick is invoked");

    setText(
      document.getElementById("exampleFormControlTextarea1").value.toLowerCase()
    );
  };
  const handleOnClick_3 = () => {
    // console.log("Onclick is invoked");
    document.getElementById('show').innerHTML= 0;
    let newText = "";
    setText(newText);
  };
  const handleOnClick_4 = () => {
    // console.log("Onclick is invoked");

    setText(
      document
        .getElementById("exampleFormControlTextarea1")
        .value.replace(/\s+/g, " ")
        .trim()
    );
  };
  const handleOnClick_5 = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
  };
  const handleOnClick_6 = () => {
    let newText = navigator.clipboard
      .readText()
      .then(
        (clipText) =>
          (document.getElementById("exampleFormControlTextarea1").value =
            clipText)
      );

    setText(newText);
  };
  const handleOnChange = (e) => {
    // console.log("OnChange is invoked");
    setText(e.target.value);
  };

  function countWord() {
    // Get the input text value
    var words = document.getElementById("exampleFormControlTextarea1").value;

    // Initialize the word counter
    let count = 0;

    // Split the words on each
    // space character
    var split = words.split(/\s+/);

    // Loop through the words and
    // increase the counter when
    // each split word is not empty
    for (var i = 0; i < split.length; i++) {
      if (split[i] != "") {
        count += 1;
      }
    }

    // Display it as output
    document.getElementById("show").innerHTML =  count;
  }

  return (
    <>
      <div className="container my-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onInput={countWord}
            className="form-control perfecttense mb-1"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgba(189, 179, 179, 0.11)",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>

          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnClick_1}
          >
            Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnClick_2}
          >
            Lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnClick_4}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnClick_5}
          >
            Copy
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnClick_6}
          >
            Paste
          </button>

          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnClick_3}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h3>Your text summary</h3>
        <p>
          Word Count:
          <span id="show"> 0</span>
        </p>
      </div>
    </>
  );
}
