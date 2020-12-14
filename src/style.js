import styled from "styled-components";
import bg from "./assets/bg.jpeg";
import bgm from "./assets/bg-mobile.png";
import homebg from "./assets/homebg.jpeg";

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
    span {
      color: #79a3b1;
    }
  }

  h2 {
    margin-right: auto;
    color: #d0e8f2;
    display: none;
    span {
      color: #79a3b1;
    }
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
  @media (max-width: 768px) {
    h1 {
      display: none;
    }
    h2 {
      display: inline;
    }
  }
`;

export const MainApp = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const Btn = styled.button`
  a {
    text-decoration: none;
    color: ${(props) => props.color || "black"};
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
  padding: 2em;
`;

export const ShopWrapper = styled(Wrapper)`
  background: url(${bg}) no-repeat center fixed;
  margin: 0;
  @media (max-width: 740px) {
    background: url(${bgm}) no-repeat center fixed;
  }
`;

export const HomeWrapper = styled(Wrapper)`
  background: url(${homebg}) no-repeat center;
  background-size: cover;
  text-align: center;
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
  width: 100%;
  height: 50vh;
  h1,
  p {
    color: white;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
  }
  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    background: url(${homebg}) no-repeat center;
    background-size: cover;
    border-bottom-left-radius: 30% 15%;
    border-bottom-right-radius: 30% 15%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SmCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #79a3b1;
  padding: 2em;
  margin: 0.8em;
  border-radius: 2em;
  @media (max-width: 768px) {
    text-align: center;
    padding: 4em;
    margin: 1em;
    width: 70%;
  }
`;

export const ShopSmCard = styled(SmCard)`
  width: 25%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  img {
    width: 70px;
    height: 70px;
    padding: 1em;
  }

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
