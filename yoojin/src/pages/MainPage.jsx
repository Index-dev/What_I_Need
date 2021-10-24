import React from "react";
import styled from "styled-components";
import ProgressShortCuts from "../components/ProgressShortCuts";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <MainText>
      <ContentTop>
        <div>..ing</div>
        <div>
          <NavLink exact to="/list">
            📋
          </NavLink>
        </div>
      </ContentTop>
      <Content>
        {/* <ProgressList /> */}
        <ProgressShortCuts />
      </Content>
    </MainText>
  );
};

// 색상
const MainText = styled.div`
  color: ${props => props.theme.mainColor};
  background: ${props => props.theme.backgColor};
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: ${props => props.theme.subBackColor};
  height: 60%;
  width: 90%;
`;

const ContentTop = styled.div`
  background: ${props => props.theme.subTopkColor};
  height: 10%;
  width: 90%;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  & > div:nth-child(1) {
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div:nth-child(2) {
    width: 10%;
    height: 50%;
    margin: 0.5em;
    background-color: #cccccc4d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
  }

  & > div:nth-child(2):hover {
    background-color: #0c0c4687;
  }
`;
export default Main;
