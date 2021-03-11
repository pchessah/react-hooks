import React from 'react'
import { Form, Button } from 'react-bootstrap'

const months = ["January", "February", "March" , "April"]

function NewBook() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name Of Book</Form.Label>
        <Form.Control type="text" placeholder="Enter book name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Month</Form.Label>
        <Form.Control as="select">
          <option>January</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default NewBook
