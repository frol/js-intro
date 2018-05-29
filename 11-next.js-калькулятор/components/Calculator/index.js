import CalculatorDisplay from './CalculatorDisplay'
import CalculatorKeypad from './CalculatorKeypad'

function calculate(operator, a, b) {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/': return a / b
    default:
      console.error(`Ошибка вычисления '${a} ${operator} ${b}': неизвестный оператор ${operator}`)
      return null
  }
}

export default class extends React.Component {
  state = {
    previousValue: null,
    currentValue: '0',
    lastOperator: null,
    isWaitingForNewNumber: true,
  }

  handleInput = (value) => {
    if (value >= '0' && value <= '9') {    
      let currentDisplayValue = this.state.currentValue
      if (this.state.isWaitingForNewNumber) {
        this.setState({ currentValue: value, isWaitingForNewNumber: false })
      } else {
        this.setState({ currentValue: currentDisplayValue + value })
      }
    } else if (value == '+' || value == '-' || value == '*' || value == '/') {
      if (this.state.isWaitingForNewNumber) {
        this.setState({ lastOperator: value })
      } else {
        let computedResult
        if (this.state.lastOperator != null && this.state.previousValue != null) {
          computedResult = calculate(
            this.state.lastOperator,
            Number(this.state.previousValue),
            Number(this.state.currentValue)
          )
        } else {
          computedResult = this.state.currentValue
        }
        this.setState({
          lastOperator: value,
          isWaitingForNewNumber: true,
          previousValue: computedResult,
          currentValue: computedResult,
        })
      }
    } else if (value == '=') {
      let computedResult
      if (this.state.lastOperator != null && this.state.previousValue != null) {
        computedResult = calculate(
          this.state.lastOperator,
          Number(this.state.previousValue),
          Number(this.state.currentValue)
        )
      } else {
        computedResult = this.state.currentValue
      }
      this.setState({
        lastOperator: null,
        isWaitingForNewNumber: true,
        previousValue: computedResult,
        currentValue: computedResult,
      })
    } else {
      console.warn(`Функция получила неожиданное значение '${value}'`)
    }
  }

  render() {
    return <div style={{ width: '320px', font: '100 14px sans-serif', boxShadow: '0px 0px 20px 0px #aaa', margin: '0 auto' }}>
      <CalculatorDisplay value={this.state.currentValue} />
      <CalculatorKeypad onInput={this.handleInput} />
    </div>
  }
}
