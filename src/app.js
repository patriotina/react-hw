import React from "react"
import Header from "./components/header"

class App extends React.Component {
    helpText = "Help Text"

    render() {
        return (
            <div className="name">
            <Header title="some title inside"></Header>
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText}
            onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.helpText === "Help text!" ? "Yes" : "No"} </p>
            </div>
        )
    }

    inputClick() {
        console.log("Click-clack")
    }
    mouseOver() {
        console.log("Mouse inside")
    }
}

export default App
