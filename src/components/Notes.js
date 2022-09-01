import React from 'react'

function Note(props) {


    async function deleteNote() {
        await fetch(`https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/delete_note?username=${props.account}&title=${props.title}`, { method: 'DELETE' });
        props.fetchNotes();
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