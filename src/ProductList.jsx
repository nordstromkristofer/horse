import { useStates } from './utilities/states';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { scrollRestore } from './utilities/scrollBehavior';
import CategorySelect from './CategorySelect';


export default function ProductList() {

  scrollRestore();

  let s = useStates('main');
  let navigate = useNavigate();

  function showDetail(id) {
    navigate(`/product-detail/${id}`);
  }

  return <Container className="productList">
    <Row><Col><h1>Hästar</h1></Col></Row>
    <Row className="mb-3"><Col><CategorySelect showAllOption bindTo={[s, 'kategoriid']} /></Col></Row>
    {s.hästar.filter(hästar =>
      s.kategoriid === 0 /*all*/
      || s.kategoriid === hästar.ckategoriid
    ).map(({ id, namn, beskrivning, gård }) =>
      <Row className="hästar" key={id} onClick={() => showDetail(id)}>
        <Card>
          <Col xxl="12">
            <h3>{namn}</h3>
          </Col>
          <Col xxl="12">
            <p>{beskrivning}</p>
          </Col>
          <Col xxl="12">
            <p><b>Gård:</b> {gård}
            </p>
          </Col>
        </Card>
      </Row>
    )}
  </Container>
}
