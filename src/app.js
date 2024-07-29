import React from "react"
import Header from "./components/header"
import Image from "./components/image"
import logo from "./img/logo.png"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "Help text!",
            userData: ""
        }
        this.inputClick = this.inputClick.bind(this)
    }

    componentDidUpdate(prevProp) {
        if (this.state.helpText !== "Help")
            console.log("Some from component update") 
    }

    render() {
        return (
            <div className="name">
            <Header title="some title inside"></Header>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText}
            onChange={event => this.setState({userData: event.target.value})}
            onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.state.helpText === "Help text!" ? "Yes" : "No"} </p>
            <Image image={logo} />
            </div>
        )
    }

    inputClick() {
        this.setState({helpText: "Changed"})
        console.log("Click-clack")
    }
    mouseOver() {
        console.log("Mouse inside")
    }
}

export default App
