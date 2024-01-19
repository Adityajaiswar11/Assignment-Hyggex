import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Routes>
          |<Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
