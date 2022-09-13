import React from 'react'

function Note(props) {


    async function deleteNote() {
        await fetch(`https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/delete_note?username=${props.account}&title=${props.title}`, { method: 'DELETE' });
        props.fetchNotes();
    }

    function copyNote() {
        navigator.clipboard.writeText(props.note);
    }

    return (
        <>
            <div className="col-md-6">
                <div className="card text-bg-light mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div className="vnotes">
                            v Notes
                        </div>
                        <div className="options">

                            <button onClick={copyNote} className='btn btn-primary mx-2'>Copy</button>

                            <button className="btn btn-danger opacity-75" onClick={deleteNote}>Delete</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <textarea style={{ resize: "none" }} disabled rows={5} id='note' className="card-text w-100 rounded">
                            {props.note}
                        </textarea>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Note