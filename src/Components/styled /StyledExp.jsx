import styled from "styled-components";

export const WorkHistoryStyled = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  ::after {
    content: "";
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    left: 10%;
    transform: translateX(-50%);
    background: #fff;
    &:hover::after {
      background: #aecde8;
    }
  }
`;

export const JobContainer = styled.div`
  position: relative;
  padding: 1rem 0;
  margin: 1rem auto;
  width: 80%;
  ::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    right: -17px;
    top: 55px;
    left: 5%;
    background-color: white;
    border: 4px solid #aecde8;
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;
    &_:hover {
        background-color: #ff9f55;
        border: 4px solid white;

    }
  }

  h2{
    cursor: pointer;
  }

  h3 {
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
  

  p {
    margin-left: 10%;
    padding: 0;
    font-size: 1.2rem;
    line-height: 1.5;
    width: 100%;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 1rem;
    }

  }
  @media (max-width: 390px) {
    h2{
      font-size: 1.5rem;

    }
`;
