import { Route, Routes, BrowserRouter } from "react-router-dom";
import Board from "./components/board";
import Article from "./components/article";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Board />} />
        <Route path="/posts/:id" element={<Article />} />
        <Route path="/comments" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
