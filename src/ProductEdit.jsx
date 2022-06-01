import { useStates } from './utilities/states';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import CategorySelect from './CategorySelect';

export default function ProductDetail() {

  let s = useStates('main');
  let { id } = useParams();
  let navigate = useNavigate();

  let hästar = s.hästar.find(x => x.id === +id);
  if (!hästar) { return null; }
  let { namn, beskrivning, gård } = hästar;

  async function save() {
    // Save to db
    await hästar.save();
    // Navigate to detail page
    navigate(`/product-detail/${id}`);
  }

  return <Container className="productList">
    <Row><Col><h1>{namn}</h1></Col></Row>
    <Row><Col><p>{beskrivning}</p></Col></Row>
    <Row><Col><p>{gård} </p></Col></Row>
    <Row><Col>
      <label className="mt-3">Namn:
        <input className="form-control" {...hästar.bind('namn')} />
      </label>
    </Col></Row>
    <Row><Col>
      <label className="mt-3">Beskrivning:
        <textarea className="form-control" {...hästar.bind('beskrivning')} />
      </label>
    </Col></Row>
    <Row><Col>
      <label className="mt-3">Gård:
        <input type="number" className="form-control" {...hästar.bind('beskrivning')} />
      </label>
    </Col></Row>
    <Row className="mt-4"><Col>
      <label>
        Kategori:&nbsp;
        <CategorySelect bindTo={[product, 'Kategoriid']} />
      </label>
    </Col></Row>
    <button type="button" onClick={save} className="my-4 btn btn-primary float-end">Save</button>
  </Container>
}