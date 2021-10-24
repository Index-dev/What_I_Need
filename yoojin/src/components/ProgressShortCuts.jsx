import React from "react";
import styled from "styled-components";
import ProgressListItem from "./ProgressListItem";

const ProgressShortCuts = () => {
  const todoList = [
    { title: "title01", percent: "80" },
    { title: "title02", percent: "80" },
    { title: "title03", percent: "80" },
    { title: "title04", percent: "80" },
    { title: "title05", percent: "80" },
    { title: "title06", percent: "80" }
  ];
  return (
    <List>
      {todoList.map((item, index) => (
        <ProgressListItem
          key={index}
          title={item.title}
          percent={item.percent}
          shortcut={true}
        />
      ))}
    </List>
  );
};

const List = styled.div`
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    width: 2vh;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff449f;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4472c4;
    width: 1vh;
    /* box-shadow: inset 0px 0px 5px white; */
  }
`;

export default ProgressShortCuts;
