import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

const Create = () => {
  const [horseData, setHorseData] = useState({
    categoryId: 1, // Do not hard code? Let the user choose?
    name: "",
    description: "",
    price: 0,
  });

  const handleInputData = (e) => {
    setHorseData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    let result = await (
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(horseData),
      })
    ).json();
    console.log(result);
    window.location.reload(false);
  };

  const [catState, setCatState] = useState("");
  console.log(horseData.categoryId);

  return (
    <div className="flex justify-center">
      <Form
        onSubmit={SubmitData}
        className="w-full md:flex-row md:max-w-xl rounded-lg bg-white shadow p-10 m-5"
      >
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700 text-xl">
            Lägg till ny produkt:
          </label>
          <p>Namn:</p>
          <input
            className="form-control block  w-3/4  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            value={horseData.name}
            name="name"
            onChange={handleInputData}
            placeholder="Namn"
          />
        </div>
        <p>Beskrivning:</p>
        <input
          className="form-control mb-4 block  w-3/4  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out    m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={horseData.description}
          name="description"
          onChange={handleInputData}
          placeholder="Beskrivning"
        />
        <p>Pris:</p>
        <input
          className="form-control mb-4 block  w-3/4  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out    m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="number"
          value={horseData.price}
          name="price"
          onChange={handleInputData}
          placeholder="Pris"
        />
        <Row>
          <select
            className="catSelect"
            onChange={(e) => {
              const selectedCat = e.target.value;
              setCatState(selectedCat);
              horseData.categoryId = selectedCat;
            }}
          >
            <option value={1}>Ponny</option>
            <option value={2}>Travhäst</option>
            <option value={3}>Islandshäst</option>
          </select>
        </Row>
        <Button
          type="submit"
          className="inline-block w-3/4 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Lägg till
        </Button>
      </Form>
    </div>
  );
};

export default Create;
