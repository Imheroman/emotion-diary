import "./App.css";
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import {getEmotionImage} from "./util/get-emotion-image.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
      <>
        <Header
            title={"Header"}
            leftChild={<Button text={"Left"}/>}
            rightChild={<Button text={"Right"}/>}
        />
        <Button
            text={123}
            type={"DEFAULT"}
            onClick={() => {
              console.log("123 버튼 클릭");
            }}/>
        <Button
            text={123}
            type={"POSITIVE"}
            onClick={() => {
              console.log("123 버튼 클릭");
            }}/>
        <Button
            text={123}
            type={"NEGATIVE"}
            onClick={() => {
              console.log("123 버튼 클릭");
            }}/>
        <div>
          <img src={getEmotionImage(1)}/>
          <img src={getEmotionImage(2)}/>
          <img src={getEmotionImage(3)}/>
          <img src={getEmotionImage(4)}/>
          <img src={getEmotionImage(5)}/>
        </div>

        <button onClick={onClickButton}>new로 이동</button>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/new" element={<New/>}></Route>
          <Route path="/diary/:id" element={<Diary/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>{" "}
        </Routes>
      </>
  );
}

export default App;
