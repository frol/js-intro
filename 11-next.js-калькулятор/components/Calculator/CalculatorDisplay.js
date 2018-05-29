import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div style={{ color: 'white', backgroundColor: 'black', margin: 0, padding: '0 30px', textAlign: 'right', fontSize: '6em' }}>
        {this.props.value}
      </div>
    )
  }
}
