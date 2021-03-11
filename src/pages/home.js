import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function Home() {
  const [books, setBooks] = useState([
    {
      id: 1,
      month: 'January',
      name: 'The Monk',
      author: 'Rob Sharma',
      done: true,
    },
    {
      id: 2,
      month: 'February',
      name: 'Cant hurt me',
      author: 'Dave Goggins',
      done: true,
    },
    {
      id: 3,
      month: 'March',
      name: 'Utengano',
      author: 'Kazija Mwanamke',
      done: false,
    },
    {
      id: 4,
      month: 'April',
      name: 'Harry Porter',
      author: 'Leon Oswald',
      done: false,
    },
  ])

 const addNewBook = (e) => {
     

  }
  return (
    <div className="books-table">
        <div>
            <button>Add New Book</button>
        </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Month</th>
            <th>Book</th>
            <th>Author</th>
            <th>Done?</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr key={i}>
              <td>{book.name}</td>
              <td>{book.month}</td>
              <td>{book.author}</td>
              <td>{book.done === true ? 'Yes' : 'No'}</td>
              <td>
                <button>{book.done === true ? "Nice" : "Finish book"}</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Home
