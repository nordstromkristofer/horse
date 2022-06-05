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
    <div className="flex justify-center">
      <Container className="md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-10 m-5">
        <Row>
          <Col className="p-6 flex flex-col justify-start">
            <Link to={`/product-list`}>
              <button
                type="button"
                className="my-4 btn p-1 btn-primary hover:text-gray-200 hover:bg-gray-500 hover:p-1 hover:rounded"
              >
                Tillbaka till listan
              </button>
              <hr />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={`/images/horses/${id}.jpg`}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="text-gray-900 text-xl font-medium mb-2">{name}</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h4>Kategori: {categoryName}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-gray-700 text-base mb-4">{description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-gray-700 text-base mb-4">
              Pris: {sweFormat(price)}{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <label className="form-label inline-block mb-2 text-gray-700">
              Antal
              <input
                className="
                  form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded  transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                name="antal"
                placeholder="1"
              />
              <button
                type="button"
                onClick={buy}
                className="px-6 py-2 my-2 transition ease-in duration-200 uppercase hover:bg-green-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              >
                Köp
              </button>
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
