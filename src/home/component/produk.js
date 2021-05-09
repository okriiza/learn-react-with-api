import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ProdukList from './produklist';

const ProdukHome = (props) => {
   return (
      <Container>
         <Row className='mt-4'>
            <Col sm="4">
               <ProdukList id="1" judul="Belajar API" tanggal="20/04/2021" />
            </Col>
            <Col sm="4">
               <ProdukList id="2" judul="Belajar REST API" tanggal="21/04/2021" />
            </Col>
            <Col sm="4">
               <ProdukList id="3" judul="Belajar RESTFull API" tanggal="22/04/2021" />
            </Col>
         </Row>
      </Container>
   );
};

export default ProdukHome;