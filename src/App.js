import "./styles.css";
import * as React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [currentStep, setCurrentStep] = useLocalStorage("current_step", 0);

  return (
    <div className="App">
      <h1>Build And Price Calculator {currentStep}</h1>
    </div>
  );
}
