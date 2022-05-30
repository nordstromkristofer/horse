import { useStates } from "../../utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { empty, remove, save } from "../../utilities/shoppingCartLogic";
import { useEffect } from "react";
import { sweFormat } from "../../utilities/currencyFormatter";

export default function ShoppingCart() {
  let s = useStates("main");

  let totalSum = s.cartContents.reduce(
    (acc, row) => acc + row.quantity * row.product.price,
    0
  );

  useEffect(() => {
    // Save the cart contents (on quantity changes)
    save();
  });

  return (
    <div className="flex justify-center">
      <Container className="md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-10 m-5">
        <Row>
          <Col>
            <h1>Shopping cart 🛒</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {s.cartContents.length ? (
              <table className="table">
                <thead>
                  <tr>
                    <th className="py-5">Produkter</th>
                    <th className="cart_item_title cart_info_col py-5">
                      Antal
                    </th>
                    <th className="cart_item_title cart_info_col py-5">Pris</th>
                    <th className="cart_item_title cart_info_col py-5">Sum</th>
                  </tr>
                </thead>
                <tbody>
                  {s.cartContents.map((row, i) => (
                    <tr key={i}>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={() => remove(row.product)}
                      >
                        <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                          🗑
                        </button>
                      </td>
                      <td>{row.product.name}</td>
                      <td className="text-end">
                        <input
                          className="text-end"
                          style={{ width: 50 }}
                          type="number"
                          min={1}
                          max={100}
                          {...row.bind("quantity")}
                        />
                      </td>
                      <td className="text-end" style={{ width: 100 }}>
                        {sweFormat(row.product.price)}
                      </td>
                      <td className="text-end" style={{ width: 100 }}>
                        {sweFormat(row.quantity * row.product.price)}
                      </td>
                    </tr>
                  ))}
                  <tr className="fw-bold py-5">
                    <td>Sum</td>
                    <td colSpan={3} className="text-end">
                      {sweFormat(totalSum)}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>The cart is empty...</p>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Link className="float-end text-decoration-none" to={`/`}>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
              >
                Back to list
              </button>
            </Link>
            {s.cartContents.length ? (
              <button
                onClick={empty}
                type="button"
                className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
              >
                Empty cart
              </button>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
