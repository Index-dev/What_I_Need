import React from "react";
import styled from "styled-components";
import ProgressList from "../components/ProgressList";
import { NavLink } from "react-router-dom";
const List = () => {
  return (
    <Content>
      <Home>
        <NavLink exact to="/">
          🏠
        </NavLink>
      </Home>
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
`;

export default List;
