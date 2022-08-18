import React, { useState } from 'react'

function Note(props) {


    async function deleteNote() {
        alert("You can't delete individual notes !")
    }


    return (
        <>
            <div className="col-md-6">
                <div className="card text-bg-light mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div className="vnotes">
                            v Notes
                        </div>
                        <div className="delete">
                            <button className="btn btn-info" onClick={deleteNote}>Delete</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p id='note' className="card-text">
                            {props.note}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note