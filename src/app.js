import React from "react"
import MyHeader from "./components/header"
import Image from "./components/image"
import logo from "./img/logo.png"

class App extends React.Component {
    helpText = "Help Text"

    render() {
        return (
            <div className="name">
            <MyHeader title="some title inside"></MyHeader>
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText}
            onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.helpText === "Help text!" ? "Yes" : "No"} </p>
            <Image image={logo} />
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
