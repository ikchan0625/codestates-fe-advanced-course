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
      <Header>
        <img alt="codestateslogo" src="/img/codestateslogo.png"></img>
      </Header>
      <ArticleContainer>
        {" "}
        <Articles>게시글</Articles>
        <Writer> Writer</Writer>
      </ArticleContainer>

      {articles.slice(offSet, offSet + limit).map((item) => {
        return (
          <ArticleContainer key={item.id} item={item}>
            <Articles
              onClick={() => {
                setViewArticle(item.id);
                viewDetailHandler(item.id);
              }}
            >
              {item.title}{" "}
            </Articles>
            {/* </Link> */}
            <Writer>작성자: {item.userId}</Writer>
          </ArticleContainer>
        );
      })}

      <Pagenation
        pageLength={articles.length}
        limit={limit}
        page={page}
        setPage={setPage}
      ></Pagenation>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75vw;
`;
const Header = styled.h3`
  width: 75vw;
  text-align: center;
  border-bottom: solid grey;
`;
const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 75vw;
  border-bottom: solid grey 1px;
`;
const Articles = styled.div`
  margin: 20px;
  font-size: 25px;
`;
const Writer = styled.span`
  margin: 20px;
  font-size: 20px;
  color: grey;
`;

export default Board;
