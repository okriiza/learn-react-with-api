import React, { useContext } from 'react'
import { Button, Container, Jumbotron } from 'reactstrap'
import { keranjangContext } from '../../App'

export default function Tagihan() {
  const countContex = useContext(keranjangContext)

  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">Tagihan</h1>
        <p className="lead">({countContex.keranjangState.jumlah}x) Pakaian Pria Macho</p>
        <hr className=""/>
        <p>Harga Total Rp. {countContex.keranjangState.hargatotal}</p>
        <p className="lead">
          <Button color="primary">Lanjutkan Pembayaran</Button>
        </p>
      </Jumbotron>
    </Container>
  )
}
