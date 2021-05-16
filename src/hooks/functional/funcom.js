import React, {useState} from 'react'
import TampilCom from './TampilCom'
const Funcom = () => {
    const [jumlah, tambahJumlah] = useState(0)
    // login
    const [dataLogin, setDataLogin] = useState({username:'firda', token:'123abcd', isLogin:false})
    //sudah login apa belum

    let tampil;
    if(dataLogin.isLogin){
        tampil = <TampilCom 
        username = {dataLogin.username} 
        fungsi = {tambahJumlah.bind(this)} 
        jumlah = {jumlah}/>
    }else{
        tampil = <TampilCom username="Maaf anda belum login" disabled= {true}/>
    }
    return (
        <div className="">
            {tampil}
        </div>
    )
}

export default Funcom
