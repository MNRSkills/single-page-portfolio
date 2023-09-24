import styled from "styled-components";

export const SkillCoStyled = styled.div`
  display: grid;
  grid-template-columns: [first-col] 1fr [efirst-col second-col] 1fr [esecond-col third-col] 1fr [ethird-co fourth-col] 1fr[ end-col ] ;
  grid-template-rows": [first-row] 1fr [efirst-row second-row] 1fr [esecond-row third-row] 1fr [ethird-row fourth-row] 1fr [end-row];
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 2rem;
  grid-template-areas: 'header header header header' 'card-one card-one' 'card-two card-two' 'card-three card-three' 'card-four card-four';
`;

export const SkillsStyled = styled.div`
  grid-column: first-col/span-2;
  grid-row: span-2;
`;

export const SkillsStyledTwo = styled.div`
  grid-column: third-col/span-2;
`;

export const SkillsCard = styled.div`
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 2rem;
  padding: 0.5rem 1rem;

  h2 {
    font-size: 2.5rem;
    color: #fff;
    padding: 10px;
  }
`;

export const SkillList = styled.ul`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  li {
    padding: 0.5rem;
    cursor: pointer;
    list-style: none;
    font-size: 1.5rem;
    font-family: "Roboto Mono", sans-serif;
    color: #aecde8;
    &:hover {
      color: #fff;
      font-weight: bold;
      text-decoration: underline;
  }
`;
