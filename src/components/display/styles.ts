import styled from 'styled-components/native';
import { Dimensions, PixelRatio } from "react-native";

const widthPercentageToDP = (widthPercent: string) => {
  const screenWidth = Dimensions.get("window").width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};


interface PropsInput {
  displayTop?: boolean
}

export const View = styled.View`
  background-color: rgba(0, 0, 0,.3);
`;

export const Input = styled.TextInput<PropsInput>`
  width: ${widthPercentageToDP("94")}px;
  padding:10px 20px;
  margin:0;
  
  border:none;
  text-align: right;
  color:#fff;
  font-size:${({ displayTop }) => displayTop ? "22px" : "26px"};
`;
