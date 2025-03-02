import styled from "styled-components";

type CardType = {
    title : string;
    content : string;
    author : string;
    date : string;
}

export default function Card({title, content, author, date} : CardType) {
  return (
    <CardStyled>
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="info">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: grey;
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  h1 {
    background-color: green;
    text-align: center;
  }
  p {
    padding: 15px;
    height: 130px;
    margin-top: 0px;
    border-top: 1px solid black;
  }
  .info {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid black;
  }
`;
