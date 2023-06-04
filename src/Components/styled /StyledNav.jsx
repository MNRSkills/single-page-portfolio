import styled from "styled-components";

export const Nav = styled.nav`

  width: 50%;
  height: 100%;
  display: grid;
  grid-template-areas: "branding branding branding" "list . img";
  align-items: center;
  
  // work on these styles on  how to 
  // make the nav bar sticky
  position: sticky;
  ${({ isSticky }) => isSticky && " left: 0;"};
 
  top: 0;

  .branding {
    text-align: center;
    grid-area: branding;
    margin-top: 10rem;
    h1 {
      font-size: 4rem;
      color: #aecde8;
      
    }
    h4 {
      font-size: 1.5rem;
      color: white;

    } 
  }
// TESTING FOR RESPONSIVE NAV
  @media (max-width: 1008px) {
   
  }

  // THIS IS RESPONSIVE NAV ACTUAL

  @media (max-width: 820px) {
    padding: 0;
    width: 100%;
    background: #1a1a1a;
    z-index: 2;

    .branding{
      margin-top: 0;
    }

    h1 {
      margin-top: 20px;
      font-size: 2rem;
    }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  // work on these styles on  how to 
  // make the nav bar sticky
  position: ${({ isSticky }) => (isSticky ? "sticky" : "relative")};
  ${({ isSticky }) => isSticky && " left: 0;"};
  ${({ isSticky }) => console.log(isSticky, "From Nav styled")}};
  top: 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 2.5rem 7rem;
  li {
    cursor: pointer;
    list-style: none;
    display: inline-block;
  }
  a {
    color: #aecde8;
    text-decoration: none;
    font-size: 1.5rem;
    &:hover {
      color: #fff;
      text-decoration: underline;
      text-decoration-color: #c58af9;
    }
  }

  @media (max-width: 820px) {
    margin: 10px auto;
  }
`;

// export const HeadWrap = styled.div``;

export const Logo = styled.div`
  grid-area: img;
  background-image: url("https://res.cloudinary.com/mackr/image/upload/v1674367278/uvmytvwlvldwj15c0l8h.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: ${({ isSticky }) => (isSticky ? "sticky" : "relative")};
  ${({ isSticky }) => isSticky && " left: 0;"};
  border-radius: 5%;

  width: 300px;
  height: 400px;
  ::before,
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid #fff;
    z-index: -1;

    transform: translate(-15px, 15px);
    border-radius: 5%;
  }

  @media (max-width: 1008px) {
    width: 200px;
    height: 250px;
    order: 2;
    position: relative;
    z-index: auto;
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
  position: sticky;
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
