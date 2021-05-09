import React, { PureComponent } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap'

const api = 'http://localhost:3001'

class Tambahmahasiswa extends PureComponent {
   constructor(props) {
      super(props)

      this.state = {
         nim: '',
         nama: '',
         jurusan: '',
         response: '',
         display: 'none'
      }
   }
   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }
   addmahasiswa = () => {
      axios.post(api + '/tambah', {
         nim: this.state.nim,
         nama: this.state.nama,
         jurusan: this.state.jurusan
      }).then(json => {
         if (json.data.status === 200) {
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
            <h4>Form Tambah Mahasiswa</h4>
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
               <Button type="button" onClick={this.addmahasiswa}>Submit</Button>
            </Form>
         </Container>
      )
   }
}

export default Tambahmahasiswa