import React, {useState, useEffect} from 'react'
import { Table, Container, Button } from 'reactstrap';
import axios from 'axios'

const api = 'http://localhost:3001'
const Useeffect = () => {
    const[mahasiswa, setMahasiswa] = useState([])

    useEffect(() => {
        console.log("testuseeffect")
        axios.get(api + '/tampil').then(res => {
            setMahasiswa(res.data.values)
        })
    },[])

    return (
        <Container>
            <Container>
            <h2>Data Mahasiswa</h2>
            <hr />
            
            <Table>
               <thead>
                  <tr>
                     <th>Nim</th>
                     <th>nama</th>
                     <th>Jurusan</th>
                     <th>Aksi</th>
                  </tr>
               </thead>
               <tbody>
                  {mahasiswa.map(mahasiswa =>
                     <tr key={mahasiswa.id_mahasiswa}>
                        <td>{mahasiswa.nim}</td>
                        <td>{mahasiswa.nama}</td>
                        <td>{mahasiswa.jurusan}</td>
                        <td>
                           
                              <Button>edit</Button>
                           <span> </span>
                           <Button color='danger'>Hapus</Button>
                        </td>
                     </tr>
                  )}
               </tbody>
            </Table>
         </Container>
        </Container>
        
    )
}

export default Useeffect
