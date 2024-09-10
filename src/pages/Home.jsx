// import {useSearchParams} from "react-router-dom";

import {useState, useContext} from "react";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import React from "react";
import DiaryList from "./DiaryList.jsx";
import {DiaryStateContext} from "../App.jsx";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),
      1, 0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1,
      0, 0, 0, 0);

  return data.filter((item) =>
      beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
  // ?name=value -> 같은 걸 설정할 때 사용
  // const [params, setParams] = useSearchParams();
  // console.log(params.get("name"));

  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);
  const monthlyData = getMonthlyData(pivotDate, data);

  const setNextMonth = (nextMonthValue) => {
    setPivotDate(new Date(pivotDate.getFullYear(),
        pivotDate.getMonth() + nextMonthValue));
  };

  return (
      <>
        <div>
          <Header
              title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
              leftChild={<Button onClick={() => {
                setNextMonth(-1)
              }} text={"<"}/>}
              rightChild={<Button onClick={() => {
                setNextMonth(+1)
              }} text={">"}/>}
          />
          <DiaryList monthlyData={monthlyData} />
        </div>
      </>
  );
};

export default Home;
