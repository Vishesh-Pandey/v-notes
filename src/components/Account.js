import React, { useState } from 'react'
import NewNote from './NewNote';
import Notes from './Notes';

function Account(props) {

    const [newNote, setNewNote] = useState([]);
    const [notes, setNotes] = useState([])
    const [createSave, setCreateSave] = useState("Create new note")
    const [user, setUser] = useState(props.account)

    async function fetchNotes() {
        let notes_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/fetch`
        let data = await fetch(notes_api)
        let parsedData = await data.json()
        let allNotes = parsedData.items
        let userNotes = []
        allNotes.map((element) => {
            if (element.username === user) {
                userNotes.push(element)
            }
            setNotes(userNotes)
        })
    }

    function createNote() {
        setNewNote([1])
    }

    function cancel() {
        setNewNote([])
    }

    async function saveNote(user, title, newNote) {
        setNewNote([])
        let new_note_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/add?username=${props.account}&title=${title}&notes=${newNote}`
        await fetch(new_note_api, { method: 'POST' })
        alert("Your new note is saved!")

    }

    async function deleteAllNotes() {
        if (window.confirm("You are deleting all notes !!!")) {
            await fetch(`https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/delete?username=${props.account}`, { method: 'DELETE' });
            fetchNotes();
        }


    }



    return (
        <>
            <div className="container bg-info py-5 my-3 rounded">
                <div className="row">
                    <div className="col">
                        <h1>Welcome {user}</h1>
                    </div>
                </div>
                <div className="row">

                    {
                        notes.map((element) => {
                            return <Notes key={element.notes} title={element.title} note={element.notes} fetchNotes={fetchNotes} />
                        })
                    }


                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <button onClick={fetchNotes} className="btn btn-secondary my-3">View all notes</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <button onClick={deleteAllNotes} className="btn btn-danger my-3">Delete all notes</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            newNote.map((element) => {
                                return <NewNote key={element} user="vishesh" cancelNote={cancel} save={saveNote} />
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button onClick={createNote} className="btn btn-secondary my-3">{createSave}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account