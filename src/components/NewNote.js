import React, { useState } from 'react'

function NewNote(props) {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    function save() {
        props.save(props.user, title, note);
    }

    function handleTitle(event) {
        setTitle(event.target.value)
    }

    function handleNote(event) {
        setNote(event.target.value)
    }

    return (
        <>
            <div className="card text-bg-light mb-3">
                <div className="card-header">Create a new Note here..</div>
                <div className="card-body">
                    <h5 className="card-title"><input type="text" value={title} onChange={handleTitle} placeholder='Write title...' className='w-75 border-0' />
                    </h5>
                    <p className="card-text">
                        <div className="form-floating">
                            <textarea
                                value={note}
                                onChange={handleNote}
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style={{ height: 100 }}
                            />
                            <label htmlFor="floatingTextarea2">Notes...</label>
                        </div>
                    </p>
                    <button onClick={save} className="btn btn-secondary">Save Note </button>
                    <button onClick={props.cancelNote} className="btn btn-secondary mx-2">Cancel </button>
                </div>
            </div>



        </>
    )
}

export default NewNote