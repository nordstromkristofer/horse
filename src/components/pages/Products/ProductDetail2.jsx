import { useStates } from "../../../utilities/states";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function ProductDetail() {
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
    navigate(`/product-list2/`);
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
