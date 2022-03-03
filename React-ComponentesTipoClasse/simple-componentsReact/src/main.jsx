import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// import App2 from './components/App2'
// import App3 from './components/App3'

ReactDOM.render(
  <React.StrictMode>
    <App/> { /* isso é a tag do componente App */ }
  </React.StrictMode>, 
  document.getElementById('first_root')
)

// ReactDOM.render( 
//   <React.StrictMode>
//     <App2 title='One Title'> {/* a vantagem de usar props é que torna o componente reutilizável */}
//       Hello,my name is Paulo Vitor 
//     </App2> { /* isso é a tag do componente App2 */ }

//     <App2 title='Second Title'> {/* componente reutilizado */}
//       Hello Paulo,nice to meet you
//     </App2>

//     <App2 title='Third Title'> {/* componente reutilizado */}
//       Nice to meet you too!
//     </App2>

//     <App2 title='Finish'/> {/* componente reutilizado */}
//   </React.StrictMode>,
//   document.getElementById('second_root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <App3/>
//   </React.StrictMode>,
//   document.getElementById('third_root')
// )













