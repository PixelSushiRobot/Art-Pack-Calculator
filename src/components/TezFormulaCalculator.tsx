'use client'

import React, { useState, useCallback } from 'react'
import { Sun, Moon } from 'lucide-react'
import TezFormulaSlider from './tez-formula-slider'

const TezFormulaCalculator: React.FC = () => {
  const [tezAmount, setTezAmount] = useState<number>(35)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const sigma = 35 // Scale parameter

  // Calculate P(x) = 1 - e^(-x/σ) * (1 + x/σ)
  const calculatePercentage = useCallback((x: number): number => {
    const ratio = x / sigma
    const exponential = Math.exp(-ratio)
    const result = 1 - exponential * (1 + ratio)
    return result * 100 // Convert to percentage
  }, [sigma])

  const percentage = calculatePercentage(tezAmount)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTezAmount(parseFloat(e.target.value))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value) && value >= 0) {
      setTezAmount(value)
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen py-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className={`max-w-2xl mx-auto p-8 rounded-lg shadow-lg transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}>
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Objkt Art Pack Drop Rate</h1>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              P(x) = 1 - e<sup>(-x/σ)</sup> × (1 + x/σ) where σ = {sigma}
            </p>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="space-y-6">
          {/* Slider Input */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Tez Amount: {tezAmount.toFixed(2)}
            </label>
            <TezFormulaSlider
              min={0}
              max={200}
              step={0.1}
              value={tezAmount}
              onChange={handleSliderChange}
              isDarkMode={isDarkMode}
            />
            <div className={`flex justify-between text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <span>0</span>
              <span>100</span>
              <span>200</span>
            </div>
          </div>

          {/* Manual Input */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Or enter exact amount:
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={tezAmount}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                isDarkMode 
                  ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                  : 'border-gray-300 bg-white text-gray-800'
              }`}
              placeholder="Enter tez amount"
            />
          </div>

          {/* Result Display */}
          <div className={`p-6 rounded-lg border transition-colors ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-700 to-gray-600 border-gray-600' 
              : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
          }`}>
            <div className="text-center">
              <div className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Result:</div>
              <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {percentage.toFixed(2)}%
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                P({tezAmount.toFixed(2)}) = {(percentage / 100).toFixed(4)}
              </div>
            </div>
          </div>

          {/* Key Values Table */}
          <div className={`p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Quick Reference</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>At σ (35 tez):</span>
                  <span className="font-medium">{calculatePercentage(35).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>At 2σ (70 tez):</span>
                  <span className="font-medium">{calculatePercentage(70).toFixed(1)}%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>At 100 tez:</span>
                  <span className="font-medium">{calculatePercentage(100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>At 150 tez:</span>
                  <span className="font-medium">{calculatePercentage(150).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: ${isDarkMode ? '#6366f1' : '#3b82f6'};
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: ${isDarkMode ? '#6366f1' : '#3b82f6'};
            cursor: pointer;
            border: none;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
        `}</style>
      </div>
    </div>
  )
}

export default TezFormulaCalculator