import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarHome from "./home/component/navbar";
import HeaderHome from "./home/component/header";
import ProdukHome from "./home/component/produk";
import ProdukDetail from "./home/component/produkdetail";
import Mahasiswa from "./dataapi/mahasiswa";
import Tambahmahasiswa from "./dataapi/tambahmahasiswa";
import Editmahasiswa from "./dataapi/editmahasiswa";
import Claascom from "./hooks/class/claascom";
import Funcom from "./hooks/functional/funcom";
import Useeffect from "./hooks/functional/useeffect";
import { CartContext } from "./CartContext";
import { createContext, useReducer, useState } from "react";
import ProductCom from "./hooks/functional/productCom";
import HookReducer from "./hooks/functional/HookReducer";
import Tagihan from "./hooks/functional/Tagihan";

export const keranjangContext = createContext()

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

const App = () => {
  const [value, setValue] = useState(1);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarHome />
        <keranjangContext.Provider value={{ keranjangState:count, keranjangDispatch: dispatch }}>
        <switch>
          <Route exact path="/" component={HeaderHome} />
          <Route exact path="/produk" component={ProdukHome} />
          <Route exact path="/produk/:id" component={ProdukDetail} />
          <Route exact path="/mahasiswa" component={Mahasiswa} />
          <Route exact path="/mahasiswa/tambah" component={Tambahmahasiswa} />
          <Route exact path="/mahasiswa/edit" component={Editmahasiswa} />
          <Route exact path="/kelas" component={Claascom} />
          <Route exact path="/hooks" component={Funcom} />
          <Route exact path="/useeffect" component={Useeffect} />
          <Route exact path="/barang" component={ProductCom} />
          <Route exact path="/reducer" component={HookReducer} />
          <Route exact path="/tagihan" component={Tagihan} />
        </switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
