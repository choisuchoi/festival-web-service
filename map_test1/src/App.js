import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Main from "./pages/main"

function App() {
  return (
    <div className='App'>
      {/* 라우팅을 진행할 땐 가장 바깥에 BrowserRouter를 놔둬라 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
