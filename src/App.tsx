import './App.css'

function App() {
  return (
    <>
      <div className="calculator">
        <div className="calculator__display">
          <input
            type="text"
            disabled
            className="calculator__display-input"
            id="calculator__display-input"
            value="0"
          />
        </div>
        <div className="calculator__button-container">
          <div className="calculator__button-row">
            <button className="calculator__button">AC</button>
            <button className="calculator__button">CE</button>
            <button disabled className="calculator__button"></button>
            <button className="calculator__button">÷</button>
          </div>
          <div className="calculator__button-row">
            <button className="calculator__button">7</button>
            <button className="calculator__button">8</button>
            <button className="calculator__button">9</button>
            <button className="calculator__button">×</button>
          </div>
          <div className="calculator__button-row">
            <button className="calculator__button">4</button>
            <button className="calculator__button">5</button>
            <button className="calculator__button">6</button>
            <button className="calculator__button">-</button>
          </div>
          <div className="calculator__button-row">
            <button className="calculator__button">1</button>
            <button className="calculator__button">2</button>
            <button className="calculator__button">3</button>
            <button className="calculator__button">+</button>
          </div>
          <div className="calculator__button-row">
            <button className="calculator__button">0</button>
            <button className="calculator__button">.</button>
            <button disabled className="calculator__button"></button>
            <button className="calculator__button">=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
