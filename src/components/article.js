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
    <div>
      {detail.title}
      <div>작성한 사람 : {detail.userId}</div>
      <div>
        {reply.map((comment, id) => {
          return (
            <div>
              <div>{comment.id}</div>
              <div>{comment.name} : </div>
              <span>{comment.body}</span>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Article;
