import { useStates } from './utilities/states';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { scrollRestore } from './utilities/scrollBehavior';
import CategorySelect from './CategorySelect';
import { sweFormat } from './utilities/currencyFormatter';

export default function ProductList() {

  scrollRestore();

  let s = useStates('main');
  let navigate = useNavigate();

  function search(product) {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase())
      || product.description.toLowerCase().includes(searchTerm.toLowerCase());
  }

  <input className="search_input" type="text" placeholder='Search' value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />

  return <Container className="productList">
    <Row><Col><h1>Products</h1></Col></Row>
    <Row className="mb-3"><Col><CategorySelect showAllOption bindTo={[s, 'chosenCategoryId']} /></Col></Row>
    {s.products.filter(product =>
      s.chosenCategoryId === 0 /*all*/
      || s.chosenCategoryId === product.categoryId
    ).map(({ id, name, description, price }) =>
      <Row className="product" key={id} onClick={() => showDetail(id)}>
        <Card>
          <Col xxl="12">
            <h3>{name}</h3>
          </Col>
          <Col xxl="12">
            <p>{description}</p>
          </Col>
          <Col xxl="12">
            <p><b>Price:</b> {sweFormat(price)}
            </p>
          </Col>
        </Card>
      </Row>
    )}
  </Container>
}
