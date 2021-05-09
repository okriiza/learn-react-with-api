import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'

import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap'
import { Link } from 'react-router-dom';
const api = 'http://localhost:3001'

class Editmahasiswa extends PureComponent {
   constructor(props) {
      super(props)

      this.state = {
         id_mahasiswa: this.props.location.state.id_mahasiswa,
         nim: this.props.location.state.nim,
         nama: this.props.location.state.nama,
         jurusan: this.props.location.state.jurusan,
         response: '',
         display: 'none'
      }
   }
   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }
   ubahMahasiswa = (idmahasiswa) => {
      const data = qs.stringify({
         id_mahasiswa: idmahasiswa,
         nim: this.state.nim,
         nama: this.state.nama,
         jurusan: this.state.jurusan
      })
      axios.put(api + '/ubah', data)
         .then(json => {
            if (json === 200) {
               this.setState({
                  response: json.data.values,
                  display: 'block'
               })
            } else {
               this.setState({
                  response: json.data.values,
                  display: 'block'
               })
            }
         })
   }

   render() {
      return (
         <Container>
            <h4>Form edit Mahasiswa</h4>
            <Alert color="success" style={{ display: this.state.display }}>
               {this.state.response}
            </Alert>
            <Form>
               <FormGroup>
                  <Label for="nim">Nim</Label>
                  <Input type="text" name="nim" id="nim" value={this.state.nim} onChange={this.handleChange} placeholder="masukan nim" />
               </FormGroup>
               <FormGroup>
                  <Label for="nama">Nama</Label>
                  <Input type="text" name="nama" id="nama" value={this.state.nama} onChange={this.handleChange} placeholder="masukan nama" />
               </FormGroup>
               <FormGroup>
                  <Label for="nama">Jurusan</Label>
                  <Input type="text" name="jurusan" id="jurusan" value={this.state.jurusan} onChange={this.handleChange} placeholder="masukan nama" />
               </FormGroup>
               <Button type="button" onClick={() => this.ubahMahasiswa(this.state.id_mahasiswa)}>Update</Button>
            </Form>
         </Container>
      )
   }
}

export default Editmahasiswa