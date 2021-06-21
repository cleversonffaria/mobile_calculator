/* eslint-disable no-eval */
import React, { useState } from "react";
import { Button, Display } from "src/components";

import { Container, Calculator, Header, Title } from "./styles";

function CalculatorOne() {
  const [result, setResult] = useState("");
  const [resultCalc, setResultCalc] = useState("");

  //#region Ações do botão
  const handleClick = (value) => {
    const lastR = result.split("")[result.length - 1];

    if (
      (lastR === value && !!value.match(/\D/g)) ||
      (!!lastR?.match(/\D/g) && !!value.match(/\D/g))
    ) {
      if (lastR !== value) {
        setResult(result.slice(0, result.length - 1).concat(value));
      }
      return;
    } else if (
      lastR === "0" &&
      result.split("")[result.length - 2]?.match(/\D/g)
    ) {
      setResult(result.slice(0, result.length - 1).concat(value));
      return;
    } else if (!lastR && value === "0") {
      return;
    }
    setResult(result.concat(value));
  };

  //#endregion

  //#region Limpar Display

  const clear = () => {
    setResult("");
    setResultCalc("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  //#endregion

  //#region Realizar Operação

  const calculate = () => {
    const lastR = result.split("")[result.length - 1];

    try {
      if (!!lastR?.match(/\D/g)) {

        setResultCalc(
          eval(
            eval(result.slice(0, result.length - 1)).toString() +
            lastR +
            Math.abs(eval(result.slice(0, result.length - 1)).toString())
          ).toString()
        );

        setResult(
          eval(result.slice(0, result.length - 1)).toString() +
          lastR +
          Math.abs(eval(result.slice(0, result.length - 1)).toString())
        );

        return;
      } else if (
        eval(result).toString() === "-Infinity" ||
        eval(result).toString() === "Infinity"
      ) {
        setResultCalc("Não é possível dividir por zero");
        setResult("");
        return;
      }

      setResultCalc(eval(result).toString());
    } catch (error) {
      setResultCalc("Não foi possível calcular");
      setResult("");
    }
  };

  //#endregion

  return (
    <Container>
      <Header>
        <Title>Calculator Mobile</Title>
      </Header>
      <Calculator>
        <Display result={resultCalc} value={result || "0"} />

        <Button onPress={clear} value="Limpar" operador />
        <Button onPress={backspace} value="C" operador />
        <Button onPress={() => handleClick(".")} value="." operador />
        <Button onPress={() => handleClick("/")} value="/" operador />

        <Button onPress={() => handleClick("7")} value="7" />
        <Button onPress={() => handleClick("8")} value="8" />
        <Button onPress={() => handleClick("9")} value="9" />
        <Button onPress={() => handleClick("*")} value="*" operador />

        <Button onPress={() => handleClick("4")} value="4" />
        <Button onPress={() => handleClick("5")} value="5" />
        <Button onPress={() => handleClick("6")} value="6" />
        <Button onPress={() => handleClick("-")} value="-" operador />

        <Button onPress={() => handleClick("1")} value="1" />
        <Button onPress={() => handleClick("2")} value="2" />
        <Button onPress={() => handleClick("3")} value="3" />
        <Button onPress={() => handleClick("+")} value="+" operador />

        <Button value="" operador />
        <Button onPress={() => handleClick("0")} value={0} />
        <Button value="" operador />

        <Button
          onPress={calculate}
          value="="
          operador
          backgroundColor="#134369"
        />
      </Calculator>
    </Container>
  )
}

export default CalculatorOne;
