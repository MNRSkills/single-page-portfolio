import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 0.5rem 1rem;
  margin: 2rem;

  @media (max-width: 1008px) {
    position: sticky;

  h2 {
    font-size: 2rem;
    color: #aecde8;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      max-width: 80%;
    }
  }
  p {
    font-size: 1.5rem;
    color: #999c97;

    @media (max-width: 768px) {
      font-size: 1rem;
      max-width: 80%;
    }
  }
`;
