import React, {useEffect, useState} from "react"


const Button = (props) => {
    const [click, setClick] = useState(0)
    console.log(click)

    useEffect(() => {
        document.title = `Вы нажали  ${click}`
    })

    return (
        <button onClick={() => setClick(click+1)}>
            {props.text} {click}
        </button>
    )
}

Button.defaultProps = {
    text: "КнопЬ"
}

export default Button