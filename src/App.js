import "./App.css";
import Navbar from "./my_component/Navbar";
import TextForms from "./my_component/TextForms";
import React, { useState } from "react";
import Alert from "./my_component/Alert";

export function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#313638";
      document.body.style.color = "white";
      showAlert("Dark Mode has enabled", "Success! ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has enabled", "Success! ");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForms heading="Enter Your Text Here" mode={mode} />
      </div>
    </>
  );
}

export default App;
