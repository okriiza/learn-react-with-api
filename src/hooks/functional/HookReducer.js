import React, { useReducer } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "reactstrap";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "tambah":
      return state + 1;
    case "kurang":
      return state - 1;
    default:
      return state;
  }
};

export default function HookReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <Row className="mt-5">
        <Col xs="6">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeimg.com/640/480/tech"
              alt="image"
            ></CardImg>
          </Card>
        </Col>
        <Col xs="6">
          <h2>Pakaian pria macho</h2>
          <p>Harga</p>
          <h3>Rp. 300.000</h3>
          <Row>
            <Col>
              <Button onClick={() => dispatch("kurang")} color="danger">
                -
              </Button>
              <small className="p-4">{count}</small>
              <Button onClick={() => dispatch("tambah")}>+</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
