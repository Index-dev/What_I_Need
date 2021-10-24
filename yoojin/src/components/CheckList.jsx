import React from "react";
import styled from "styled-components";
import CheckListItem from "./CheckListItem";

const CheckList = () => {
  return (
    <ContentDiv>
      <CheckListItem content="content01" />
      <CheckListItem content="content01" />
      <CheckListItem content="content01" />
      <CheckListItem content="content01" />
      <CheckListItem content="content01" />
      <CheckListItem content="content01" />
    </ContentDiv>
  );
};

export default CheckList;

const ContentDiv = styled.div`
  margin-top: 1vh;
`;
