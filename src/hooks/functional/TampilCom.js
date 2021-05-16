import React from 'react'

function TampilCom(props) {
    return (
        <div className="">
            <p>hallo, {props.username}</p>
            <h1>{props.jumlah}</h1>
            <button onClick={()=>props.fungsi(props.jumlah+1)} disabled={props.disabled}>Tambah</button>
        </div>
    )
}

export default TampilCom
