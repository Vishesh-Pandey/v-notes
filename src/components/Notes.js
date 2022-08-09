import React from 'react'

function Note(props) {
    return (
        <>
            <div className="card text-bg-light mb-3">
                <div className="card-header">v Notes</div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.note}
                    </p>
                </div>
            </div>

        </>
    )
}

export default Note