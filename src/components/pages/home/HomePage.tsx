import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      
      <div>Article :</div>

      <ArticleStyled>
        <CardStyled>
          <h1>Title</h1>
          <p>Content</p>
          <div className="info">
            <span>Author</span>
            <span>Dernière maj</span>
          </div>
        </CardStyled>
        <CardStyled>
          <h1>Title</h1>
          <p>Content</p>
          <div className="info">
            <span>Author</span>
            <span>Dernière maj</span>
          </div>
        </CardStyled>
        <CardStyled>
          <h1>Title</h1>
          <p>Content</p>
          <div className="info">
            <span>Author</span>
            <span>Dernière maj</span>
          </div>
        </CardStyled>
        <CardStyled>
          <h1>Title</h1>
          <p>Content</p>
          <div className="info">
            <span>Author</span>
            <span>Dernière maj</span>
          </div>
        </CardStyled>
        <CardStyled>
          <h1>Title</h1>
          <p>Content</p>
          <div className="info">
            <span>Author</span>
            <span>Dernière maj</span>
          </div>
        </CardStyled>
        <CardStyled>
          <h1>Title</h1>
          <p>Content</p>
          <div className="info">
            <span>Author</span>
            <span>Dernière maj</span>
          </div>
        </CardStyled>
      </ArticleStyled>
    </div>
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
  }
  p {
    padding: 15px;
    height: 130px;
    margin-top: 0px;
    background-color: blue;
  }
  .info {
    background-color: red;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
`;

const ArticleStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;

`
