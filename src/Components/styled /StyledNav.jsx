import styled from "styled-components";

export const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 2rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  padding: 0.5rem 2rem;
  li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    list-style: none;
    font-size: 2.5rem;
  }
  a {
    text-decoration: none;
    color: #aecde8;
  }
  @media (max-width: 768px) { 
    display: none;
  }

`;


export const HeadWrap = styled.div`

`;

export const Logo = styled.div`
  background-image: url("https://res.cloudinary.com/mackr/image/upload/v1674367278/uvmytvwlvldwj15c0l8h.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 5%;
  
  width: 400px;
  height: 500px;
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid #fff;
    z-index: auto;

    transform: translate(-15px, 15px);
    border-radius: 5%;

  }

  @media (max-width: 768px) {
    width: 300px;
    height: 350px;
    position: absolute;
  }

`;
