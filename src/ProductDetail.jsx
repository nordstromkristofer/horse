import { useStates } from './utilities/states';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams, Link, useNavigate } from "react-router-dom";
import { add } from './utilities/shoppingCartLogic';

export default function ProductDetail() {

  let s = useStates('main');

  // Find the product
  let { id } = useParams();
  let hästar = s.hästar.find(x => x.id === +id);
  if (!hästar) { return null; }




  // Find the category
  let kategorinamn = s.kategorier.find(category =>
    kategorier.id === kategoriid
  )?.namn || 'none';

  let navigate = useNavigate();

  function buy() {
    // Add the product to the cart
    add(product);
    // Show the cart
    navigate('/shopping-cart');
  }

  return <Container className="productList">
    <Row><Col>
      <Link to={`/`}>
        <button type="button" className="my-4 btn btn-primary">Back to list</button>
        <hr />
      </Link>
    </Col></Row>
    <Row><Col><h1 className="mb-2">{namn}</h1></Col></Row>
    <Row className="mb-3"><Col><h4>Kategori: {kategorinamn}</h4></Col></Row>
    <Row><Col><p>{besrivning}</p></Col></Row>
    <Row><Col><p>Gård: {gård} </p></Col></Row>
    <Row><Col>
      <Link to={`/product-edit/${id}`}>
        <button type="button" className="my-4 btn btn-primary float-end">Edit</button>
      </Link>
    </Col></Row>
    <Row><Col>

      <label>
        Antal
        <input type="text" namn="antal" placeholder='1' />
        <button type="button" onClick={buy} className="mt-2 btn btn-primary float-end">Buy</button>
      </label>

    </Col></Row>
  </Container>
}