import styled from "styled-components";

export const NavBar = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #456268;
  padding: 1em;
  text-decoration: none;
  h1 {
    margin-right: auto;
    color: #d0e8f2;
  }
  a {
    text-decoration: none;
    color: white;
    padding: 1em;
    &:hover {
      background-color: #d0e8f2;
      color: #456268;
      border-radius: 2em;
    }
  }
`;

export const MainApp = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em;
`;

export const Btn = styled.button`
  a {
    text-decoration: none;
    color: ${(props) => props.color || "#456268"};
  }
  margin: 0.5em;
  padding: 0.8em;
  border: none;
  border-radius: 0.3em;
  color: ${(props) => props.color || "#456268"};
  background: ${(props) => props.background || "#79a3b1"};
  &:hover {
    background: ${(props) => props.hoverBg || "#456268"};
    color: ${(props) => props.hoverColor || "#79a3b1"};
    cursor: pointer;
  }
`;

export const NavCart = styled.div`
  position: relative;
  div {
    position: absolute;
    right: -0.5em;
    top: -0.5em;
    transform: translate(50%, -50%);
    align-items: center;
    display: flex;
    justify-content: center;
    background: red;
    color: white;
    padding: 0.3em;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SmCard = styled.div`
  background: #79a3b1;
  padding: 2em;
  margin: 0.8em;
  border-radius: 2em;
`;

export const ShopSmCard = styled(SmCard)`
  width: 25%;

  @media (max-width: 1150px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const LiItem = styled.li`
  list-style: none;
`;
