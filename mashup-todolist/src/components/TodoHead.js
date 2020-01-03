import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #adb5bd;
    font-size: 21px;
  }
  .takes-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1> 2020 년 1 월 3 일 </h1> <div className="day"> 일요일 </div>{" "}
      <div className="takes-left"> 할 일 2 개 남음 </div>{" "}
    </TodoHeadBlock>
  );
}

export default TodoHead;
