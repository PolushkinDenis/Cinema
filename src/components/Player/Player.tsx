import React, {FC, useEffect} from 'react'
import { useParams } from 'react-router-dom';


const Player:FC = () => {

    const {id} = useParams()

    useEffect(() => {
		const script = document.createElement("script");
		script.src = "/Cinema/player.js";
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
    }, []);

    return(
        <div>
            <div data-kinopoisk={id} id="kinobd"></div>
        </div>
    )
}

export default Player