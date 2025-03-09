import styled from "styled-components";

type CardType = {
  title: string;
  content: string;
  author: string;
  date: string;
};

export default function Card({ title, content, author, date }: CardType) {
  return (
    <CardStyled>
      <div className="content">
        <img src="./img/article.jpg" alt="article" />
        <h1>{title}</h1>
        <p>{content}</p>
        <button>Lire la suite</button>
      </div>
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
  width: 300px;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    max-width: 100%;
    max-height: 100px;
    margin-bottom: 0;
  }
  .content {
    text-align: center;
  }
  p {
    padding: 15px;
    height: 130px;
    margin-top: 0px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  button {
    padding: 12px;
    color: white;
    background: black;
    width: 250px;
    border-radius: 24px;
    font-size: 16px;
    margin-bottom: 10px;

    &:hover{
      transition: 0.2s;
      background-color: #353535;
      cursor: pointer;
    }
  }
`;
