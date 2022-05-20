import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Create = () => (
  <div>
    <Form>
      <label>Namn</label>
      <input placeholder='Namn' />

      <label>Beskrivning</label>
      <input placeholder='Beskrivning' />

      <label>Pris</label>
      <input placeholder='Pris' />

      <Button type='submit'>OK</Button>
    </Form>
  </div>
)

export default Create