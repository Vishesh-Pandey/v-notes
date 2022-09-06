import React, { useState } from 'react'
import NewNote from './NewNote';
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';

function Account(props) {

    const [newNote, setNewNote] = useState([]);
    const [notes, setNotes] = useState([])
    const navigate = useNavigate();

    async function fetchNotes() {
        let notes_api = `https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/fetch`
        let data = await fetch(notes_api)
        let parsedData = await data.json()
        let allNotes = parsedData.items
        let userNotes = []
        console.log(allNotes)
        allNotes.map((element) => {
            if (element.username === props.account) {
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
        fetchNotes();

    }

    async function deleteAllNotes() {
        if (window.confirm("You are deleting all notes !!!")) {
            await fetch(`https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/delete?username=${props.account}`, { method: 'DELETE' });
            fetchNotes();
        }
    }

    async function deleteAccount() {
        alert("Are you sure you want to delete your account ?")
        await fetch(`https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/delete_account?username=${props.account}`, { method: 'DELETE' })
        navigate('/v-notes')
    }

    return (
        <>
            <div className="container py-3 my-3">

                <div className="row bg-secondary bg-opacity-25 rounded py-2">
                    <div className="col text-center">
                        <h1>Welcome {props.account}</h1>
                    </div>
                </div>

                <div className="row bg-secondary bg-opacity-25 rounded py-2 my-2">

                    {
                        notes.map((element) => {
                            return <Notes key={element.notes} title={element.title} note={element.notes} account={props.account} fetchNotes={fetchNotes} />
                        })
                    }


                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <button onClick={fetchNotes} className="btn btn-secondary my-3">View all notes</button>
                    </div>

                    <div className="col-md-6 text-center">
                        <button onClick={createNote} className="btn btn-success my-3">Create New Note</button>
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

            </div>

            <div className="container bg-danger bg-opacity-50 rounded">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <button onClick={deleteAllNotes} className="btn btn-warning bg-opacity-25 my-3">Delete all notes</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <button onClick={deleteAccount} className="btn btn-danger my-3">Delete Account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account