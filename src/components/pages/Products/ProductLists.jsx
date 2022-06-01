import { useStates } from "../../../utilities/states";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { scrollRestore } from "../../../utilities/scrollBehavior";
import CategorySelect from "../CategorySelect";
import { sweFormat } from "../../../utilities/currencyFormatter";

export default function ProductList() {
  scrollRestore();

  let s = useStates("main");
  let navigate = useNavigate();

  function showDetail(id) {
    navigate(`/product-detail/${id}`);
  }

  function missingImage(event) {}

  return (
    <Container className="pt-40 ">
      <div className="flex justify-center">
        <Row>
          <Col>
            <h1 className="text-xl font-bold mb-3">Products</h1>
          </Col>
        </Row>
        <Row className="mb-3 ml-3">
          <Col>
            <CategorySelect showAllOption bindTo={[s, "chosenCategoryId"]} />
          </Col>
        </Row>
      </div>
      <div className="">
        {s.products
          .filter(
            (product) =>
              s.chosenCategoryId === 0 /* all */ ||
              s.chosenCategoryId === product.categoryId
          )
          .map(({ id, name, description, price }) => (
            <Row
              className="flex flex-col flex-wrap justify-around h-100 justify-items-stretch p-5 w-2/7"
              key={id}
              onClick={() => showDetail(id)}
            >
              <Card className="shadow-lg max-w-sm p-10 bg-gray-100 rounded-lg dark:border-gray-700 hover:bg-gray-300 transition-color duration-200 transform transition-all hover:scale-110">
                <Col className="justify w-1/7" xxl="12">
                  <img
                    onError={missingImage}
                    className="rounded-t-lg"
                    src={`/images/horses/${id}.jpg`}
                  />
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {name}
                  </h5>
                </Col>
                <Col className="text-gray-700 text-base mb-4" xxl="12">
                  <p>{description.slice(0, 50)} ...</p>
                </Col>
                <Col xxl="12">
                  <p>
                    <b>Pris:</b> {sweFormat(price)}
                  </p>
                </Col>
                <Col>
                  <button className="inline-block text-xs leading-tight uppercase hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold m-2 py-2 px-4 border border-gray-400 rounded shadow">
                    Fler detaljer
                  </button>
                </Col>
              </Card>
            </Row>
          ))}
      </div>
    </Container>
  );
}
