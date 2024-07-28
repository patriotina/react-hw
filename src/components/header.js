import React from "react"

class MyHeader extends React.Component {
    render() {
        return (
            <header className="header">{this.props.title}</header>
        )
    }
}

export default MyHeader