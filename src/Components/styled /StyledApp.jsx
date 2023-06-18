import styled from "styled-components";

export const AppStyled = styled.div`
  background-color: #1a1a1a;
  display: flex;
  justify-content: space-between;
  // align-items: center;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  // @media (max-width: 658px) {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;

  // }
  // @media (max-width: 1008px) {
  //   width: 100%;
  //   // q: show me a grid area way of layout

  // }
`;

export const Main = styled.div`
  width: 75%;
  padding-top: 7rem;
  background-color: #1a1a1a;


  h1 {
    font-size: 3rem;
    color: #aecde8;
    @media (max-width: 768px) {
      font-size: 2rem;
      width: 100%;
    }
  }
  
  h2 {
    font-size: 2rem;
    color: #aecde8;
  }

  @media (max-width: 820px) {
    padding: 40px 0;
    width: 100%;
  }

}`;

export const Section = styled.section`
  text-align: center;
  margin: 0;
  padding: 1rem;

  @media (max-width: 820px) {
    padding: 0;
    width: 100%;
    margin-top: 7rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  position: relative;
  ::after,
  ::before {
    content: " ";
    margin: auto;
    width: 45%;
    height: 2px;
    position: absolute;
  }

  ::after {
    left: 0;
    background-color: #aecde8;
  }
  ::before {
    right: 0;
    background-color: #aecde8;
  }

  @media (max-width: 820px) {
    width: 100%;
    height: 2px;
    position: relative;
  }

  @media (max-width: 858px) {
    ::after,
  ::before {
    content: " ";
    margin: auto;
    width: 40%;
    height: 2px;
    position: absolute;
  }

  @media (max-width: 428px) {
    ::after,
  ::before {
    content: " ";
    margin: auto;
    width: 37%;
    height: 2px;
    position: absolute;
  }

    ::after {
      left: 12px;
      background-color: #aecde8;
    }
    ::before {
      right: 12px;
      background-color: #aecde8;
    }
  }
    
`;

export const FaWrapper = styled.span`
  border-radius: 50%;
  border: 2px solid #c58af9;
  padding: 1rem;
  margin: 0;
  color: #aecde8;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
