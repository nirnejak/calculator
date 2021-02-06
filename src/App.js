import React from "react"

import Button from "./components/Button"
import Input from "./components/Input"

import "./App.css"

function App() {
  const [operation, setOperation] = React.useState("")
  const [result, setResult] = React.useState(0)
  const [operandFirst, setOperandFirst] = React.useState(0)
  const [input, setInput] = React.useState(0)

  React.useEffect(() => {
    setInput(result)
  }, [result])

  const addInput = (value) => {
    if (operandFirst === input) {
      setInput(0 * 10 + value)
    } else {
      setInput(input * 10 + value)
    }
  }

  const addOperation = (opr) => {
    if (operandFirst === 0) {
      setOperandFirst(input)
    } else {
      calculateResult(false)
    }
    setOperation(opr)
  }

  const calculateResult = (shouldClear) => {
    let newResult
    switch (operation) {
      case "+":
        newResult = operandFirst + input
        break
      case "-":
        newResult = operandFirst - input
        break
      case "*":
        newResult = operandFirst * input
        break
      case "/":
        newResult = operandFirst / input
        break
      default:
        window.alert("Invalid Operation")
        return
    }

    setResult(newResult)
    if (shouldClear) {
      setOperandFirst(0)
      setOperation("")
    } else {
      setOperandFirst(newResult)
    }
  }

  const clearCalculator = () => {
    setResult(0)
    setInput(0)
    setOperandFirst(0)
    setOperation("")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Input value={input} />
        </div>
        <div className="row">
          <Button onClick={() => addInput(1)}>1</Button>
          <Button onClick={() => addInput(2)}>2</Button>
          <Button onClick={() => addInput(3)}>3</Button>
          <Button onClick={() => addOperation("+")}>Add (+)</Button>
        </div>
        <div className="row">
          <Button onClick={() => addInput(4)}>4</Button>
          <Button onClick={() => addInput(5)}>5</Button>
          <Button onClick={() => addInput(6)}>6</Button>
          <Button onClick={() => addOperation("-")}>Subtract (-)</Button>
        </div>
        <div className="row">
          <Button onClick={() => addInput(7)}>7</Button>
          <Button onClick={() => addInput(8)}>8</Button>
          <Button onClick={() => addInput(9)}>9</Button>
          <Button onClick={() => addOperation("*")}>Multiply (*)</Button>
        </div>
        <div className="row">
          <Button onClick={clearCalculator}>Clear</Button>
          <Button onClick={() => addInput(0)}>0</Button>
          <Button onClick={calculateResult}>=</Button>
          <Button onClick={() => addOperation("/")}>Divide (/)</Button>
        </div>
      </div>
    </div>
  )
}

export default App
