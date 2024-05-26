import axios from 'axios'
import Note from './components/Note'
import { useEffect, useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState([])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: '123123',
      date: new Date(),
      important: Math.random() > 0.5,
    }

    axios.post('http://localhost:3001/notes', noteObject).then((response) => {
      setNotes(notes.concat(response.data))
      // setNewNote('')
    })
  }

  useEffect(() => {
    axios.get('http://localhost:3001/notes').then((response) => {
      setNotes(response.data)
    })
  }, [])

  console.log('测试提交');

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <button onClick={addNote}>addd</button>
    </div>
  )
}

export default App
