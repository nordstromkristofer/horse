import { useStates } from "../../../utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import CategorySelect from "../CategorySelect";
import { sweFormat } from "../../../utilities/currencyFormatter";

export default function ProductDetail() {
  let s = useStates("main");
  let { id } = useParams();
  let navigate = useNavigate();

  let product = s.products.find((x) => x.id === +id);
  if (!product) {
    return null;
  }
  let { name, description, price } = product;

  async function save() {
    // Save to db
    await product.save();
    // Navigate to detail page
    navigate(`/product-detail/${id}`);
  }

  return (
    <div className="flex justify-center">
      <Container className="md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-10 m-5">
        <Row>
          <Col>
            <h2 className="text-gray-900 text-xl font-medium mb-2">
              <b>Namn: </b>
              {name}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-gray-700 text-base mb-4">
              <b>Beskrivning:</b> {description}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-gray-700 text-base mb-4">
              <b>Pris: </b>
              {sweFormat(price)}{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="form-label w-full inline-block mb-2 text-gray-700">
              Namn:
              <input
                className="form-control block w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                {...product.bind("name")}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="form-label w-full inline-block mb-2 text-gray-700">
              Beskrivning:
              <textarea
                className="form-control block w-full  px-3  py-1.5  text-base  font-normal  text-gray-700    bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                {...product.bind("description")}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="form-label w-full inline-block mb-2 text-gray-700">
              Pris:
              <input
                type="number"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                {...product.bind("price")}
              />
            </label>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <label className="form-label inline-block mb-2 text-gray-700">
              Kategorier:
              <CategorySelect bindTo={[product, "categoryId"]} />
            </label>
          </Col>
        </Row>
        <button
          type="button"
          onClick={save}
          className="px-6 py-1 my-2 bg-green-400 transition ease-in duration-200 uppercase hover:bg-green-800 hover:text-white border-2 border-gray-900 focus:outline-none"
        >
          Spara
        </button>
      </Container>
    </div>
  );
}
