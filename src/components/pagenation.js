import styled from "styled-components";

function Pagenation({ pageLength, limit, page, setPage }) {
  const length = Math.ceil(pageLength / limit);

  return (
    <>
      <nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>

        {Array(length)
          .fill()
          .map((_, i) => (
            <Button key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </Button>
          ))}

        <Button onClick={() => setPage(page + 1)} disabled={page === length}>
          &gt;
        </Button>
      </nav>
    </>
  );
}
export default Pagenation;

const Button = styled.button`
  color: white;
  background: blue;
  width: 60px;
  height: 50px;
  &:hover {
    background: red;
    cursor: pointer;
  }
`;
