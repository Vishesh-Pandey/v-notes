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
                        <div className="options">

                            <svg data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop" className='mx-3' width={"30px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>


                            <button className="btn btn-danger opacity-75" onClick={deleteNote}>Delete</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p id='note' className="card-text">
                            {props.note}
                        </p>
                    </div>
                </div>

                <>
                    {/* Button trigger modal */}

                    {/* Modal */}
                    <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">
                                        Edit Note
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body"> Coming Soon...</div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Confirm Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </div>
        </>
    )
}

export default Note