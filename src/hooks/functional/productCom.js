import React from 'react'
import { Container, Row } from 'reactstrap'
import Rowprocuk from './rowprocuk'

function ProductCom() {
    return (
        <div className="">
            <Container>
                <h1>Produk</h1>
                <hr />
                <Row>
                    <Rowprocuk/>
                    <Rowprocuk/>
                    <Rowprocuk/>
                </Row>
            </Container>
        </div>
    )
}

export default ProductCom
