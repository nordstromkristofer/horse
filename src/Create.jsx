import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Create() {

  const [horseName, setHorseName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const postData = () => {
    console.log(horseName)
  }

  return (
    <div>
      <Form>
        <label>Namn</label>
        <input placeholder='Namn' onChange={(e) => setHorseName(e.target.value)} />

        <label>Beskrivning</label>
        <input placeholder='Beskrivning' />

        <label>Pris</label>
        <input placeholder='Pris' />

        <Button onClick={postData} type='submit'>OK</Button>
      </Form>
    </div>
  )
}