import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../reusable-ui/Card";
import { cardValues } from "./cardValues";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <button onClick={() => {navigate("/")}}>Deconnexion</button>
      </nav>
      <div>Article :</div>

      <ArticleStyled>
        {cardValues.map((card) => (
          <Card key={card.date} title={card.title} content={card.content} author={card.author} date={card.date} />
        ))}
      </ArticleStyled>
    </div>
  );
}

const ArticleStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;

`
