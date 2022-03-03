import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {seconds : 0}
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  } 

  render() {
    return ( // dentro da renderização, o retorno é sempre encapsulado por parênteses '()'
      <div>
        <p>My first paragraph REACT</p>
        <p>My second paragraph REACT</p>

        <div>
          <h3>I tired of paragraphs</h3>
        </div>     

        <h1> {new Date().toLocaleDateString('pt-BR')} </h1>
        <h2> {new Date().toLocaleTimeString('pt-BR')} </h2>

        <div>
          <h3>Seconds Live: {this.state.seconds} </h3>
        </div>

      </div>
    ) 
  }
}

export default App

