import React from 'react';

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
  isDarkMode
}) => {

  return (
    <div className="space-y-2">
      <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Tez Amount: {value.toFixed(2)}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, ${isDarkMode ? '#6366f1' : '#3b82f6'} 0%, ${isDarkMode ? '#6366f1' : '#3b82f6'} ${(value / max) * 100}%, ${isDarkMode ? '#374151' : '#e5e7eb'} ${(value / max) * 100}%, ${isDarkMode ? '#374151' : '#e5e7eb'} 100%)`
        }}
      />
      <div className={`flex justify-between text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <span>{min}</span>
        <span>{max/2}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default TezFormulaSlider;
