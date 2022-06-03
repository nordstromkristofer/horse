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
    <Container className="product-edit">
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
          <button onClick={takeImage}>Ta Bild</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Välj bild</h1>
          <input type="file" onChange={imagePicker} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>{name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Price: {price} SEK</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="mt-3">
            Name:
            <input className="form-control" {...product.bind("name")} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="mt-3">
            Description:
            <textarea
              className="form-control"
              {...product.bind("description")}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="mt-3">
            Price:
            <input
              type="number"
              className="form-control"
              {...product.bind("price")}
            />
          </label>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <label>
            Category:&nbsp;
            <CategorySelect bindTo={[product, "categoryId"]} />
          </label>
        </Col>
      </Row>
      <button
        type="button"
        onClick={save}
        className="my-4 btn btn-primary float-end"
      >
        Save
      </button>
    </Container>
  );
}
