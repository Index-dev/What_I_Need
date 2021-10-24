import React, { useState } from "react";
import styled from "styled-components";
import CheckList from "./CheckList";

const ProgressListItem = ({ title, percent, shortcut }) => {
  const progressWidth = percent + "%";
  const [toggleBtn, setToggleBtn] = useState(false);
  const setBtnHandler = () => {
    setToggleBtn(!toggleBtn);
  };
  console.log(shortcut);

  return (
    <ListItem>
      <ItemTitle>
        {title}
        {!shortcut ? (
          toggleBtn ? (
            // <img />
            <span onClick={setBtnHandler}>🔼</span>
          ) : (
            // <img />
            <span onClick={setBtnHandler}>🔽</span>
          )
        ) : null}
      </ItemTitle>
      <ChartBackground>
        <ChartProgress progressWidth={progressWidth} />
      </ChartBackground>
      {!shortcut && toggleBtn ? (
        // <img />
        <CheckList />
      ) : null}
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
  margin: 0vh 0vh 1vh 0vh;
`;

const ChartBackground = styled.div`
  /* width:95%; */
  height: 5vh;
  background: ${props => props.theme.backBarColor};
  border-radius: 10vh;
`;

const ChartProgress = styled.div`
  background: ${props => props.theme.progressBarColor};
  height: 5vh;
  width: ${props => props.progressWidth};
  border-radius: 10vh 0vh 0vh 10vh;
`;

export default ProgressListItem;
