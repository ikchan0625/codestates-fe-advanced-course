import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagenation from "./pagenation";
function Board() {
  const [articles, setArticles] = useState([]);
  const [viewArticle, setViewArticle] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offSet = (page - 1) * limit;
  const navigation = useNavigate();
  const getArticles = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (err) {}
  };
  const getData = getArticles();
  useEffect(() => {
    getData.then((data) => {
      setArticles(data);
    });
  }, []);
  const viewDetailHandler = (e) => {
    const id = e;
    navigation(`/posts/${id}`);
  };
  return (
    <Container>
      <h1>참치의 게시판</h1>

      {articles.slice(offSet, offSet + limit).map((item) => {
        return (
          <ArticleContainer key={item.id} item={item}>
            {/* <Link to="/posts/id"> */}
            <div
              onClick={() => {
                setViewArticle(item.id);
                viewDetailHandler(item.id);
              }}
            >
              {item.title}{" "}
            </div>
            {/* </Link> */}
            <span>작성자: {item.userId}</span>
          </ArticleContainer>
        );
      })}
      <div>
        <Pagenation
          pageLength={articles.length}
          limit={limit}
          page={page}
          setPage={setPage}
        ></Pagenation>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75vw;
`;
const ArticleContainer = styled.h4`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 75vw;
`;
export default Board;
