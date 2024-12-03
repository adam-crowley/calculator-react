import { useState } from 'react'
import './App.css'

function App() {
  const [total, setTotal] = useState([])
  const [currentValue, setCurrentValue] = useState('0')

  function handleClick(value: string) {
    if (currentValue.length <= 8) {
      setCurrentValue((prev) => (prev === '0' ? value : prev + value))
    }
  }

  return (
    <>
      <div className="calculator">
        <div className="calculator__display">
          <div
            className="calculator__display-input"
            id="calculator__display-input"
          >
            {currentValue}
          </div>
        </div>
        <div className="calculator__button-container">
          <div className="calculator__button-row">
            <button className="calculator__button">AC</button>
            <button className="calculator__button">CE</button>
            <button disabled className="calculator__button"></button>
            <button className="calculator__button">÷</button>
          </div>
          <div className="calculator__button-row">
            <button
              className="calculator__button"
              onClick={() => handleClick('7')}
            >
              7
            </button>
            <button
              className="calculator__button"
              onClick={() => handleClick('8')}
            >
              8
            </button>
            <button
              className="calculator__button"
              onClick={() => handleClick('9')}
            >
              9
            </button>
            <button className="calculator__button">×</button>
          </div>
          <div className="calculator__button-row">
            <button
              className="calculator__button"
              onClick={() => handleClick('4')}
            >
              4
            </button>
            <button
              className="calculator__button"
              onClick={() => handleClick('5')}
            >
              5
            </button>
            <button
              className="calculator__button"
              onClick={() => handleClick('6')}
            >
              6
            </button>
            <button className="calculator__button">-</button>
          </div>
          <div className="calculator__button-row">
            <button
              className="calculator__button"
              onClick={() => handleClick('1')}
            >
              1
            </button>
            <button
              className="calculator__button"
              onClick={() => handleClick('2')}
            >
              2
            </button>
            <button
              className="calculator__button"
              onClick={() => handleClick('3')}
            >
              3
            </button>
            <button className="calculator__button">+</button>
          </div>
          <div className="calculator__button-row">
            <button
              className="calculator__button"
              onClick={() => handleClick('0')}
            >
              0
            </button>
            <button
              className="calculator__button"
              onClick={() => handleClick('.')}
            >
              .
            </button>
            <button disabled className="calculator__button"></button>
            <button className="calculator__button">=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
