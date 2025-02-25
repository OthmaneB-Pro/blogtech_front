import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <div>Article :</div>

      <CardStyled>
        <h1>Title</h1>
        <p>Content</p>
        <span>Author</span>
        <span>Dernière maj</span>
      </CardStyled>
    </div>
  );
}

const CardStyled = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  // background: grey;
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 5px 5px rgba(63, 63, 63, 0.5);
  
  h1{
    background-color: green;
  }
  p{
    padding: 15px;
    height: 130px;
    margin-top: 0px;
    background-color: blue;
  }
  `
