import React from "react";
import styled from "styled-components";

const ScheduleListItem = () => {
  return (
    <ListItem>
      <ItemTitle> title 01 </ItemTitle>
      <ChartBackground>
        <ChartProgress />
      </ChartBackground>
    </ListItem>
  );
};
const ListItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  > * {
    width: 95%;
  }
  padding: 1.5vh;
`;

const ItemTitle = styled.div`
  /* width: 100%; */
  font-size: 2vh;
`;
const ChartBackground = styled.div`
  /* width:95%; */
  height: 5vh;
  background: ${props => props.theme.backBarColor};

};
`;
const ChartProgress = styled.div`
  background: ${props => props.theme.progressBarColor};
  height: 5vh;
`;

export default ScheduleListItem;
