import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render, fireEvent } from "@testing-library/react-native";

import { Button } from "src/components";

describe("Botões", () => {
  // deve ser clicavel
  it("deve ser clicavel", () => {
    const { getByTestId } = render(<Button onPress={() => { }} />);

    fireEvent.press(getByTestId("buttonCalc"))

    expect(getByTestId("buttonCalc")).toHaveTextContent("")

  });

  // deve conter algum valor
  it("deve conter algum valor", () => {
    const { getByText } = render(<Button value="2" />);

    expect(getByText("2")).toHaveTextContent("2")
  });
});
