import { useStates } from "../../../utilities/states";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { add } from "../../../utilities/shoppingCartLogic";
import { sweFormat } from "../../../utilities/currencyFormatter";

export default function ProductDetails() {
  let s = useStates("main");

  // Find the product
  let { id } = useParams();
  let product = s.products.find((x) => x.id === +id);
  if (!product) {
    return null;
  }

  let { name, description, price, categoryId } = product;

  // Find the category
  let categoryName =
    s.categories.find((category) => category.id === categoryId)?.name || "none";

  let navigate = useNavigate();

  function buy() {
    // Add the product to the cart
    add(product);
    // Show the cart
    navigate("/shopping-cart");
  }

  return (
    <Container className="productList">
      <Row>
        <Col>
          <Link to={`/`}>
            <button type="button" className="my-4 btn btn-primary">
              Back to list
            </button>
            <hr />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="mb-2">{name}</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h4>Category: {categoryName}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Price: {sweFormat(price)} </p>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <label>
            Antal
            <input type="text" name="antal" placeholder="1" />
            <button
              type="button"
              onClick={buy}
              className="mt-2 btn btn-primary float-end"
            >
              Buy
            </button>
          </label>
        </Col>
      </Row>
    </Container>
  );
}

export function ProductDetail2() {
  let s = useStates("main");
  let navigate = useNavigate();

  // Find the product
  let { id } = useParams();
  let product = s.products.find((x) => x.id === +id);
  if (!product) {
    return null;
  }

  let { name, description, price, categoryId } = product;

  // Find the category
  let categoryName =
    s.categories.find((category) => category.id === categoryId)?.name || "none";

  async function deleteBtn() {
    // Save to db
    await product.delete();
    // Navigate to detail page
    navigate(`/Backoffice/`);
  }

  return (
    <Container className="productList">
      <Row>
        <Col>
          <Link to={`/Backoffice`}>
            <button type="button" className="my-4 btn btn-primary">
              Back to list
            </button>
            <hr />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="mb-2">{name}</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h4>Category: {categoryName}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="float-end w-25 ms-3" src={`/images/horses/${id}.jpg`} />
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
          <Link to={`/product-edit/${id}`}>
            <button type="button" className="my-4 btn btn-primary float-end">
              Edit
            </button>
          </Link>
          <Link to={`/product-edit/${id}`}>
            <Button
              variant="danger"
              type="button"
              onClick={deleteBtn}
              className="my-4 btn btn-primary float-left"
            >
              Delete
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}
