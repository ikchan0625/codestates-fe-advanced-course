import styled from "styled-components";

function Pagenation({ pageLength, limit, page, setPage }) {
  const length = Math.ceil(pageLength / limit);

  return (
    <>
      <Container>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>

        {Array(length)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              cur={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}

        <Button onClick={() => setPage(page + 1)} disabled={page === length}>
          &gt;
        </Button>
      </Container>
    </>
  );
}
export default Pagenation;
const Container = styled.div`
  display: flex;
  justify-content: center;
  aligin-items: center;
  gap: 10px;
  margin: 16px;
  padding: 30px;
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;
  &:hover {
    background: blue;
    cursor: pointer;
  }
  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[cur] {
    background: deeppink;
    font-weight: bold;
    color: red;
    cursor: revert;
    transform: revert;
  }
`;
