import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  //ALERT STATE
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  //DARK & LIGHT MODE STATE

  const [mode, setmode] = useState("light")
  let toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#020624';
      showAlert("Dark Mode is Successfully  Enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Successfully  Enabled", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar title="TextUtils" about="About Us" mode={mode} toggle={toggleMode} />
        </div>
        <div className="my-5">
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route path="/" element = {<div className="container my- ">
            <TextForm heading="Enter the text below" mode={mode} showAlert={showAlert} />
          </div>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
