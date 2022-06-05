import { useStates } from "../../../utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import CategorySelect from "../CategorySelect";
import { sweFormat } from "../../../utilities/currencyFormatter";
import {
  initializeMedia,
  captureImage,
  uploadPicture,
  imagePicker,
} from "../../../utilities/imageCapture";
import { useState } from "react";

export default function ProductDetail() {
  let s = useStates("main");
  let { id } = useParams();
  let navigate = useNavigate();

  //lokalt state fÃ¶r denna komponent
  let l = useStates({
    captureMode: true,
  });

  //startar kameran
  useState(() => {
    initializeMedia();
  }, []);

  //find product based on ID
  let product = s.products.find((x) => x.id === +id);
  if (!product) {
    return null;
  }
  let { name, description, price } = product;

  async function save() {
    // Save to db
    await product.save();
    // ladda up bild
    await uploadPicture(id);
    // Navigate to detail page
    navigate(`/product-detail2/${id}`);
    window.location.reload(false);
  }

  function takeImage() {
    captureImage();
    l.captureMode = false;
  }

  return (
    <Container className="border rounded-md px-6 py-10 max-w-2xl mx-auto">
      <Row>
        <Col>
          <video
            style={{ display: l.captureMode ? "block" : "none" }}
            autoPlay
          ></video>
          <canvas
            width="320px"
            height="240px"
            style={{ display: !l.captureMode ? "block" : "none" }}
          ></canvas>
          <button
            onClick={takeImage}
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Ta Bild
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Välj bild</h1>
          <input
            type="file"
            className="my-4  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onChange={imagePicker}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="uppercase text-center">{name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-justify">
            <p>{description}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Pris: {price} SEK</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="">
            Redigera namnet:
            <input
              className="form-control my-2 border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
              {...product.bind("name")}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="">
            Redigera beskrivningen:
            <textarea
              rows={4}
              className="form-control my-2 resize-none border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
              {...product.bind("description")}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="my-2">
            Redigera priset:
            <input
              className="form-control my-2 border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
              {...product.bind("price")}
            />
          </label>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <label>
            Kategori:&nbsp;
            <CategorySelect bindTo={[product, "categoryId"]} />
          </label>
        </Col>
      </Row>
      <button
        onClick={save}
        className="w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      >
        Spara
      </button>
    </Container>
  );
}
