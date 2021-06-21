import styled from 'styled-components/native';

import { Dimensions, PixelRatio } from "react-native";

const widthPercentageToDP = (widthPercent: string) => {
  const screenWidth = Dimensions.get("window").width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

interface PropsWrapperButton {
  operador?: boolean;
  backgroundColor?: string;
}

export const Button = styled.TouchableOpacity<PropsWrapperButton>`
  background: ${({ operador, backgroundColor }) => backgroundColor || (!operador ? "#060606" : "#121212")};
  width: ${widthPercentageToDP("22")}px;
  height:60px;
  justify-content: center;
  align-items: center;
  margin:4px;
`;

export const Text = styled.Text`
  font-family:sans-serif;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
