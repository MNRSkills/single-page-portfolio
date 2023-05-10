import styled from "styled-components";

export const SkillCoStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows": 1fr 1fr;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 2rem;
`;

export const SkillsStyled = styled.div`
  grid-column: 1 / 3;
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
