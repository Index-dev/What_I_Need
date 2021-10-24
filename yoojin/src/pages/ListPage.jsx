import React from "react";
import styled from "styled-components";
import ProgressList from "../components/ProgressList";
import { NavLink } from "react-router-dom";
const List = () => {
  return (
    <Content>
      <NavLink exact to="/">
        <Home>🏠</Home>
      </NavLink>

      <ProgressList />
    </Content>
  );
};

const Content = styled.div`
  background: ${props => props.theme.backgColor};
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Home = styled.div`
  background: ${props => props.theme.subTopkColor};
  height: 8vh;
  display: flex;
  align-items: center;
  width: 10vh;
  justify-content: center;
  margin: 1vh;
  border-radius: 2vh;
  :hover {
    cursor: pointer;
    background-color: #005f99d4;
  }
`;

export default List;
