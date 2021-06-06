import React, { useReducer } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "reactstrap";

const initialState = {
  jumlah: 1,
  hargasatuan: 300000,
  hargatotal: 300000
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      };
    case "kurang":
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
      };
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
              <Button
                onClick={() => dispatch({ type: "kurang" })}
                color="danger"
              >
                -
              </Button>
              <small className="p-4">{count.jumlah}</small>
              <Button onClick={() => dispatch({ type: "tambah" })}>+</Button>
            </Col>
          </Row>
          <br />
          <Button color="success" size="lg">
            Rp. {count.hargatotal}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
