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
    navigate(`/Backoffice/`);
  }

  return (
    <div className="flex justify-center">
      <Container className="md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-10 m-5">
        <Row>
          <Col className="p-6 flex flex-col justify-start">
            <Link to={`/Backoffice`}>
              <button
                type="button"
                className="my-4 btn p-1 btn-primary hover:text-gray-200 hover:bg-gray-500 hover:p-1 hover:rounded"
              >
                Back to list
              </button>
              <hr />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="text-gray-900 text-xl font-medium mb-2">{name}</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h4>Category: {categoryName}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-gray-700 text-base mb-4">{description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-gray-700 text-base mb-4">Price: {price} SEK</p>
          </Col>
        </Row>
        <Row>
          <Col
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            <Link to={`/product-edit/${id}`}>
              <button
                type="button"
                className="rounded-l inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase hover:bg-yellow-700 focus:bg-yellow-700 focus:outline-none focus:ring-0 active:bg-yellow-800 transition duration-150 ease-in-out"
              >
                Edit
              </button>
            </Link>
            <Link to={`/product-edit/${id}`}>
              <Button
                variant="danger"
                type="button"
                onClick={deleteBtn}
                className="rounded-r inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
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
    </div>
  );
}
