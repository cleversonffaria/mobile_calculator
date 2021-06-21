import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render, fireEvent } from "@testing-library/react-native";
import CalculatorOne from "src/App";

describe("Primeira Calculadora", () => {

  it("deve apresentar os botões em ordem", () => {
    const { getAllByTestId } = render(
      <CalculatorOne />
    );

    expect(getAllByTestId("buttonCalc")[0]).toHaveTextContent("Limpar");
    expect(getAllByTestId("buttonCalc")[1]).toHaveTextContent("C");
    expect(getAllByTestId("buttonCalc")[2]).toHaveTextContent(".");
    expect(getAllByTestId("buttonCalc")[3]).toHaveTextContent("/");
    expect(getAllByTestId("buttonCalc")[4]).toHaveTextContent("7");
    expect(getAllByTestId("buttonCalc")[5]).toHaveTextContent("8");
    expect(getAllByTestId("buttonCalc")[6]).toHaveTextContent("9");
    expect(getAllByTestId("buttonCalc")[7]).toHaveTextContent("*");
    expect(getAllByTestId("buttonCalc")[8]).toHaveTextContent("4");
    expect(getAllByTestId("buttonCalc")[9]).toHaveTextContent("5");
    expect(getAllByTestId("buttonCalc")[10]).toHaveTextContent("6");
    expect(getAllByTestId("buttonCalc")[11]).toHaveTextContent("-");
    expect(getAllByTestId("buttonCalc")[12]).toHaveTextContent("1");
    expect(getAllByTestId("buttonCalc")[13]).toHaveTextContent("2");
    expect(getAllByTestId("buttonCalc")[14]).toHaveTextContent("3");
    expect(getAllByTestId("buttonCalc")[15]).toHaveTextContent("+");
    expect(getAllByTestId("buttonCalc")[19]).toHaveTextContent("=");
  });

  it("deve conter vinte botões na calculadora", () => {
    const { getAllByTestId } = render(
      <CalculatorOne />
    );

    expect(getAllByTestId("buttonCalc").length.toString()).toMatch("20");
  });

  it("deve existir todos números", () => {
    const { getByText } = render(
      <CalculatorOne />
    );
    for (var i = 0; i < 9; i++) {
      expect(getByText(i.toString())).toHaveTextContent(i.toString());
    }
  });

  it("deve conter todos operadores necessários", () => {
    const { getByText } = render(
      <CalculatorOne />
    );

    const operators = ["=", "+", "-", "*", "/", ".", "C", "Limpar"];
    operators.map((op) => {
      expect(getByText(op.toString())).toHaveTextContent(op.toString());
    });
  });

  it("deve substituir o zero após um operador ou ao iniciar um calculo", () => {
    const { getByTestId, getByText } = render(
      <CalculatorOne />
    );

    expect(getByTestId("resultCalc")).toHaveProp("value", "0");
    fireEvent.press(getByText("0"));
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("0"));
    fireEvent.press(getByText("2"));
    expect(getByTestId("resultCalc")).toHaveProp("value", "11-2");
  });

  it("deve trocar o operador ao pressionar outro operador", () => {
    const { getByTestId, getByText } = render(
      <CalculatorOne />
    );

    expect(getByTestId("resultCalc")).toHaveProp("value", "0");
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));
    expect(getByTestId("resultCalc")).toHaveProp("value", "1+2");
  });

  it("deve calcular o último resultado com o operador se não for passado algum número após o operador", () => {
    const { getByTestId, getByText } = render(
      <CalculatorOne />
    );

    expect(getByTestId("resultCalc")).toHaveProp("value", "0");
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("="));
    expect(getByTestId("resultCalc")).toHaveProp("value", "1-1");
  });

  it("deve realizar subtrações", () => {
    const { getByText, getByTestId } = render(
      <CalculatorOne />
    );

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("4"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("6"));
    fireEvent.press(getByText("7"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("9"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1234.5-6789");

    fireEvent.press(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveProp("value", "-5554.5");
  });

  it("deve realizar somas", () => {
    const { getByText, getByTestId } = render(
      <CalculatorOne />
    );

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1+2");

    fireEvent.press(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveProp("value", "3");
  });

  it("deve realizar divisões", () => {
    const { getByText, getByTestId } = render(
      <CalculatorOne />
    );

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("/"));
    fireEvent.press(getByText("2"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1/2");

    fireEvent.press(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveProp("value", "0.5");
  });

  it("deve realizar multiplações", () => {
    const { getByText, getByTestId } = render(
      <CalculatorOne />
    );

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("*"));
    fireEvent.press(getByText("2"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1*2");

    fireEvent.press(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveProp("value", "2");
  });

  it("deve limpar tela", () => {
    const { getByTestId, getByText } = render(
      <CalculatorOne />
    );

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1+23");

    fireEvent.press(getByText("Limpar"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "0");
  });

  it("deve apagar calculo", () => {
    const { getByTestId, getByText } = render(
      <CalculatorOne />
    );

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1+23");

    fireEvent.press(getByText("C"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1+2");
  });

  it("deve exibir calculo", async () => {
    const { getByText, getByTestId } = render(
      <CalculatorOne />
    );

    expect(getByTestId("resultCalc")).toHaveProp("value", "0");

    fireEvent.press(getByText("1"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1");
  });

  it("deve exibir resultado do calculo", () => {
    const { getByText, getByTestId } = render(
      <CalculatorOne />
    );

    expect(getByTestId("operatorCalc")).toHaveProp("value", "");

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("="));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1+2");

    expect(getByTestId("operatorCalc")).toHaveProp("value", "3");
  });

  it("deve gerar erro ao dividir por zero", () => {
    const { getByTestId, getByText } = render(
      <CalculatorOne />
    );

    expect(getByTestId("operatorCalc")).toHaveProp("value", "");

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("/"));
    fireEvent.press(getByText("0"));

    expect(getByTestId("resultCalc")).toHaveProp("value", "1/0");

    fireEvent.press(getByText("="));

    expect(getByTestId("resultCalc")).toHaveProp("value", "0");

    expect(getByTestId("operatorCalc")).toHaveProp("value",
      "Não é possível dividir por zero"
    );
  });

  it("deve gerar erro ao realizar calculos inválidos", () => {
    const { getByTestId, getByText } = render(
      <CalculatorOne />
    );

    expect(getByTestId("operatorCalc")).toHaveProp("value", "");

    fireEvent.press(getByText("0"));
    fireEvent.press(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveProp("value",
      "Não foi possível calcular"
    );
  });
});
