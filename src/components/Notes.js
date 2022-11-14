import React from "react";
import { useState } from "react";

function Note(props) {
  const [removeNote, setRemoveNote] = useState(false);

  async function deleteNote() {
    setRemoveNote(true);
    await fetch(
      `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/delete_note?username=${props.account}&title=${props.title}`,
      { method: "DELETE" }
    );
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
            <div className="vnotes">v Notes</div>
            <div className="options">
              <button onClick={copyNote} className="btn btn-primary mx-2">
                Copy
              </button>

              <button
                className="btn btn-danger opacity-75"
                disabled={removeNote}
                onClick={deleteNote}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <textarea
              value={props.note}
              style={{ resize: "none" }}
              disabled
              rows={5}
              id="note"
              className="card-text w-100 rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
