import React from "react";
import "./tez-formula-slider.css";

interface TezFormulaSliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDarkMode: boolean;
}

const TezFormulaSlider: React.FC<TezFormulaSliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
  isDarkMode,
}) => {
  return (
    <div className="space-y-2">
      <label
        className={`block text-sm font-medium ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Tez Amount: {value.toFixed(2)}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className={`w-full h-2 rounded-lg appearance-none cursor-pointer slider ${
            isDarkMode ? "slider-dark" : "slider-light"
          }`}
          style={
            {
              "--slider-value": `${(value / max) * 100}%`,
            } as React.CSSProperties
          }
          title="Tez Amount"
        />
      </label>
      <div
        className={`flex justify-between text-xs ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <span>{min}</span>
        <span>{max / 2}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default TezFormulaSlider;
