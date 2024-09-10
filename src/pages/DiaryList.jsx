import "./DiaryList.css";

import Button from "../components/Button.jsx";
import DiaryItem from "../components/DiaryItem.jsx";

import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({monthlyData}) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (event) => {
    setSortType(event.target.value);
  }

  const getSortedData = () => {
    return monthlyData.toSorted((a, b) =>
        sortType === "oldest" ? Number(a.createdDate) - Number(b.createdDate) : Number(b.createdDate) - Number(a.createdDate)
    );
  };

  const sortedData = getSortedData();

  return (
      <>
        <div className="DiaryList">
          <div className="menu_bar">
            <select onChange={onChangeSortType}>
              <option value={"latest"}>최신 순</option>
              <option value={"oldest"}>오래된 순</option>
            </select>
            <Button onClick={() => { nav("/new")}}
                text={"새 일기 쓰기"} type={"POSITIVE"} />
          </div>
          <div className="list_wrapper">
            {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
          </div>
        </div>
      </>
  );
}

export default DiaryList;