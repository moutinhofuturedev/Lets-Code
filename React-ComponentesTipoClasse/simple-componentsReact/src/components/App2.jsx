import React from 'react'

class App2 extends React.Component {
    constructor(props) {
        super(props) 
    }
    render() {
        return (
            <div className='box'>
                <div><em> {this.props.title} </em></div>
                <div><em> {this.props.children} </em></div>
            </div>
        )
    }
}

export default App2