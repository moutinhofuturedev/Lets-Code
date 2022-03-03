import React, {Component} from 'react'

class Table extends Component {
  render() {

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>Paulo</td>
            <td>React Developer </td>
          </tr>
          <tr>
            <td>Andrei</td>
            <td>Fullstack Developer</td>
          </tr>
          <tr>
            <td>Vitinho</td>
            <td>Backend</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Frontend Developer</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table