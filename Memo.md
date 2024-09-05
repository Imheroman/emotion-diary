# React를 공부하며 남겨놓는 메모

## Routes

```js
import {Routes, Route} from "react-router-dom";
```

을 이용하여 경로를 설정할 수 있음

```js
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
</Routes>
```

`/`: / 경로로 이동시 Home Component(?)을 실행함  
`*`: 해당하는 경로가 없을 시에 해당 Component을 실행함

## Nav

```js
import {useNavigate} from "react-router-dom";
```

을 이용하여 동적으로 경로를 설정할 수 있음(e.g. 버튼을 이용한 경로 이동)

```js
import {useNavigate} from "react-router-dom";

const nav = useNavigate();

const onClickButton = () => {
  nav("/new");
};

return (
    <>
      <Button onClick={onClickButton} />
		</>
);
```

해당 경로로 설정한 페이지로 이동시킴




