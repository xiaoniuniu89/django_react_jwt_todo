import React from 'react'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
    let [notes, setNotes] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(() => {

        getNotes()

    }, [])

    let getNotes = async() => {
        const response = await fetch('http://127.0.0.1:8000/api/notes/', {
            method: 'GET',
            headers:{
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        
        let data = await response.json()
        if(response.status === 200){
            setNotes(data)
        } else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }
  return (
    <div>
        <p>You are logged into the home page!</p>

        <ul>
            {notes && notes.map(note => (
                <li key={note.id}>{note.body}</li>
            ))}
        </ul>
    </div>
  )
}

export default HomePage