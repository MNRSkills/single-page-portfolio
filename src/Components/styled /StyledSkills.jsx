import styled from "styled-components";

export const SkillCoStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 2rem;
`;

export const SkillsStyled = styled.div`
  border: 1px solid #fff;
  margin: 2rem;
  padding: 0.5rem 1rem;
  
  h2 {
    font-size: 2.5rem;
    color: #fff;
    padding: 10px;
  }
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  li {
    padding: 0.5rem;
    cursor: pointer;
    list-style: none;
    font-size: 1rem;
  }
`;
