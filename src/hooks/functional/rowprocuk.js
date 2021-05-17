import React, { useContext } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
  } from 'reactstrap';

import { CartContext } from "../../CartContext";

function Rowprocuk() {

    const {value, setValue} = useContext(CartContext)

  return (
    <Col>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeimg.com/640/480/people"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button color='success' onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Rowprocuk;
