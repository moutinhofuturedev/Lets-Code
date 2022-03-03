import React from "react"
import Table from "./Table"

class App3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', age: '', city: ''} /* state 'estado' mostra o estado atual do valor.Neste caso o estado atual é vazio  */
  }

  changeName = (evt) => {
    this.setState({ name: evt.target.value }) /* 'setState' um método para mudar um estado 'state' */
  }

  setAge = (evt) => {
    this.setState({ age: evt.target.value })
  }

  getCity = (evt) => {
    this.setState({ city: evt.target.value })
  }

  render() {

    return(
      <div className='third_box'>
        <label>Name </label>
        {/* 'onChange' é o evento de mudança,vindo do método criado com setState */}
        <input type="text" value={this.state.name} onChange={this.changeName} />

        <label >Age </label>
        <input type="number" value={this.state.age} onChange={this.setAge} /> 

        <label >City </label>
        <input type="text" value={this.state.city}  onChange={this.getCity} />

        <h2>My name is {this.state.name} </h2>
        <h2>I´m ' {this.state.age} ' years old!</h2>
        <h2>I live in {this.state.city} </h2>

        <div className='table'>
          <Table/> {/* componente importado do arquivo Table.jsx */}
        </div>
      </div>
    )
  }
}

export default App3