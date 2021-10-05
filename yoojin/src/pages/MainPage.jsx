import React from "react";
import styled from "styled-components";
import ScheduleList from "../components/ScheduleList";

const Main = () => {
  return (
    <MainText>
      <ContentTop>
        <div>title</div>
        <div>button</div>
      </ContentTop>
      <Content>
        <ScheduleList />
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
`;
export default Main;
