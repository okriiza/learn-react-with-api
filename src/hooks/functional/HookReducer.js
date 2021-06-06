import React, { useContext } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "reactstrap";
import {NavLink} from "react-router-dom"
import { keranjangContext } from "../../App";

export default function HookReducer() {

  const countContex = useContext(keranjangContext)

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
          <h3>Rp. {countContex.keranjangState.hargatotal }</h3>
          <Row>
            <Col>
              <Button
                onClick={() => countContex.keranjangDispatch({ type: "kurang" })}
                color="danger"
              >
                -
              </Button>
              <small className="p-4">{countContex.keranjangState.jumlah}</small>
              <Button onClick={() => countContex.keranjangDispatch({ type: "tambah" })}>+</Button>
            </Col>
          </Row>
          <br />
          <Button color="success" size="lg">
            Rp. {countContex.keranjangState.hargatotal}
          </Button>
          <hr />
          <NavLink to="/tagihan">Tagihan Belanja</NavLink>
        </Col>
      </Row>
    </Container>
  );
}
