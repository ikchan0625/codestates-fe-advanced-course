import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Article() {
  const [detail, getDetails] = useState([]);
  const [reply, setReply] = useState([]);
  const { id } = useParams();
  const getArticles = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return response.data;
    } catch (err) {}
  };
  const getRep = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      return response.data;
    } catch (err) {}
  };
  const getArticleData = getArticles();
  const getRepData = getRep();
  useEffect(() => {
    getArticleData.then((data) => {
      getDetails(data);
    });
    getRepData.then((data) => {
      setReply(data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <Link to="/">
          <img alt="codestateslogo" src="/img/codestateslogo.png"></img>
        </Link>
      </Header>
      <Articles>
        <TitleContainer>
          <Title>제목 : {detail.title}</Title>
          <Writer>작성자 : {detail.userId}</Writer>
        </TitleContainer>
        <ArticleBody>{detail.body}</ArticleBody>
      </Articles>

      <CommentContainer>
        <CommentsHeader>
          <CommentsNum>달린 댓글 수: {reply.length} 개 </CommentsNum>
        </CommentsHeader>

        {reply.map((comment, id) => {
          return (
            <Comments key={comment.id}>
              <CommentWriter> {comment.name} : </CommentWriter>
              <ConmmentBody> {comment.body}</ConmmentBody>
            </Comments>
          );
        })}
      </CommentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px auto;
  width: 60vw;

  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Header = styled.h3`
  width: 60vw;
  text-align: center;
  border-bottom: solid grey;
`;
const Articles = styled.div`
  height: 400px;
  border-bottom: solid grey;
`;
const ArticleBody = styled.div`
  margin: 10px;
  font-size: 2rem;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 60vw;
  border-bottom: solid grey 1px;
`;
const Title = styled.div`
  font-size: 1.4rem;
`;
const Writer = styled.div`
  font-size: 1.2rem;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid grey;
  width: 60vw;
`;
const Comments = styled.div`
  margin: 10px;
`;
const CommentsNum = styled.div`
  margin: 10px;
`;
const CommentsHeader = styled.div`
  text-align: right;
  font-size: 1.2rem;
  width: 60vw;
  color: grey;
`;
const CommentWriter = styled.div`
  margin: 10px;
  font-size: 1.5rem;
  color: grey;
  height: 2vw;
`;
const ConmmentBody = styled.div`
  margin: 10px;
  font-size: 2rem;
  border-bottom: 2px solid grey;
`;

export default Article;
