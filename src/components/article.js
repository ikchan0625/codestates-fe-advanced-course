import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        <img alt="codestateslogo" src="/img/codestateslogo.png"></img>
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
          <span>달린 댓글 수: {reply.length} 개 </span>
        </CommentsHeader>

        {reply.map((comment, id) => {
          return (
            <Comments key={comment.id}>
              <CommentWriter>{comment.name} : </CommentWriter>
              <ConmmentBody>{comment.body}</ConmmentBody>
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
  width: 75vw;

  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Header = styled.h3`
  width: 75vw;
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
  width: 75vw;
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
  width: 75vw;
`;
const Comments = styled.div``;
const CommentsHeader = styled.div`
  text-align: right;
  font-size: 1.2rem;
  width: 75vw;
  color: grey;
`;
const CommentWriter = styled.div`
  margin: 10px;
  font-size: 1.3rem;
  color: grey;
  height: 3vw;
`;
const ConmmentBody = styled.div`
  margin: 10px;
  height: 10vw;
  font-size: 20px;
  border-bottom: 2px solid grey;
`;

export default Article;
