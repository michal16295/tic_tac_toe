import styled from "styled-components";

import difficultyArr from "../../constants/difficulty";

interface IProps {
  direction: string;
}

const LevelList = ({
  onPress,
  direction = "row",
}: {
  direction?: string;
  onPress: (id: number) => void;
}) => {
  return (
    <List direction={direction}>
      {difficultyArr.map((item) => {
        return (
          <div onClick={() => onPress(item.id)} key={item.id}>
            {item.title}
          </div>
        );
      })}
    </List>
  );
};

export default LevelList;

const List = styled.div<IProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  margin: 20px auto;

  div {
    text-transform: uppercase;
    background-color: #57cbff;
    color: #112240;
    margin: 10px 10px;
    line-height: 50px;
    flex: 1 1 50px;
    max-width: 200px;
    border-radius: 15px;
    border: 3px solid white;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 6px rgba(255, 255, 255, 0.8);
    &:hover {
      box-shadow: 0 6px rgba(17, 34, 64, 1);
    }
  }
`;
