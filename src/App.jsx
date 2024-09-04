import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

// TODO:12.4) 페이지 라우팅 3. 페이지 이동
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<New />}></Route>
      <Route path="/diary" element={<Diary />}></Route>
      <Route path="*" element={<NotFound />}></Route>{" "}
    </Routes>
  );
}

export default App;
