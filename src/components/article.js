import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Article() {
  const [detail, getDetails] = useState([]);
  const getArticles = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/`
      );
      return response.data;
    } catch (err) {}
  };
  return <div>hello world</div>;
}
export default Article;
