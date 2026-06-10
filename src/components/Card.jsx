import { useState } from 'react'

const Card = (props) => {
    const [open, setOpen] = useState(false)

    return(
        <>
            <img src={props.image} alt={props.name} />
            {props.description && (
                <div className={open ? "description open" : "description"}>
                    <p>{props.description}</p>
                </div>
            )}
            <h3>{props.name}</h3>
            <div className="card-actions">
                {props.description && (
                    <button className="details-btn" onClick={() => setOpen(!open)}>
                        {open ? "Hide description" : "Show description"}
                    </button>
                )}
                {props.link && (
                    <a className="website-btn" href={props.link}> Visit website </a>
                )}
            </div>
        </>
    )
}
export default Card
