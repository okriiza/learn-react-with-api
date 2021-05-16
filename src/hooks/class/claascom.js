import React, { PureComponent } from 'react'

class Claascom extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            jumlah: 0
        }
    }
    tambahProduk = () =>{
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }

    render() {
        return (
            <div className="">
                <h1>{ this.state.jumlah}</h1>
                <button onClick={this.tambahProduk}>Tambah Produk</button>
            </div>
        )
    }
}

export default Claascom