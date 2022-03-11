import { useState, useEffect } from "react";
import styled from "styled-components";
import usePlayer from "../../context/Player.context";

const X = "X";
const O = "O";

const Figure = ({ figure }: { figure: string }) => {
  return (
    <div>
      {figure.toUpperCase() === X ? (
        <Circle />
      ) : (
        <>{figure.toUpperCase() === O ? <EX>X</EX> : null}</>
      )}
    </div>
  );
};

export default Figure;

const Circle = styled.div`
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0 7px 20px 10px rgba(100, 255, 218, 0.1);
  border: 20px solid #64ffda;
  height: 50px;
  width: 50px;
`;

const EX = styled.div`
  color: #f57dff;
  font-size: 90px;
  font-weight: bold;
  text-shadow: 1px 5px rgba(245, 125, 255, 0.2);
`;
