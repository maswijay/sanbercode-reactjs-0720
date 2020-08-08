import React, {useContext, useEffect} from 'react'
import axios from 'axios'
import {BuahContext} from './BuahContext'
import BuahAction from './BuahAction'

const BuahList = () =>{
    const [dataHargaBuah, setDataBuah] = useContext(BuahContext)

    useEffect( () => {
        if (dataHargaBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                console.log(res.data)
              setDataBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight}} ))
            })     

        }
    }, [dataHargaBuah]
    )

    return(
        <>
        <div style={{width: '40%', margin: '0 auto', marginTop: '20px'}}>
            <h1 style= {{textAlign:'center'}}>Tabel Harga Buah</h1>
            <table style={{width: '100%', border: '1px solid black'}}>
                <thead>
                    <tr style={{backgroundColor: '#AAAAAA'}}>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataHargaBuah !== null && dataHargaBuah.map((id, index) => {
                            return(
                                <tr key={index}>
                                    <td style= {{textAlign:'center'}}>{index+1}</td>
                                    <td>{id.name}</td>
                                    <td>{id.price}</td>
                                    <td>{id.weight/1000} Kg</td>
                                    <td>
                                        <BuahAction />
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
        
    </>)
};

export default BuahList