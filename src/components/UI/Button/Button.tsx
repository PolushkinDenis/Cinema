import React, {FC} from "react";
import './Button.scss'

interface IButton {
    title: string
}

const Button: FC<IButton> = ({title}) => {

    return (
        <button className="sliding-button">{title}</button>
    )
}

export default Button