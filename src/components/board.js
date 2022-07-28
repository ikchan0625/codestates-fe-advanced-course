import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagenation from "./pagenation";
function Board() {
  const [articles, setArticles] = useState([]);
  const [viewArticle, setViewArticle] = useState([]);

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

  return (
    <Container>
      <h1>참치의 게시판</h1>

      {articles.slice(0).map((item) => {
        return (
          <ArticleContainer key={item.id} item={item}>
            <Link to="/posts/id">
              <span
                onClick={() => {
                  setViewArticle(item.id);
                  console.log(item.id);
                }}
              >
                {item.title}{" "}
              </span>
            </Link>
            <span>작성자: {item.userId}</span>
          </ArticleContainer>
        );
      })}
      <Pagenation></Pagenation>
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
