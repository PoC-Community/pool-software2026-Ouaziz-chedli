import React from "react";
import { Card, CardBody, CardHeader } from "./Card";

function TemperatureInput({
  scale,
  temperature,
  onTemperatureChange,
}: {
  scale: "C" | "F";
  temperature: string;
  onTemperatureChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <fieldset>
      <legend>
        Enter temperature in {scale === "C" ? "Celsius" : "Fahrenheit"}:
      </legend>
      <input value={temperature} onChange={onTemperatureChange} className="temperature-input"/>
    </fieldset>
  );
}

export function TemperatureConverter() {
  const [celsius, setCelsius] = React.useState<string>("0");

  const toFahrenheit = (celsiusValue: number): number => {
    return isNaN(celsiusValue) ? 0 : (celsiusValue * 9) / 5 + 32;
  };

  const toCelsius = (fahrenheitValue: number): number => {
    return isNaN(fahrenheitValue) ? 0 : ((fahrenheitValue - 32) * 5) / 9;
  };

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setCelsius("");
      return;
    }
    setCelsius(e.target.value);
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setCelsius("");
      return;
    }
    const fahrenheitValue = parseFloat(e.target.value);
    setCelsius(toCelsius(fahrenheitValue).toString());
  };

  const fahrenheit = toFahrenheit(parseFloat(celsius)).toString();

  return (
    <Card>
      <CardHeader>
        <p>Temperature Converter</p>
      </CardHeader>
      <CardBody>
        <TemperatureInput
          scale="C"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput
          scale="F"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
      </CardBody>
    </Card>
  );
}
