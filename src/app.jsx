import React from 'react'
import { render } from 'react-dom'

class Home extends React.Component {
    render() {
        return (
            <p>Hello react!</p>
        )
    }
}
render(
    <Home />, document.getElementById('root')
)