import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarHome from './home/component/navbar';
import HeaderHome from './home/component/header';
import ProdukHome from './home/component/produk';
import ProdukDetail from './home/component/produkdetail'
import Mahasiswa from './dataapi/mahasiswa';
import Tambahmahasiswa from './dataapi/tambahmahasiswa';
import Editmahasiswa from './dataapi/editmahasiswa';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarHome />
      <switch>
        <Route exact path='/' component={HeaderHome} />
        <Route exact path='/produk' component={ProdukHome} />
        <Route exact path='/produk/:id' component={ProdukDetail} />
        <Route exact path='/mahasiswa' component={Mahasiswa} />
        <Route exact path='/mahasiswa/tambah' component={Tambahmahasiswa} />
        <Route exact path='/mahasiswa/edit' component={Editmahasiswa} />

      </switch>
    </BrowserRouter>
  );
}

export default App;