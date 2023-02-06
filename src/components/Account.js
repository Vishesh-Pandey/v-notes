import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewNote from "./NewNote";
import Notes from "./Notes";
import Details from "./Details";

function Account(props) {
  const navigate = useNavigate();
  const [newNote, setNewNote] = useState([]);
  const [notes, setNotes] = useState([]);
  const [details, setDetails] = useState([
    {
      username: "Vishesh",
      notes_count: 0,
      notes_created: 0,
      notes_deleted: 0,
    },
  ]);

  useEffect(() => {
    // if user signout then redirect to login page
    if (!localStorage.getItem("username")) {
      navigate("/v-notes");
    }
    fetchDetails();
  });

  async function fetchNotes() {
    // fetching the note of user who as logged in
    // made changes in api response
    let notes_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/fetch?username=${localStorage.getItem(
      "username"
    )}`;
    let data = await fetch(notes_api);
    let parsedData = await data.json();
    let allNotes = parsedData.items;
    setNotes(allNotes); // now notes contains the notes of user who is logged in
  }

  async function fetchDetails() {
    let details_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_details/get_details?username=${localStorage.getItem(
      "username"
    )}`;
    let data = await fetch(details_api);
    let parsedData = await data.json();
    let allDetails = parsedData.items;
    setDetails(allDetails); // This contains the details related to number notes created and deleted
  }

  function createNote() {
    setNewNote([1]);
  }

  function cancel() {
    setNewNote([]);
  }

  async function saveNote(title, newNote) {
    setNewNote([]);
    let new_note_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/add?username=${localStorage.getItem(
      "username"
    )}&title=${title}&notes=${newNote}`;
    console.log(localStorage.getItem("username"));
    console.log(title);
    console.log(newNote);
    await fetch(new_note_api, { method: "POST" });
    fetchNotes();
    fetchDetails();
  }

  async function deleteAllNotes() {
    if (window.confirm("You are deleting all notes !!!")) {
      await fetch(
        `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/delete?username=${props.account}`,
        { method: "DELETE" }
      );
      fetchNotes();
      fetchDetails();
    }
  }

  async function deleteAccount() {
    alert("Are you sure you want to delete your account ?");
    await fetch(
      `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/delete_account?username=${props.account}`,
      { method: "DELETE" }
    );
    navigate("/v-notes");
  }

  return (
    <>
      <div className="container py-3 my-3">
        <Details
          account={localStorage.getItem("username")}
          details={details}
          fetchDetails={fetchDetails}
        />

        <div className="row">
          <div className="col-md-6 text-center">
            <button
              name="create-new-note"
              onClick={createNote}
              className="btn btn-success my-3"
            >
              Create New Note
            </button>
          </div>

          <div className="col-md-6 text-center">
            <button
              onClick={fetchNotes}
              name="view-all-notes"
              className="btn btn-secondary my-3"
            >
              View all notes
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {newNote.map((element) => {
              return (
                <NewNote
                  key={element}
                  user="vishesh"
                  cancelNote={cancel}
                  save={saveNote}
                />
              );
            })}
          </div>
        </div>

        <div className="row bg-secondary bg-opacity-25 rounded py-2 my-2">
          {notes.map((element, index) => {
            return (
              <Notes
                key={index}
                title={element.title}
                note={element.notes}
                account={localStorage.getItem("username")}
                fetchNotes={fetchNotes}
              />
            );
          })}
        </div>
      </div>

      <div className="container bg-danger bg-opacity-50 rounded">
        <div className="row">
          <div className="col-md-6 text-center">
            <button
              onClick={deleteAllNotes}
              className="btn btn-warning bg-opacity-25 my-3"
            >
              Delete all notes
            </button>
          </div>
          <div className="col-md-6 text-center">
            <button onClick={deleteAccount} className="btn btn-danger my-3">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
