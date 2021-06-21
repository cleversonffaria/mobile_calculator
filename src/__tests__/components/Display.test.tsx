import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render } from "@testing-library/react-native";

import { Display } from "src/components";

describe("Display", () => {

  // Deve verificar se as informações do display existe.
  it("should check if there is information on the display", () => {
    const { getByTestId, debug } = render(<Display result="1" value="0" />)

    expect(getByTestId("operatorCalc")).toHaveProp("value", "1")
    expect(getByTestId("resultCalc")).toHaveProp("value", "0")

  });
});
