import { useStates } from "../../../utilities/states";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { scrollRestore } from "../../../utilities/scrollBehavior";
import CategorySelect from "../CategorySelect";

export default function ProductList2() {
  scrollRestore();

  let s = useStates("main");
  let navigate = useNavigate();

  function showDetail(id) {
    navigate(`/product-detail2/${id}`);
  }

  return (
    <Container className=" flex justify-center ">
      <div className="w-full md:flex-row md:max-w-xl rounded-lg bg-white shadow p-10 m-5">
        <Row className="">
          <Col>
            <CategorySelect showAllOption bindTo={[s, "chosenCategoryId"]} />
          </Col>
        </Row>
        {s.products
          .filter(
            (product) =>
              s.chosenCategoryId === 0 /*all*/ ||
              s.chosenCategoryId === product.categoryId
          )
          .map(({ id, name }) => (
            <button
              aria-current="true"
              type="button"
              className="text-left my-1 px-6 py-2 border-b border-gray-300 w-full bg-[#F4EBD0] text-gray-900 cursor-pointer"
              key={id}
              onClick={() => showDetail(id)}
            >
              <Card className="">
                <Col className="">
                  <h3 className="">{name}</h3>
                </Col>
              </Card>
            </button>
          ))}
      </div>
    </Container>
  );
}
