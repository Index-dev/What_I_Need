import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ExampleCustomInput = ({ value, onClick }) => {
  <button className="example-custom-input" onClick={onClick}>
    {value}
  </button>;
};

const CheckListItem = ({ content }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <List>
      <input type="checkbox" id="chk" />
      <Content>{content}</Content>
      <DatePicker
        // customInput={<ExampleCustomInput />}
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
      <Buttons>🔧</Buttons>
      <Buttons>❌</Buttons>
    </List>
  );
};

export default CheckListItem;

const List = styled.div`
  width: 100%;
  padding: 1vh;
  /* background-color: gray; */
  background-color: ${props => props.theme.subBackColor};
  display: grid;
  grid-template-columns: 0.5fr 4fr 2fr 0.5fr 0.5fr;
  align-items: center;
  justify-items: center;
  & > input:nth-child(1) {
    width: 100%;
    border: none;
    height: 100%;
  }
`;
const Content = styled.div`
  width: 100%;
  border: none;
  height: 100%;
  color: black;
`;

const Buttons = styled.div``;
