import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const Create = () => {

  const [horseData, setHorseData] = useState({
    categoryId: 1, // Do not hard code? Let the user choose?
    name: "",
    description: "",
    price: 0
  });

  const handleInputData = e => {
    setHorseData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }

  const SubmitData = async e => {
    e.preventDefault()
    let result = await (await fetch('/api/products', {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(horseData)
    })).json();
    console.log(result)
  }

  return (
    <div>
      <Form onSubmit={SubmitData}>

        <select></select>

        <label>Namn</label>
        <input value={horseData.name} name="name" onChange={handleInputData} placeholder='Namn' />

        <label>Beskrivning</label>
        <input value={horseData.description} name="description" onChange={handleInputData} placeholder='Beskrivning' />

        <label>Pris</label>
        <input value={horseData.price} name="price" onChange={handleInputData} placeholder='Pris' />

        <Button type='submit'>OK</Button>
      </Form>
    </div>
  )
}

export default Create