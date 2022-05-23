import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'

const Create = () => {
  axios.defaults.baseURL = "http://localhost:4000/api"
  const [horseData, setHorseData] = useState({
    horseName: "",
    horseDescription: "",
    horsePrice: 0
  })

  const handleInputData = e => {
    setHorseData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }

  const SubmitData = e => {
    e.preventDefault()
    axios.post("/api/products", horseData)
      .then(() => {
        setHorseData({
          horseName: "",
          horseDescription: "",
          horsePrice: ""
        })

      })
  }




  return (
    <div>
      <Form onSubmit={SubmitData}>
        <label>Namn</label>
        <input value={horseData.horseName} name="horseName" onChange={handleInputData} placeholder='Namn' />

        <label>Beskrivning</label>
        <input value={horseData.horseDescription} name="horseDescription" onChange={handleInputData} placeholder='Beskrivning' />

        <label>Pris</label>
        <input value={horseData.horsePrice} name="horsePrice" onChange={handleInputData} placeholder='Pris' />

        <Button type='submit'>OK</Button>
      </Form>
    </div>
  )
}

export default Create