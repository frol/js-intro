export default class extends React.Component {
  state = { counter: 0 }

  handleOnClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return <>
      <h1>Привет Мир!</h1>
      <div>{`Текущий счёт: ${this.state.counter}`}</div>
      <button onClick={this.handleOnClick}>+</button>
    </>
  }
}
