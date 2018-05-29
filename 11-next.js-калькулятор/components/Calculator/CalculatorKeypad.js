import React from 'react'

export default class extends React.Component {
  render() {
    return <div className="calculator-keypad">
      <style jsx>{`
        .calculator-keypad .calculator-input-keys {
          width: 240px;
        }
        
        .calculator-keypad .calculator-function-keys {
          display: -ms-flexbox;
          display: flex;
        }
        
        .calculator-keypad .calculator-digit-keys {
          background: #e0e0e7;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: row;
              flex-direction: row;
          -ms-flex-wrap: wrap;
              flex-wrap: wrap;
        }
        
        .calculator-keypad {
          height: 350px;
          width: 320px;
          display: -ms-flexbox;
          display: flex;
        }
        
        .calculator-keypad .calculator-function-keys .calculator-key {
          font-size: 2em;
        }
        
        .calculator-keypad .calculator-function-keys .key-multiply {
          line-height: 50px;
        }
        
        .calculator-keypad .calculator-digit-keys .calculator-key {
          font-size: 2.25em;
        }
        
        .calculator-keypad .calculator-digit-keys .key-0 {
          width: 160px;
          text-align: left;
          padding-left: 32px;
        }
        
        .calculator-keypad .calculator-digit-keys .key-dot {
          padding-top: 1em;
          font-size: 0.75em;
        }
        
        .calculator-keypad .calculator-operator-keys .calculator-key {
          color: white;
          border-right: 0;
          font-size: 3em;
        }
        
        .calculator-keypad .calculator-function-keys {
          background: -webkit-gradient(linear, left top, left bottom, from(rgba(202,202,204,1)), to(rgba(196,194,204,1)));
          background: -webkit-linear-gradient(top, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%);
          background: -o-linear-gradient(top, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%);
          background: linear-gradient(to bottom, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%);
        }
        
        .calculator-keypad .calculator-operator-keys {
          background:  -webkit-gradient(linear, left top, left bottom, from(rgba(252,156,23,1)), to(rgba(247,126,27,1)));
          background:  -webkit-linear-gradient(top, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%);
          background:  -o-linear-gradient(top, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%);
          background:  linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%);
        }

        .calculator-keypad .calculator-key {
          width: 80px;
          height: 70px;
          border-top: 1px solid #777;
          border-right: 1px solid #666;
          text-align: center;
          line-height: 70px;
        }
        
        button {
          display: block;
          background: none;
          border: none;
          padding: 0;
          font-family: inherit;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
          cursor: pointer;
          outline: none;
        
          -webkit-tap-highlight-color: rgba(0,0,0,0);
        }
        
        button:active {
          -webkit-box-shadow: inset 0px 0px 80px 0px rgba(0,0,0,0.25);
                  box-shadow: inset 0px 0px 80px 0px rgba(0,0,0,0.25);
        }
      `}</style>
      <div className="calculator-input-keys">
        <div className="calculator-function-keys">
          <button className="calculator-key" onClick={() => this.props.onInput('C')}>AC</button>
          <button className="calculator-key" onClick={() => this.props.onInput('±')}>±</button>
          <button className="calculator-key" onClick={() => this.props.onInput('%')}>%</button>
        </div>
        <div className="calculator-digit-keys">
          <button className="calculator-key" onClick={() => this.props.onInput('1')}>1</button>
          <button className="calculator-key" onClick={() => this.props.onInput('2')}>2</button>
          <button className="calculator-key" onClick={() => this.props.onInput('3')}>3</button>
          <button className="calculator-key" onClick={() => this.props.onInput('4')}>4</button>
          <button className="calculator-key" onClick={() => this.props.onInput('5')}>5</button>
          <button className="calculator-key" onClick={() => this.props.onInput('6')}>6</button>
          <button className="calculator-key" onClick={() => this.props.onInput('7')}>7</button>
          <button className="calculator-key" onClick={() => this.props.onInput('8')}>8</button>
          <button className="calculator-key" onClick={() => this.props.onInput('9')}>9</button>
          <button className="calculator-key key-0" onClick={() => this.props.onInput('0')}>0</button>
          <button className="calculator-key" onClick={() => this.props.onInput('.')}>.</button>
        </div>
      </div>
      <div className="calculator-operator-keys">
        <button className="calculator-key calculator-key-divide" onClick={() => this.props.onInput('/')}>/</button>
        <button className="calculator-key calculator-key-multiply" onClick={() => this.props.onInput('*')}>*</button>
        <button className="calculator-key calculator-key-subtract" onClick={() => this.props.onInput('-')}>-</button>
        <button className="calculator-key calculator-key-add" onClick={() => this.props.onInput('+')}>+</button>
        <button className="calculator-key calculator-key-equals" onClick={() => this.props.onInput('=')}>=</button>
      </div>
    </div>
  }
}
