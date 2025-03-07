import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../reusable-ui/Card";
import { cardValues } from "./cardValues";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <NavbarStyled>
        <h1>Accueil</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Deconnexion
        </button>
      </NavbarStyled>
      <BarStyled>
        <div className="bar"></div>
      </BarStyled>
      <h1>Lecture</h1>

      <ArticleStyled>
        {cardValues.map((card) => (
          <Card
            key={card.date}
            title={card.title}
            content={card.content}
            author={card.author}
            date={card.date}
          />
        ))}
      </ArticleStyled>
    </div>
  );
}

const ArticleStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  margin-left: 30px;
`;

const BarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .bar {
    height: 5px;
    width: 90%;
    background-color: #000000;
    border-radius: 5px;
  }
`;

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 40px 20px;

  button{
    padding: 5px;
    border-radius: 20px;
    width: 300px;
    background-color: #000000;
    color: white;
    font-size: 15px;
    height: 70px;
  }
`
