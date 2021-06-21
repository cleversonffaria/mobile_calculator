import React, { InputHTMLAttributes } from "react";

import { Input, View } from "./styles";

interface PropsDisplay extends InputHTMLAttributes<HTMLInputElement> { result?: string }

const Display: React.FC<PropsDisplay> = ({ result, ...props }) => {
  return (
    <View>
      <Input
        testID="operatorCalc"
        type="text"
        value={result}
        editable={false}
        readOnly
        displayTop
      />

      <Input
        testID="resultCalc"
        type="text"
        editable={false}
        readOnly
        {...props}
      />
    </View>
  )
};

export default Display;
