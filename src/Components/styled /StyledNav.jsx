import styled from "styled-components";

export const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;

  @media (max-width: 1008px) {
    padding: 0;
    

    ul {
      padding: 0;
    }
  }

  @media (max-width: 820px) {
    padding: 0;
    width: 100%;
    background: #1a1a1a;
    font-size: .4rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 2rem;
  li {
    cursor: pointer;
    list-style: none;
    font-size: 1.5rem;
  }
  a {
    color: #aecde8;
    text-decoration: none;
    &:hover {
      color: #fff;
      text-decoration: underline;
      text-decoration-color: #c58af9;
    }
    &:active {
      color: #c58af9;
    }
  }

  @media (max-width: 768px) {
    
  }
`;

// export const HeadWrap = styled.div``;

export const Logo = styled.div`
  grid-area: logo;
  background-image: url("https://res.cloudinary.com/mackr/image/upload/v1674367278/uvmytvwlvldwj15c0l8h.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 5%;

  width: 300px;
  height: 400px;
  ::before, ::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid #fff;
    z-index: auto;

    transform: translate(-15px, 15px);
    border-radius: 5%;
  }

  @media (max-width: 1008px) {
    width: 200px; 
    height: 250px;
    z-index: 1;
    order: 2
    position: relative;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 350px;
  }

  @media (max-width: 1080px) {
    width: 200px;
    height: 250px;
  }
`;

export const ResponsiveNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  width: 100%;
  background: #1a1a1a;
  color: #1a1a1a;

  h1 {
    font-weight: 900;
    font-size: 2.5rem;
    color: #aecde8;
    margin-left: 1.5rem;
  }

  .icon {
    margin-right: 2.5rem;
    color: #fff;
  }

  `;
