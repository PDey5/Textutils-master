import { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");
  const handleOnClick_1 = () => {
    // console.log("Onclick is invoked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnClick_2 = () => {
    // console.log("Onclick is invoked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnClick_3 = () => {
    // console.log("Onclick is invoked");
    let newText = "";
    setText(newText);
  };
  const handleOnClick_4 = () => {
    // console.log("Onclick is invoked");
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };
  const handleOnClick_5 = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
  };
  const handleOnChange = (e) => {
    // console.log("OnChange is invoked");
    setText(e.target.value);
  };
  return (
    <>
      <div className="container my-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
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
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnClick_2}
          >
            Convert to Lowercase
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
            onClick={handleOnClick_3}
          >
            Clear 
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").filter((element)=>{return element.length!== 0}).length} words & {text.length} characters
        </p>
      </div>
    </>
  );
}
