import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Text, Button } from "./styles";

interface PropsButton extends TouchableOpacityProps {
  value?: string | number;
  operador?: boolean;
  backgroundColor?: string;
}

const Buttons: React.FC<PropsButton> = ({ value, operador, backgroundColor, ...props }) => {

  return (
    <Button
      testID="buttonCalc"
      backgroundColor={backgroundColor}
      operador={operador}
      value={value}
      {...props}
    >
      <Text>{value}</Text>
    </Button>
  );
};

export default Buttons;
