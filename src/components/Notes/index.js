// Write your code here

import { useEffect, useState } from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import Card from '../NoteItem/index'


const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

 /*  Getting all the localStorage notes items */
  const [notes,setNotes]=useState(prev=> {
    const storedItems=localStorage.getItem('Notes')
    return storedItems?JSON.parse(storedItems):[]
  })

  /* Adding New Note */
  const addItem = e => {
    e.preventDefault()
    const dataFromInput = {
      id: uuidv4(),
      title,
      description,
    }
    setNotes([...notes,dataFromInput])
    setDescription('')
    setTitle('')
  }

  /* storing the new note into the localstorage everytime */
  useEffect(()=> {
    localStorage.setItem('Notes',JSON.stringify(notes))
  },[notes])

  return (
    <div className='NotesContainer'>
      <h1 className='Title'>Notes</h1>
      <form className='NotesDataContainer'>
        <input className='Input'
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input className='Input'
          type="text"
          placeholder="Take a Note..."
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div className='ButtonDiv'>
          <button className='Button' type="submit" onClick={addItem}>
            Add
          </button>
        </div>
      </form>
      {notes.length>0 ? (
        <ul className='NotesItems'>
          { notes.map(eachItem => {
            return <Card key={eachItem.id} title={eachItem.title} description={eachItem.description} />
          })}
        </ul>
      ) : (
        <div className='NoNotesItems'>
          <div className='NoNotesItemsContent'>
            <img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
              width="100px"
            />
            <h1>No Notes Yet</h1>
            <p>Notes you add will appear here</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notes